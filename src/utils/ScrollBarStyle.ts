const setBGColor = (color: string) => {
  const _documentStyle = document.documentElement.style;
  _documentStyle.setProperty("--scrollbar-background", color);
};

const setThumbColor = (color: string) => {
  const _documentStyle = document.documentElement.style;
  _documentStyle.setProperty("--scrollbar-thumb", color);
};

const setThumbWidth = (width: string) => {
  const _documentStyle = document.documentElement.style;
  _documentStyle.setProperty("--scrollbar-border-width", width);
};

const setDisplay = (display: string) => {
  const _documentStyle = document.documentElement.style;
  _documentStyle.setProperty("--hide-scrollbar", display);
};

export function ScrollBarColor(BGColor: string, ThumbColor: string) {
  setBGColor(BGColor);
  setThumbColor(ThumbColor);
}

export function ScrollBarDisplay(Display: "show" | "hide") {
  if (Display == "show") setDisplay("block");
  if (Display == "hide") setDisplay("none");
}

export function ScrollBarTheme(Theme: "dark" | "light") {
  if (Theme == "dark") {
    setBGColor("#000000");
    setThumbColor("#ffffff");
    setThumbWidth("4px");
  }
  if (Theme == "light") {
    setBGColor("#ffffff");
    setThumbColor("#000000");
    setThumbWidth("3px");
  }
}
