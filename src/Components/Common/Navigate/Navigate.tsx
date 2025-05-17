import React from 'react';
import { Link } from 'react-router-dom';

interface NavigateProps {
    Image?: any;
    Width?: any;
    Navigation?: any;
    NavigateText: string;
    NavigateStyle: string;
}

const Navigate: React.FC<NavigateProps> = ({ Navigation, NavigateStyle, Image, Width, NavigateText }) => {
return (
    <Link to={Navigation} className={NavigateStyle}>
        <img src={Image} alt="" width={Width} />
        { NavigateText }
    </Link>
)
}

export default React.memo(Navigate)