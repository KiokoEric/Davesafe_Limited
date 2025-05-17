import React from 'react'
import Figure from '../../../Components/Common/Figure/Figure';
import Heading from '../../../Components/Common/Heading/Heading';
import Safety_Helmet from "../../../assets/Head_Gear/Safety_Helmet.jpg";
import Motorcycle_Helmet from "../../../assets/Head_Gear/Motorcycle_Helmet.jpg";
import FireFighter_Helmet from "../../../assets/Head_Gear/FireFighter_Helmet.jpg";

const Head_Gear:React.FC = () => {
return (
    <div>
        <Heading 
            idName='Head_Gear'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading= 'Protective Head Gear'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className='grid grid-cols-1 items-center justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Safety_Helmet }
                Width='600px'
                NavigateText='Safety Helmet'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ FireFighter_Helmet }
                Width='600px'
                NavigateText='FireFighter Helmet'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Motorcycle_Helmet }
                Width='600px'
                NavigateText='Motorcycle Helmet'
            />
        </section>
    </div>
)
}

export default Head_Gear