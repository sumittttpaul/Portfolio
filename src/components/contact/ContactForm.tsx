"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState, useTransition } from "react";
import SendEmail from "functions/SendEmail";
import { GradientButton } from "components/ui/Button";
import Separator from "components/ui/Separator";

const services = ["Website", "Web app", "E-commerce", "UI/UX design", "Something else"];

type Status = { type: "Success" | "Error"; name: string; message: string } | null;

const fieldCls =
  "w-full border-0 bg-transparent pb-1 pt-1 text-[clamp(1.125rem,1.6vw,1.375rem)] text-bone outline-none placeholder:text-dim";

function Row({ n, label, htmlFor, children }: { n: string; label: string; htmlFor?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 py-7 sm:grid-cols-[60px_1fr]">
      <span className="font-mono text-[12px] text-dim">{n}</span>
      <div className="flex flex-col gap-3">
        <label htmlFor={htmlFor} className="text-[15px] text-mute">
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<Status>(null);
  const [pending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("service", service);
    if (!service) {
      setStatus({ type: "Error", name: "One more thing", message: "Pick the kind of project you have in mind." });
      return;
    }
    startTransition(async () => {
      try {
        const res = JSON.parse(await SendEmail(data)) as { name: string; message: string; type: string };
        if (res.type === "Success") {
          form.reset();
          setService("");
          setStatus({ type: "Success", name: "Message sent", message: "Thanks for reaching out. A copy of your message is on its way to your inbox." });
        } else {
          setStatus({ type: "Error", name: res.name, message: res.message });
        }
      } catch {
        setStatus({ type: "Error", name: "Something went wrong", message: "Please try again, or email me directly." });
      }
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col" noValidate={false}>
      <Separator />
      <Row n="01" label="What's your name?" htmlFor="cf-name">
        <input id="cf-name" name="name" required autoComplete="name" placeholder="Jane Doe" className={fieldCls} />
      </Row>
      <Separator />
      <Row n="02" label="What's your email?" htmlFor="cf-email">
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          className={fieldCls}
        />
      </Row>
      <Separator />
      <Row n="03" label="What's the name of your organization?" htmlFor="cf-company">
        <input id="cf-company" name="company" autoComplete="organization" placeholder="Optional" className={fieldCls} />
      </Row>
      <Separator />
      <div className="grid gap-3 py-7 sm:grid-cols-[60px_1fr]">
        <span className="font-mono text-[12px] text-dim">04</span>
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-4 text-[15px] text-mute">What services are you looking for?</legend>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={service === s}
                onClick={() => setService(s)}
                className={`rounded-full px-4 py-2.5 text-[14px] transition-colors duration-300 ${
                  service === s ? "bg-bone text-ink-900" : "bg-ink-800 text-bone/80 hover:bg-ink-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <Separator />
      <Row n="05" label="Your message" htmlFor="cf-message">
        <textarea
          id="cf-message"
          name="description"
          rows={4}
          placeholder="Tell me about your project, goals and timeline..."
          className={`${fieldCls} resize-none`}
        />
      </Row>
      <Separator />
      <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <AnimatePresence mode="wait">
          {status ? (
            <m.div
              key={status.name}
              role={status.type === "Error" ? "alert" : "status"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3"
            >
              <span className={`mt-1.5 size-2 shrink-0 rounded-full ${status.type === "Success" ? "bg-emerald-400" : "bg-accent"}`} />
              <span>
                <span className="block text-[15px] font-medium text-bone">{status.name}</span>
                <span className="block text-[14px] text-mute">{status.message}</span>
              </span>
            </m.div>
          ) : (
            <p className="text-[14px] text-mute">You&apos;ll get a copy of your message by email.</p>
          )}
        </AnimatePresence>
        <GradientButton type="submit" size="md" disabled={pending} hoverText={pending ? "Sending..." : "Let's go"} className="w-full sm:w-auto [&>span]:w-full">
          {pending ? "Sending..." : "Send message"}
        </GradientButton>
      </div>
    </form>
  );
}
