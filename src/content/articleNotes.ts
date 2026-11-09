export type ArticleNote = {
  symptom: string;
  cause: string;
  fix: string;
  checklist: string[];
};

/** Editorial summary and review questions shown around each Frontend Lab article, keyed by slug. */
export const articleNotes: Record<string, ArticleNote> = {
  "async-race-condition-in-search-results": {
    symptom: "Results for an older query replace the results for the newest one.",
    cause: "Responses are committed in the order they arrive, not the order they were requested.",
    fix: "Give every request an identity and let only the latest one update state.",
    checklist: [
      "Does any effect set state straight after an await?",
      "What happens if the second request finishes before the first?",
      "Have you tested fast typing with the network throttled?",
    ],
  },
  "state-update-after-unmount-during-navigation": {
    symptom: "A screen keeps working after the user has left it.",
    cause: "Async work started in an effect is not tied to that component's lifetime.",
    fix: "Invalidate ownership in cleanup and check it before every state update.",
    checklist: [
      "Does every async effect have a cleanup that invalidates its work?",
      "Could the work be cancelled outright with an AbortController?",
      "Have you navigated away in the middle of a slow request?",
    ],
  },
  "stale-closure-in-click-outside-listener": {
    symptom: "A click-outside handler acts on a value that is no longer true.",
    cause: "A listener attached once keeps the state from the render that created it.",
    fix: "Keep the listener stable and read the latest value through a ref.",
    checklist: [
      "Which values does each long-lived listener read?",
      "Is an empty dependency array hiding a real dependency?",
      "Would a ref or a functional update give the latest value more safely?",
    ],
  },
  "double-submit-caused-by-ui-state-lag": {
    symptom: "One impatient double click sends the same request twice.",
    cause: "The guard depends on rendered state, which can trail behind user input.",
    fix: "Take a synchronous lock in a ref before any side effect starts.",
    checklist: [
      "What is the damage if this action runs twice?",
      "Is the lock released on failure as well as on success?",
      "Does the server also reject duplicate submissions?",
    ],
  },
  "optimistic-ui-rollback-failure": {
    symptom: "After rapid toggles and a failed request, the UI shows the wrong value.",
    cause: "Rollback restores a value captured before newer interactions happened.",
    fix: "Allow only the latest request to confirm or roll back.",
    checklist: [
      "Is rollback based on a value captured before the latest interaction?",
      "What should the UI show if an older request fails?",
      "Have you tested rapid toggling against a failing endpoint?",
    ],
  },
  "state-update-after-route-transition": {
    symptom: "Data from the previous route appears briefly on the new one.",
    cause: "A route change does not cancel the request the old route started.",
    fix: "Tag each request and commit only if it is still the latest for the active route.",
    checklist: [
      "Which requests are still running when the route changes?",
      "Is each response checked against the route that is active now?",
      "Have you switched routes quickly on a slow connection?",
    ],
  },
};
