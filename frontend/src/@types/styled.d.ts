import 'styled-components'
import {ThemeType} from "../styles/themes/ThemeType.ts";

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}