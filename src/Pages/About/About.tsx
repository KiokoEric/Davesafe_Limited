import AOS from "aos";
import React, { useEffect } from 'react';
import Figure from '../../Components/Common/Figure/Figure';
import Heading from '../../Components/Common/Heading/Heading';
import Story  from "../../assets/About_Page/About_Image.webp";
import About_Profile  from "../../assets/About_Page/About_Profile.jpg";

const About:React.FC = () => {

    useEffect(() => {
        AOS.init();
    })

return (
    <div className="mb-10">
        <Heading
            idName='About'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-white'
            Heading= 'About Us'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className="flex flex-col gap-8">
            <section data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                <Figure
                    ContainerStyle='cursor-pointer flex flex-col items-center justify-center gap-10 mx-auto w-11/12 lg:flex-row'
                    Image={ About_Profile }
                    NavigateText='Vision'
                    DescriptionStyle='text-center sm:text-left'
                    Description= 'To be a national leader in providing innovative, high-quality, and sustainable Personal Protective Equipment solutions that safeguard the health and safety of individuals, businesses and communities.'
                    children={
                        <div className="mt-5">
                            <h3 className="font-bold text-center text-3xl" >Mission</h3>
                            <p className="text-center md:text-left">
                                At Davesafe Limited, our mission is to ensure the safety and well-being of individuals in various industries by providing high-quality Personal Protective Equipment (PPE). We believe that everyone has the right to work and live in a safe environment and we are dedicated to making this a reality through our products and services.
                            </p>
                        </div>
                    }   
                />
            </section>
            <section data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                <Figure
                    ContainerStyle='cursor-pointer flex flex-col items-center justify-center gap-10 mx-auto w-11/12 lg:flex-row-reverse' 
                    Image={ Story }
                    NavigateText='Our Story'
                    DescriptionStyle='text-center sm:text-left'
                    Description= "Davesafe Limited was founded in the year 2018 and has grown as a leading force in the Protective Equipment industry. Our journey began with a vision to make workplaces safer and healthier, driven by a deep sense of responsibility to protect workers, businesses and communities. Over the years, we've tirelessly strived to turn this vision into a reality. From humble beginnings, we have grown into a trusted name in the industry, thanks to our unwavering commitment to excellence and quality."
                />
            </section>
        </section>
    </div>
)
}

export default About