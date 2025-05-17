import React from 'react';
import Figure from '../../../Components/Common/Figure/Figure';
import Heading from '../../../Components/Common/Heading/Heading';
import Face_Sheild from "../../../assets/Face_Protection/Face_Shield.webp";
import Welding_Sheild from "../../../assets/Face_Protection/Welding_Shield.jpg";
import Safety_Goggles from "../../../assets/Face_Protection/Safety_Goggles.jpg";
import Welding_Goggles from "../../../assets/Face_Protection/Welding_Goggles.jpg";
import Safety_Spectacles from "../../../assets/Face_Protection/Safety_Spectacles.jpg";

const Face_Protection:React.FC = () => {
return (
    <div>
        <Heading 
            idName='Face_Protection'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading= 'Eye and Face Protection'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className='grid grid-cols-1 items-center justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Face_Sheild }
                Width='600px'
                NavigateText='Face Shield'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Safety_Goggles }
                Width='600px'
                NavigateText='Safety Goggles'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Safety_Spectacles }
                Width='600px'
                NavigateText='Safety Spectacles'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Welding_Goggles }
                Width='600px'
                NavigateText='Welding Safety Goggles'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Welding_Sheild }
                Width='600px'
                NavigateText='Welding Shield'
            />
        </section>
    </div>
)
}

export default Face_Protection