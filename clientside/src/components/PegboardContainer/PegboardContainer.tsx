import { PropsWithChildren } from "react";
import * as CssType from 'csstype'

interface PegboardContainerProps extends PropsWithChildren {
    width?: CssType.Property.Width;
    height?: CssType.Property.Width;
    className?: string | undefined;
}

export default function PegboardContainer({children, width, height, className}: PegboardContainerProps) {
    return (
        <section role="group" className={`bg-green-300 ${className}`} style={{width, height}}>
            {children}
        </section>
    )
}