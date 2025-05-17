import React, { useState } from 'react'
import Button from '../Common/Button/Button';
import Navigate from '../Common/Navigate/Navigate';
import Logo from '../../assets/Home_Page/Logo.png';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header:React.FC = () => {

    // USESTATE HOOK

    const [ExtendNavbar,setExtendNavbar ] = useState<boolean>(false)

    // OPENING AND CLOSING OF THE MOBILE MENU

    const toggleMenu = () => {
        setExtendNavbar(!ExtendNavbar);
    };

return (
    <div className='flex items-center justify-between m-auto px-2 py-0.5 shadow-lg sticky'>
        <section>
            <Navigate 
                Image={Logo}
                Width='36px'
                Navigation={'/'}
                NavigateStyle='flex gap-1 items-center font-bold no-underline text-black text-3xl'
                NavigateText='Davesafe Limited'
            />
        </section>
        <section className='hidden md:flex gap-20'>
            <Navigate 
                Navigation={'/'}
                NavigateStyle='no-underline text-black text-lg hover:text-blue-600'
                NavigateText='Home'
            />
            <Navigate 
                Navigation={'/About'}
                NavigateStyle='no-underline text-black text-lg hover:text-blue-600'
                NavigateText='About'
            />
            <Navigate 
                Navigation={'/Products'}
                NavigateStyle='no-underline text-black text-lg hover:text-blue-600'
                NavigateText='Products'
            />
        </section>
        <section className='hidden md:block'>
            <Navigate 
                Navigation={'/Contact'}
                NavigateStyle='bg-blue-600 cursor-pointer flex no-underline py-1 px-5 rounded text-lg text-white hover:bg-black'
                NavigateText='Contact Now'
            />
        </section>
        {/* MOBILE MENU */}
        <section className='md:hidden'>
            <Button 
                onClick={toggleMenu}
                children= {ExtendNavbar ? <FontAwesomeIcon icon={faX} className="text-sm" /> : <FontAwesomeIcon icon={faBars} className="text-lg" />}
            />
            {ExtendNavbar && (
                <nav className="bg-black absolute top-9 mt-1.5 right-0 flex flex-col gap-4 m-auto pl-4 pt-2 pb-8 rounded-Header text-base text-white w-36 xl:hidden">
                    <Navigate 
                        Navigation={'/'}
                        NavigateStyle='border-b-2 border-white no-underline pb-2 text-center text-white text-base hover:text-blue-600'
                        NavigateText='Home'
                    />
                    <Navigate 
                        Navigation={'/About'}
                        NavigateStyle='border-b-2 border-white no-underline pb-2 text-center text-white text-base hover:text-blue-600'
                        NavigateText='About'
                    />
                    <Navigate 
                        Navigation={'/Products'}
                        NavigateStyle='border-b-2 border-white no-underline pb-2 text-center text-white text-base hover:text-blue-600'
                        NavigateText='Products'
                    />
                    <Navigate 
                        Navigation={'/Contact'}
                        NavigateStyle='border-b-2 border-white no-underline pb-2 text-center text-white text-base hover:text-blue-600'
                        NavigateText='Contact'
                    />
                </nav>
            )}
        </section>
    </div>
)
}

export default Header