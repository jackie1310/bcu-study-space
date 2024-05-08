import React, { useEffect } from 'react';
import "./Home.module.scss"
import Topbar from '../Topbar';
import UploadFiles from '../UploadFiles';
import ShowFiles from '../ShowFiles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdmins } from '@/hooks/fetchAdmins';
// import { useFetchSession } from '@/hooks/useSession';
import { setAuthAdmin } from '@/redux/Loading/authAdmin';
import { motion } from 'framer-motion';
import { BackgroundCircles } from '../designs/HomeDesign';
import Wifi from '../Objects/Wifi';
import Weather from '../Objects/Weather';
import Drone from '../Objects/Drone';
import Wave from '../Objects/Wave';
import Blob from '../Objects/Blob';
// import Hero from '../Hero';

export default function HomeComponent() {
    const authAdmin = useSelector((state: any) => state.authAdmin.status);
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    console.log(authAdmin)
    return (
        <div className='mt-20 h-[1200px] relative'>
            <motion.div 
                initial={{ opacity: 0, y: 20 }} // Initial animation state (hidden and slightly moved down)
                animate={{ opacity: 1, y: 0 }} // Animation state when component is visible (fully opaque and original position)
                transition={{ duration: 1.5 }}
                className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem] font-lobster font-normal'
            >
                <motion.h1 
                    className='font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[5.75rem] xl:leading-[4.5rem] text-white'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 3 }}
                >
                    Welcome to BCU study space
                </motion.h1>
            </motion.div>
            {/* <div className='relative w-screen'>
                <div className='absolute z-0 w-screen'>
                    <Wave/>
                </div>
                <div className='absolute z-10 w-screen'>
                    <Blob/>
                </div>
            </div> */}
            <Wave/>
            
            {/* <Drone/> */}
            <BackgroundCircles/>
            
        </div>
    )
}
