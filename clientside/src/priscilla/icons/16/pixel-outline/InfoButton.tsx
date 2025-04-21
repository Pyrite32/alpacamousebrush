import React from 'react';

interface InfoIconProps {
    color?: string;
    size?: number | undefined;
}

const InfoIcon: React.FC<InfoIconProps> = ({ color = 'black', size = 16 }) => {
    return (
        <div style={{ width: size, height: size}}>
        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" viewBox="0 -0.5 16 16" width={size} height={size}><metadata>Generated with pixel-perfect-svg https://github.com/kagof/pixel-perfect-svg</metadata><path stroke={color} d="M5,0h6M3,1h10M2,2h2M5,2h6M12,2h2M1,3h3M6,3h4M12,3h3M1,4h3M12,4h3M0,5h4M12,5h4M0,6h3M13,6h3M0,7h3M13,7h3M0,8h3M13,8h3M0,9h3M13,9h3M0,10h4M12,10h4M1,11h4M11,11h4M1,12h6M9,12h6M2,13h2M6,13h1M10,13h4M3,14h3M10,14h3M5,15h2M10,15h1"/></svg>
        </div>
    );
};

export default InfoIcon;