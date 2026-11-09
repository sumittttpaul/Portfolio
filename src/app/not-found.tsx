import type { Metadata } from "next";
import { GradientButton, LightButton } from "components/ui/Button";
import Wordmark from "components/site/Wordmark";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[80svh] flex-col items-center justify-center pb-10 pt-[140px] text-center">
      <div className="w-full max-w-[520px] text-bone/10">
        <Wordmark text="404" />
      </div>
      <p className="eyebrow mt-8">Page not found</p>
      <h1 className="mt-4 text-display-md font-medium text-bone">This page took a different route</h1>
      <p className="mt-4 max-w-[440px] text-[15px] text-mute">
        The link may be broken or the page may have moved. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <GradientButton href="/" size="md">
          Back to home
        </GradientButton>
        <LightButton href="/work">See my work</LightButton>
      </div>
    </section>
  );
}
