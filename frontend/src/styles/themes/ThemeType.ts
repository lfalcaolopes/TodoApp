export type ThemeType = {
  colors: {
    background: string,

    primaryCard: string,
    secondaryCard: string,

    primaryText: string,
    secondaryText: string,

    accent: string,
    accentText: string,
  },
  functionalColors: {
    successBackground: string,
    successLight: string,
    success: string,
    successDark: string,

    warningBackground: string,
    warningLight: string,
    warning: string,
    warningDark: string,

    errorBackground: string,
    errorLight: string,
    error: string,
    errorDark: string,
  },
  fontSizes: {
    xSmall: string, // 12px
    small: string, // 14px
    medium: string,    // 16px
    large: string,   // 24px
    xLarge: string,  // 40px
  },
}

