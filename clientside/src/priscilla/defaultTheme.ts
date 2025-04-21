import defaultColors from "./_colors/defaultColors";
import { PriscillaThemeColors } from "./_colors/ts/PriscillaThemeColors";

// The intent is to define a default theme for Priscilla, which can be extended or overridden by user themes.
export interface PriscillaTheme {
    colors: PriscillaThemeColors;
}

export const defaultTheme: PriscillaTheme = {
    colors: defaultColors
}