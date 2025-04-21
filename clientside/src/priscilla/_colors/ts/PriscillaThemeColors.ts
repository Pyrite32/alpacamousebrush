import * as CSS from 'csstype';

type CssColor = CSS.Property.Color | undefined;
export interface PriscillaThemeColors {
    primary: CssColor;
    secondary: CssColor;
    tertiary: CssColor;
    disabled: CssColor;
    background: CssColor;
    containerBackground: CssColor;
    containerRim: CssColor;
    accentSelected: CssColor;
    accentInfo: CssColor;
    accentInfoBackdrop: CssColor;
    accentGood: CssColor;
    accentGoodBackdrop: CssColor;
    accentUrgent: CssColor;
    accentUrgentBackdrop: CssColor;
    accentWarn: CssColor;
    accentWarnBackdrop: CssColor;
    accentSelectedBackdrop: CssColor;
}