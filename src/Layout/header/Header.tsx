import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowSidebar } from '../../redux/ui_management/uiManagement';
import { CgMenuHotdog } from 'react-icons/cg';

const Header = () => {

    const dispatch = useDispatch();

    return (
 <section id="header" className="fixed top-0 h-app_header_h w-full shadow-lg bg-white 
 dark:bg-[#25232c] dark:text-white md:pr-app_sidebar_w border-b ">
    <button className='md:hidden mt-4 mx-2'  onClick={()=>dispatch(setShowSidebar(true))}>
    <CgMenuHotdog  size={24}/>
    </button>
    
    </section>

    );
};

export default Header;