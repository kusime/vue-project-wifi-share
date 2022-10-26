class Themes {
  light: string;
  dark: string;
  constructor(light: string, dark: string) {
    this.light = light;
    this.dark = dark;
    this.toggleTheme(true);
  }
  getCurrentPreferTheme() {
    // https://usefulangle.com/post/318/javascript-check-dark-mode-activated
    const matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return matched ? "dark" : "light";
  }
  toggleTheme(initial: boolean = false) {
    // initial logic
    if (initial) {
      document.documentElement.dataset.theme =
        this[this.getCurrentPreferTheme()];
      return;
    }

    // toggle logic
    if (document.documentElement.dataset.theme === this.dark) {
      document.documentElement.dataset.theme = this.light;
      return;
    }
    document.documentElement.dataset.theme = this.dark;
  }
}

export default new Themes("light", "dark");
