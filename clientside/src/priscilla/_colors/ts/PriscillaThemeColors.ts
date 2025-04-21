import * as CSS from 'csstype';

type PriscillaThemeColor = CSS.Property.Color | undefined;

export interface PriscillaThemeColors {
    primary: PriscillaThemeColor;
    secondary: PriscillaThemeColor;
    tertiary: PriscillaThemeColor;
    lighter: PriscillaThemeColor;
    lightest: PriscillaThemeColor;
    background: PriscillaThemeColor;
    backgroundLighter: PriscillaThemeColor;
    backgroundRim: PriscillaThemeColor;
    accent: PriscillaThemeColor;
    accentInfo: PriscillaThemeColor;
    accentGood: PriscillaThemeColor;
    accentBad: PriscillaThemeColor;
    accentWarn: PriscillaThemeColor;
}