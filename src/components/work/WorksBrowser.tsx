"use client";

import { useMemo, useState } from "react";
import type { Project } from "content/projects";
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
      <div className="container-site mb-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        <label className="relative block sm:w-[220px]">
          <span className="sr-only">Filter by project type</span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="h-11 w-full appearance-none rounded-full bg-ink-800 pl-5 pr-10 text-[14px] text-bone outline-none transition-colors focus:bg-ink-750"
          >
            <option value="">All project types</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mute" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </label>
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
        <WorksStack key={`${type}-${query}`} projects={shown} />
      ) : (
        <p className="py-20 text-center text-[15px] text-mute" role="status">
          No projects match that search.
        </p>
      )}
    </>
  );
}
