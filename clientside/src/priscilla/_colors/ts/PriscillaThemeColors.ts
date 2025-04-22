import * as CSS from 'csstype';

export interface PriscillaThemeColors extends Record<string, CSS.Property.Color> {
    primary: CSS.Property.Color;
    secondary: CSS.Property.Color;
    tertiary: CSS.Property.Color;
    disabled: CSS.Property.Color;
    background: CSS.Property.Color;
    containerBackground: CSS.Property.Color;
    containerRim: CSS.Property.Color;
    accentSelected: CSS.Property.Color;
    accentInfo: CSS.Property.Color;
    accentInfoBackdrop: CSS.Property.Color;
    accentSuccess: CSS.Property.Color;
    accentSuccessBackdrop: CSS.Property.Color;
    accentUrgent: CSS.Property.Color;
    accentUrgentBackdrop: CSS.Property.Color;
    accentWarn: CSS.Property.Color;
    accentWarnBackdrop: CSS.Property.Color;
    accentSelectedBackdrop: CSS.Property.Color;
}