import * as CSS from 'csstype';

interface PriscillaIconProps {
    color?: CSS.Property.Color | undefined;
    size?: CSS.Property.Width<(string & {}) | 0> | undefined;
}

export default PriscillaIconProps;