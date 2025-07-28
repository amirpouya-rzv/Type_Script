import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowSidebar } from '../../redux/ui_management/uiManagement';
import { CgMenuHotdog } from 'react-icons/cg';
import { converMiladi2Jalali } from '@/utils/dateutils';

const Header = () => {

    const dispatch = useDispatch();

    return (
        <section id="header" className="fixed top-0 h-app_header_h w-full shadow-lg bg-slate-200 
 dark:bg-[#25232c] dark:text-white md:pr-app_sidebar_w border-b border-rose-600 dark:shadow-rose-800 border-b-rose-600 dark:border-rose-600">
            <div className='items-center p-4'>
                <button className='md:hidden mt-4 mx-2' onClick={() => dispatch(setShowSidebar(true))}>
                    <CgMenuHotdog size={24} />
                </button>
                <p className='hidden md:block'>{converMiladi2Jalali()}</p>
                
            </div>

        </section>

    );
};

export default Header;