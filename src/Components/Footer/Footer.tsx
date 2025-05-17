import React from 'react'
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Icon from '../Common/Contact/Icon';

const Footer:React.FC = () => {
return (
    <div className='bg-black py-2'>
        <div className='flex flex-col gap-2  justify-between mx-auto sm:w-3/4 sm:flex-row' >
            <Icon 
                IconStyle='flex gap-2 justify-center'
                children={<AiFillMail size="1.5rem" color='white' />}
                TextStyle='text-base text-white sm:text-lg'
                Text='Email: info@davesafeltd.com'
            />
            <Icon 
                IconStyle='flex gap-2 items-center justify-center'
                children={<BsFillTelephoneOutboundFill size="1.5rem" color='white' />}
                TextStyle='text-lg text-white'
                Text='Call: 0112 570 607'
            />
        </div>
    </div>
)
}

export default Footer