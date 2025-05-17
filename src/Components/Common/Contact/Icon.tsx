import React from 'react'

interface IconProps {
    Text: string;
    children?: any;
    IconStyle?: string;
    TextStyle?: string;
}

const Icon:React.FC<IconProps> = ({ IconStyle, children, Text, TextStyle }) => {
return (
    <figure className={IconStyle} >
        {children}
        <figcaption>
            <p className={TextStyle} >{Text}</p>
        </figcaption>
    </figure>
)
}

export default Icon