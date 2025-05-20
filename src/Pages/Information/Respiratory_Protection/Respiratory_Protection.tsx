import React from 'react';
import Figure from '../../../Components/Common/Figure/Figure';
import Heading from '../../../Components/Common/Heading/Heading';
import Dust_Masks from "../../../assets/Respiratory_Protection/Dust_Mask.jpg";
import Half_Face_Mask from "../../../assets/Respiratory_Protection/3M_Half-Face_Mask.webp";
import Full_Face_Mask from "../../../assets/Respiratory_Protection/Full_Face_Respiratory_Mask.jpg";

const Respiratory_Protection:React.FC = () => {
return (
    <div>
        <Heading 
            idName='Respiratory_Protection'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading= 'Respiratory Protection'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className='grid grid-cols-1 items-end justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Dust_Masks }
                Width='600px'
                NavigateText='Dust Masks'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Half_Face_Mask }
                Width='600px'
                NavigateText='3M Half Face Respiratory Mask'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Full_Face_Mask }
                Width='600px'
                NavigateText='3M Full Face Respiratory Mask'
            />
        </section>
    </div>
)
}

export default Respiratory_Protection