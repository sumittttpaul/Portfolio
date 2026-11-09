"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import SendEmail from "functions/SendEmail";
import { Reveal } from "components/ui/Reveal";
import { site } from "content/site";

const input =
  "w-full border-0 border-b border-[#B6B6B6] bg-transparent px-6 py-2 text-[14px] font-medium leading-5 text-bone outline-none transition-colors placeholder:text-[#8A8A8A] focus:border-white";

export default function WorkContact() {
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, start] = useTransition();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("service", "Project enquiry");
    start(async () => {
      try {
        const res = JSON.parse(await SendEmail(data)) as { message: string; type: string };
        const ok = res.type === "Success";
        if (ok) form.reset();
        setStatus({ ok, text: ok ? "Thanks, your message is on its way." : res.message });
      } catch {
        setStatus({ ok: false, text: `Something went wrong. Please email ${site.email}.` });
      }
    });
  };

  return (
    <section aria-label="Start your project" className="mx-2 rounded-[18px] bg-ink-950 px-[18px] py-16 sm:mx-4 sm:px-9 xl:flex xl:min-h-[670px] xl:items-center">
      <div className="mx-auto grid w-full max-w-[1520px] gap-12 xl:grid-cols-[minmax(0,480px)_minmax(0,720px)] xl:justify-between">
        <Reveal>
          <p className="text-[12px] font-medium uppercase leading-[14.4px] text-[#8A8A8A]">Let&apos;s talk</p>
          <h2 className="mt-4 text-[clamp(2.75rem,6.35vw,4rem)] font-normal leading-none tracking-[-0.01em] text-white">
            Start your project with Sumeet
          </h2>
          <p className="mt-8 font-inter text-[16px] leading-[21px] text-[#8A8A8A]">
            Tell me what you&apos;re building. I read every brief myself, and from there we work out the scope and
            timeline together, so you always know what happens next.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Image src={site.avatar} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
            <div>
              <p className="text-[14px] font-medium leading-[18px] text-white">{site.name}</p>
              <p className="text-[13px] leading-[18px] text-soft">{site.role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="overflow-hidden rounded-xl bg-ink-750">
            <div className="grid sm:grid-cols-2">
              <div className="sm:border-r sm:border-[#B6B6B6]">
                <label htmlFor="wc-name" className="block px-6 pt-6 text-[15px] font-medium leading-[21px] text-pale">
                  Name
                </label>
                <input id="wc-name" name="name" required autoComplete="name" placeholder="Your name" className={`${input} h-14`} />
              </div>
              <div>
                <label htmlFor="wc-email" className="block px-6 pt-6 text-[15px] font-medium leading-[21px] text-pale">
                  Email Address
                </label>
                <input id="wc-email" name="email" type="email" required autoComplete="email" placeholder="Work email" className={`${input} h-14`} />
              </div>
            </div>
            <label htmlFor="wc-about" className="block px-6 pt-6 text-[15px] font-medium leading-[21px] text-pale">
              About your project
            </label>
            <textarea
              id="wc-about"
              name="description"
              rows={5}
              required
              placeholder="What are you building? Share your goals and timeline."
              className={`${input} h-32 resize-none pt-[18px]`}
            />
            <div className="flex flex-col gap-4 px-6 pb-6 pt-7 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={pending}
                className="h-[52px] rounded-full bg-bone px-7 font-inter text-[14px] font-medium text-ink-950 transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {pending ? "Sending..." : "Send message"}
              </button>
              {status && (
                <p role={status.ok ? "status" : "alert"} className={`text-[14px] ${status.ok ? "text-emerald-400" : "text-accent"}`}>
                  {status.text}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
