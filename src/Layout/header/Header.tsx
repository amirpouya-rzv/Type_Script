import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowSidebar } from '../../redux/ui_management/uiManagement';
import { CgMenuHotdog } from 'react-icons/cg';
import { converMiladi2Jalali } from '@/utils/dateutils';
import { GoBell } from 'react-icons/go';
import { IoPersonOutline } from 'react-icons/io5';
import { RxDot } from 'react-icons/rx';

const Header = () => {

    const dispatch = useDispatch();

    return (
        <section id="header" className="fixed top-0 h-app_header_h w-full shadow-lg bg-slate-200 
 dark:bg-[#25232c] dark:text-white md:pr-app_sidebar_w border-b border-rose-600 dark:shadow-rose-800 border-b-rose-600 dark:border-rose-600">
            <div className='flex justify-between p-4'>
                <button className='md:hidden mt-4 mx-2' onClick={() => dispatch(setShowSidebar(true))}>
                    <CgMenuHotdog size={24} />
                </button>
                <p className='hidden md:block'>{converMiladi2Jalali(undefined, "ddd. jD jMMMM jYYYY")}</p>
                <span className='flex gap-2 justify-end items-center '>
                    <button><GoBell size={24} className='text-yellow-500' />
                        <RxDot className='absolute top-5 text-rose-600 animate-ping' />
                    </button>
                    <button className='border-2 text-sky-500 rounded-full p-1 border-gray-300'>
                        <img src="/picture/مرد با عینک.png" alt="profile" className='w-8 h-8 rounded-full' />
                    </button>
                    <p>Amir Pouya</p>
                </span>
            </div>

        </section>

    );
};

export default Header;