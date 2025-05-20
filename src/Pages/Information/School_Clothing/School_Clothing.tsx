import React from 'react';
import Figure from '../../../Components/Common/Figure/Figure';
import Heading from '../../../Components/Common/Heading/Heading';
import Track_Suit from "../../../assets/Apparel/School Apparel.webp";
import Fleece_Jacket from "../../../assets/Apparel/Fleece Jackets.webp";
import RoundNeck_Shirt from "../../../assets/Apparel/School T-Shirts.jpg";
import Polo_Shirt from "../../../assets/Apparel/School Polo T-Shirts.jpg";

const School_Clothing: React.FC = () => {
return (
    <div>
        <Heading 
            idName='School_Apparel'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading= 'School Apparel'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className='grid grid-cols-1 items-end justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={Fleece_Jacket }
                Width='600px'
                NavigateText='Fleece Jacket'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Polo_Shirt }
                Width='600px'
                NavigateText='School Polo T-Shirts'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ RoundNeck_Shirt }
                Width='600px'
                NavigateText='School Round Neck T-Shirts'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Track_Suit }
                Width='600px'
                NavigateText='School Track Suit'
            />
        </section>
    </div>
)
}

export default School_Clothing