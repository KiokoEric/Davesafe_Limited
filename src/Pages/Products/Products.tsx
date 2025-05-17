import AOS from 'aos';
import React, { useEffect } from 'react';
import Figure from '../../Components/Common/Figure/Figure';
import Heading from '../../Components/Common/Heading/Heading';
import School_Apparel from "../../assets/Apparel/School Apparel.webp";
import Head_Gear from "../../assets/Home_Page/Protective_HeadGear.jpg";
import Eye_Protection from "../../assets/Home_Page/Eye_Protection.jpg";
import Ear_Protection from "../../assets/Home_Page/Ear_Protection.jpg";
import Foot_Protection from "../../assets/Home_Page/Foot_Protection.jpeg";
import Hand_Gloves from "../../assets/Home_Page/Protective_HandGloves.jpg";
import Protective_Clothing from "../../assets/Home_Page/Protective_Clothing.webp";
import Respiratory_Protection from "../../assets/Home_Page/Respiratory_Protection.jpg";

const Products:React.FC = () => {

    useEffect(() => {
        AOS.init();
    })

return (
    <div>
        <Heading
            idName='Products'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-white'
            Heading= 'Our Products'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='grid grid-cols-1 items-end gap-20 mx-auto mb-5 w-11/12 sm:grid-cols-3'>
            <Figure
                Navigation={'/HeadGear'}
                ContainerStyle='cursor-pointer flex flex-col gap-4'
                Image={ Head_Gear}
                Width='600px'
                NavigateText='Protective Head Gear'
            />
            <Figure
                Navigation={'/FaceProtection'}
                ContainerStyle='cursor-pointer flex flex-col gap-4'
                Image={ Eye_Protection }
                Width='600px'
                NavigateText='Eye and Face Protection'
            />
            <Figure
                Navigation={'/HearingProtection'}
                ContainerStyle='cursor-pointer flex flex-col gap-4'
                Image={ Ear_Protection }
                Width='600px'
                NavigateText='Hearing Protection'
            />
        </section> 
        <section data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="1500" className='grid grid-cols-1 items-end justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                Navigation={'/RespiratoryProtection'}
                ContainerStyle='cursor-pointer flex flex-col gap-4'
                Image={ Respiratory_Protection }
                Width='600px'
                NavigateText='Respiratory Protection'
            />
            <Figure
                Navigation={'/HandGloves'}
                ContainerStyle='cursor-pointer flex flex-col gap-4'
                Image={ Hand_Gloves }
                Width='600px'
                NavigateText='Protective Hand Gloves'
            />
            <Figure
                Navigation={'/FootWear'}
                ContainerStyle='cursor-pointer flex flex-col gap-4'
                Image={ Foot_Protection }
                Width='600px'
                NavigateText='Protective Foot Wear'
            />
        </section>
        <section data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="1500" className='grid grid-cols-1 items-end justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                Navigation={'/ProtectiveClothing'}
                ContainerStyle='cursor-pointer flex flex-col gap-4'
                Image={ Protective_Clothing }
                Width='600px'
                NavigateText='Personal Protective Clothing'
            />
            <Figure
                Navigation={'/SchoolClothing'}
                ContainerStyle='cursor-pointer flex flex-col gap-4'
                Image={ School_Apparel }
                Width='600px'
                NavigateText='School Apparel'
            />
        </section>
    </div>
)
}

export default Products