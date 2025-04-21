import * as CSS from 'csstype';

type PriscillaThemeColor = CSS.Property.Color | undefined;
export interface PriscillaThemeColors {
    primary: PriscillaThemeColor;
    secondary: PriscillaThemeColor;
    tertiary: PriscillaThemeColor;
    disabled: PriscillaThemeColor;
    background: PriscillaThemeColor;
    containerBackground: PriscillaThemeColor;
    containerRim: PriscillaThemeColor;
    accentSelected: PriscillaThemeColor;
    accentInfo: PriscillaThemeColor;
    accentInfoBackdrop: PriscillaThemeColor;
    accentGood: PriscillaThemeColor;
    accentGoodBackdrop: PriscillaThemeColor;
    accentUrgent: PriscillaThemeColor;
    accentUrgentBackdrop: PriscillaThemeColor;
    accentWarn: PriscillaThemeColor;
    accentWarnBackdrop: PriscillaThemeColor;
    accentSelectedBackdrop: PriscillaThemeColor;
}