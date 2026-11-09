"use client";

import { useMemo, useState } from "react";
import type { Project } from "content/projects";
import Select from "components/ui/Select";
import WorksStack from "./WorksStack";

/** Filter bar (project type + keyword search) above the stacked project cards. */
export default function WorksBrowser({ projects }: { projects: Project[] }) {
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");
  const types = useMemo(() => Array.from(new Set(projects.map((p) => p.type))), [projects]);
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (!type || p.type === type) &&
        (!q || [p.name, p.type, p.summary, ...(p.stack ?? [])].some((s) => s.toLowerCase().includes(q))),
    );
  }, [projects, type, query]);

  return (
    <>
      <div className="relative z-[60] mx-auto mb-12 flex w-full flex-col gap-3 px-2 sm:w-[calc(80%-57.6px)] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-0 lg:w-[min(58vw,1110px)]">
        <Select
          label="Filter by project type"
          value={type}
          onChange={setType}
          options={[{ value: "", label: "All project types" }, ...types.map((t) => ({ value: t, label: t }))]}
          className="sm:w-[220px]"
        />
        <label className="flex h-11 items-center gap-2 rounded-full bg-ink-800 px-5 text-mute transition-colors focus-within:bg-ink-750 sm:w-[260px]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by keyword..."
            className="h-full w-full bg-transparent text-[14px] text-bone outline-none placeholder:text-dim"
          />
        </label>
      </div>
      {shown.length ? (
        <WorksStack key={`${type}-${query}`} projects={shown} settleFirst />
      ) : (
        <p className="py-20 text-center text-[15px] text-mute" role="status">
          No projects match that search.
        </p>
      )}
    </>
  );
}
