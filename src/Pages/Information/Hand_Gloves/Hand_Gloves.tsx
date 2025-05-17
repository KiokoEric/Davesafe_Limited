import React from 'react';
import Figure from '../../../Components/Common/Figure/Figure';
import Heading from '../../../Components/Common/Heading/Heading';
import PVC_Gloves from "../../../assets/Hand_Gloves/Red_PVC_Gloves.jpg";
import Latex_Gloves from "../../../assets/Hand_Gloves/Latex_Gloves.webp";
import Canvas_Gloves from "../../../assets/Hand_Gloves/Canvas_Gloves.webp";
import Welding_Gloves from "../../../assets/Hand_Gloves/Welding_Gloves.jpg";
import Diamond_Gloves from "../../../assets/Hand_Gloves/Diamond_Gloves.jpg";
import Leather_Gloves from "../../../assets/Hand_Gloves/Leather_Gloves.webp";
import Nitrile_Gloves from "../../../assets/Hand_Gloves/Nitrile_Gloves.webp";
import Cotton_Gloves from "../../../assets/Hand_Gloves/Cotton_Hand_Gloves.jpg";
import Cut_Resistant_Gloves from "../../../assets/Hand_Gloves/Cut_Resistant_Gloves.jpg";

const Hand_Gloves:React.FC = () => {
return (
    <div>
        <Heading 
            idName='Hand_Gloves'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading= 'Protective Hand Gloves'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className='grid grid-cols-1 items-center justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Canvas_Gloves }
                Width='600px'
                NavigateText='Canvas Gloves'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Cotton_Gloves }
                Width='600px'
                NavigateText='Cotton Hand Gloves'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Cut_Resistant_Gloves }
                Width='600px'
                NavigateText='Cut Resistant Gloves'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Diamond_Gloves }
                Width='600px'
                NavigateText='Diamond Gloves'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Leather_Gloves }
                Width='600px'
                NavigateText='Leather Gloves'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Nitrile_Gloves }
                Width='600px'
                NavigateText='Nitrile Gloves'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Latex_Gloves }
                Width='600px'
                NavigateText='Latex Gloves'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ PVC_Gloves }
                Width='600px'
                NavigateText='PVC Gloves'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Welding_Gloves }
                Width='600px'
                NavigateText='Welding Gloves'
            />
        </section>
    </div>
)
}

export default Hand_Gloves