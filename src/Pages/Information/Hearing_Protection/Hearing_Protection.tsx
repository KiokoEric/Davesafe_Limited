import React from 'react'
import Ear_Muffs from "../../../assets/Hearing_Protection/Ear_Muffs.jpg";
import Ear_Plugs from "../../../assets/Hearing_Protection/Ear_Plugs.webp";
import Figure from '../../../Components/Common/Figure/Figure';
import Heading from '../../../Components/Common/Heading/Heading';

const Hearing_Protection:React.FC = () => {
return (
    <div>
        <Heading 
            idName='Hearing_Protection'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading= 'Hearing Protection'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className='grid grid-cols-1 items-center justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Ear_Muffs }
                Width='600px'
                NavigateText='Ear Muffs'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Ear_Plugs }
                Width='600px'
                NavigateText='Ear Plugs'
            />
        </section>
    </div>
)
}

export default Hearing_Protection