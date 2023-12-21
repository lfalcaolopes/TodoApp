import {ThemeType} from "./ThemeType.ts";

export const lightTheme : ThemeType = {
  colors: {
    background: "#FAFBFF",

    primaryCard: "#F5F8FF",
    secondaryCard: "#DFE5F4",

    primaryText: "#12161F",
    secondaryText: "#959FBA",

    accent: "#3F71E5",
    accentText: "#F5F8FF",
  },
  functionalColors: {
    successBackground: "#E3FFDE",
    successLight: "#BBE6B4",
    success: "#8DCC83",
    successDark: "#15510A",

    warningBackground: "#FFFCDE",
    warningLight: "#E6E2BA",
    warning: "#C1B859",
    warningDark: "#544703",

    errorBackground: "#FFE0DE",
    errorLight: "#E0B1AE",
    error: "#BB7772",
    errorDark: "#6E2723",
  },
  fontSizes: {
    xSmall: "0.875rem", // 14px
    small: "1rem",      // 16px
    medium: "1.25rem",  // 20px
    large: "1.75rem",   // 28px
    xLarge: "3rem",     // 40px
  },
}