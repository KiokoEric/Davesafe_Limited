import React from 'react';
import Figure from '../../../Components/Common/Figure/Figure';
import Heading from '../../../Components/Common/Heading/Heading';
import Security_Belt from "../../../assets/Security_Uniform/Security_Belt.png";
import Security_Shirt from "../../../assets/Security_Uniform/Security_Shirt.jpg";
import Security_Beret from "../../../assets/Security_Uniform/Security_Beret.jpg";
import Security_Baton from "../../../assets/Security_Uniform/Security_Baton.jpg";
import Security_Socks from "../../../assets/Security_Uniform/Security_Socks.png";
import Security_Boots from "../../../assets/Security_Uniform/Security_Boots.jpg";
import Security_Trouser from "../../../assets/Security_Uniform/Security_Trouser.jpg";
import Security_Sweater from "../../../assets/Security_Uniform/Security_Sweaters.jpg";
import Security_Whistle from "../../../assets/Security_Uniform/Security_Whistle_and_Lanyard.png";

const Security_Uniform: React.FC = () => {
return (
    <div>
        <Heading 
            idName='Security_Uniform'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading= 'Security Uniform'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className='grid grid-cols-1 items-end justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Security_Shirt }
                Width='600px'
                NavigateText='Security Shirt'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Security_Trouser }
                Width='600px'
                NavigateText='Security Trouser'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Security_Sweater }
                Width='600px'
                NavigateText='Security Sweater'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Security_Beret }
                Width='600px'
                NavigateText='Security Beret'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Security_Belt }
                Width='600px'
                NavigateText='Security Beret'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Security_Socks }
                Width='600px'
                NavigateText='Security Socks'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Security_Boots }
                Width='600px'
                NavigateText='Security Boots'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Security_Baton }
                Width='600px'
                NavigateText='Security Baton'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4 text-center'
                Image={ Security_Whistle }
                Width='600px'
                NavigateText='Security Whistle and Lanyard'
            />
        </section>
    </div>
)
}

export default Security_Uniform