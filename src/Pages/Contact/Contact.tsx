import * as z from 'zod';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';
import { AiFillMail } from "react-icons/ai";
import { zodResolver } from '@hookform/resolvers/zod';
import Icon from '../../Components/Common/Contact/Icon';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../Components/Common/Button/Button';
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Heading from '../../Components/Common/Heading/Heading';

interface FormValues {
    Name: string;
    Email: string;
    Message: string;
    PhoneNumber: string;
};

const Contact:React.FC = () => {

    const { enqueueSnackbar } = useSnackbar();

    const formRef = useRef<HTMLFormElement | any>(null); 
    
    // CREATION OF THE REGISTRATION ZOD SCHEMA

    const ContactSchema = z.object({
        PhoneNumber: z.string(),
        Name: z.string().min(1, { message: 'Name is required'}),
        Message: z.string().min(1, { message: 'Message is required'}),
        Email: z.string().email({ message: "Invalid email address" }),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(ContactSchema)
    });

    const onSubmit: SubmitHandler<FormValues> = async () => {
        emailjs.sendForm('service_lnd17pd', 'template_ljtj0rg', formRef.current, '5H9ekQHtYztzp2ykN')
        enqueueSnackbar("Message has been successfully sent", {variant: "success"})
    }

return (
    <div className='mb-10'>
        <Heading
            idName='Contact'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 text-white'
            Heading= 'Contact'
            HeadingStyle= 'font-bold text-6xl'
        />
        <h2 className='capitalize font-bold my-5 text-center text-4xl'>Get in touch</h2>
        <section className='grid grid-cols-1 items-center mx-auto w-11/12 lg:grid-cols-2'>
            <div className='hidden lg:flex flex-col gap-10'>
                <Icon 
                    IconStyle='flex gap-2'
                    children={<AiFillMail size="2.5rem" />}
                    TextStyle='font-bold text-3xl'
                    Text='info@davesafeltd.com'
                />
                <Icon 
                    IconStyle='flex gap-2'
                    children={<BsFillTelephoneOutboundFill size="2.5rem" />}
                    TextStyle='font-bold text-3xl'
                    Text='0112 570 607'
                />
            </div>
            <form method="post" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className='flex flex-col items-center gap-2'>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor="">Name</label> 
                    <input placeholder='Enter Full Name/Organisation (Required)' {...register('Name', { required: 'Name is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-custom' required />
                    {errors.Name && <p className="text-center text-red-700">{errors.Name.message}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor="Email">Email</label> 
                    <input placeholder='Enter Email Address (Required)' {...register('Email', { required: 'Email is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-custom' required />
                    {errors.Email && <p className="text-center text-red-700">{errors.Email.message}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor="Email">Phone Number</label> 
                    <input placeholder="Enter Phone Number" {...register('PhoneNumber', { required: 'Phone Number is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-custom' required />
                    {errors.PhoneNumber && <p className="text-center text-red-700">{errors.PhoneNumber.message}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor="Email">Message</label> 
                    <textarea placeholder="Enter Message (Required)" {...register('Message', { required: 'Message is required' })} className='border-black border-b h-40 outline-none truncate px-1 py-2 text-black w-80 sm:w-custom' required />
                    {errors.Message && <p className="text-center text-red-700">{errors.Message.message}</p>}
                </div>  
                <div className='flex items-start mt-2'>
                    <Button 
                        onClick={handleSubmit(onSubmit)}
                        ButtonStyle='bg-blue-600 cursor-pointer py-1 rounded text-center text-white w-52 hover:bg-black'
                        ButtonText='Send Message'
                    />
                </div>
            </form>
        </section>
    </div>
)
}

export default Contact
