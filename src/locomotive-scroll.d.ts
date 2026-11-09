// locomotive-scroll v5 ships types that its package.json "exports" map does not
// expose, so declare the small surface this project uses.
declare module "locomotive-scroll" {
  type ScrollToOptions = { offset?: number; duration?: number; immediate?: boolean; lock?: boolean; force?: boolean };
  export default class LocomotiveScroll {
    constructor(options?: { lenisOptions?: Record<string, unknown>; autoStart?: boolean });
    scrollTo(target: number | string | HTMLElement, options?: ScrollToOptions): void;
    start(): void;
    stop(): void;
    destroy(): void;
  }
}
