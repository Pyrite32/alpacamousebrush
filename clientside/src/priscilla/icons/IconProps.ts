import * as CSS from 'csstype';
import PriscillaThemeColor from '../_colors/ts/PriscillaThemeColor';
interface PriscillaIconProps {
    color?: PriscillaThemeColor | undefined;
    size?: CSS.Property.Width<(string & {}) | 0> | undefined;
}

export default PriscillaIconProps;