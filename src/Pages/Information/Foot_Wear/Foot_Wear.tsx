import React from 'react';
import Figure from '../../../Components/Common/Figure/Figure';
import Heading from '../../../Components/Common/Heading/Heading';
import Gum_Boots from "../../../assets/Foot_Wear/Gum_Boots.webp";
import Safety_Shoes from "../../../assets/Foot_Wear/Safety_Shoes.jpg";
import Safety_Boots from "../../../assets/Foot_Wear/Safety_Boots.jpg";
import Security_Boots from "../../../assets/Foot_Wear/Security_Boots.jpg";

const Foot_Wear: React.FC = () => {
return (
    <div>
        <Heading 
            idName='Foot_Wear'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading= 'Protective Foot Wear'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className='grid grid-cols-1 items-end justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Gum_Boots }
                Width='600px'
                NavigateText='Gum Boots'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Safety_Shoes }
                Width='600px'
                NavigateText='Safety Shoes'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Safety_Boots }
                Width='600px'
                NavigateText='Safety Boots'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Security_Boots }
                Width='600px'
                NavigateText='Security Boots'
            />
        </section>
    </div>
)
}

export default Foot_Wear