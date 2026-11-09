import Image from "next/image";
import Link from "next/link";
import { nav, site, socials, whatsapp } from "content/site";
import { getArticles } from "lib/blog";
import { Clocks, CopyEmail } from "./FooterClient";
import Wordmark from "./Wordmark";

const linkCls = "text-[14px] font-medium leading-[26px] text-bone transition-opacity duration-300 hover:opacity-60";

export default function Footer() {
  const articles = getArticles().slice(0, 4);
  return (
    <footer className="relative z-10 mx-2 mb-[72px] mt-20 overflow-hidden rounded-[16px] bg-ink-750 sm:mx-4 sm:mt-24 sm:rounded-[20px]">
      <div className="container-site pb-6 pt-16 sm:pt-[60px]">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 lg:grid-cols-[1.3fr_0.5fr_0.9fr_1fr_0.6fr] lg:gap-8">
          <div className="col-span-2 flex flex-col gap-6 md:col-span-4 lg:col-span-1">
            <div>
              <p className="mb-3 text-[15px] text-mute">Let&apos;s build something together:</p>
              <CopyEmail email={site.email} />
            </div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-ink-900 p-1.5 pr-5 text-[15px] font-medium text-bone transition-colors hover:bg-black"
            >
              <Image src={site.avatar} alt="" width={36} height={36} className="size-9 rounded-full object-cover" />
              Message me on WhatsApp
              <span className="transition-transform duration-300 ease-expo group-hover:translate-x-1">→</span>
            </a>
          </div>

          <FooterCol title="Pages">
            {[{ label: "Home", href: "/" }, ...nav].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={linkCls}>
                  {n.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="How I can help">
            {["Websites", "Online stores", "Web apps", "Motion and interaction"].map((label) => (
              <li key={label}>
                <Link href="/contact" className={linkCls}>
                  {label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Latest writing">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link href={`/blog/${a.slug}`} className={`${linkCls} line-clamp-1`}>
                  {a.title}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            {socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {s.label}
                </a>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="mt-16">
          <Clocks timeZone={site.timeZone} location={site.location} />
        </div>

        <div className="mt-14 text-bone/95">
          <Wordmark />
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[12px] font-medium leading-[17px] text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li>
              <Link href="/blog" className="transition-colors hover:text-bone">
                Frontend Lab
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-bone">
                Contact
              </Link>
            </li>
            <li>
              <a href="/sitemap.xml" className="transition-colors hover:text-bone">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-[15px] leading-[21px] text-mute">{title}:</p>
      <ul className="flex flex-col">{children}</ul>
    </div>
  );
}
