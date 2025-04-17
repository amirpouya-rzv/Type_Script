import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/ui_management/reduxHook';
import { setShowSidebar, togleThem } from '../../redux/ui_management/uiManagement';
import { MdOutlineClose } from 'react-icons/md';
import DarkModeButtns from './DarkModeButtns';
import SideBarItem from './SideBarItem';
import { FaHome, FaTasks } from 'react-icons/fa';
import { TbCategory } from 'react-icons/tb';

const SideBar = () => {
    const { showsidebar, them } = useAppSelector(state => state.uiManagerReducer);

    const dispatch = useDispatch();
    return (
        <section id="sidebar"
            className={`fixed md:right-0 top-0 h-screen w-app_sidebar_w
               dark:bg-[#1b191f] dark:text-white  text-black md:block border-l bg-slate-300
                border-rose-600 transition-all ${showsidebar ? "right-0" : " -right-app_sidebar_w"}`}>
            <div className='flex justify-between md:justify-end md:-mt-5 md:mx-2 items-center  '>

                <DarkModeButtns />

                <button
                    className='block md:hidden mt-5 mr-4 mx-2 transition-all transform hover:scale-110'
                    onClick={() => { dispatch(setShowSidebar(false)) }}>
                    <MdOutlineClose size={24} />
                </button>
                {/* items */}
            </div>
            <hr className='border-rose-600 mt-5  dark:border-rose-600 w-9/12 mx-auto' />
            <div>
                <ul>
                    <SideBarItem to={"/"} Icon={FaHome} title='Dasbord' />
                    <SideBarItem to={"/task"} Icon={FaTasks} title='Task' />
                    <SideBarItem to={"/categoris"} Icon={TbCategory} title='Categoreis' />

                </ul>
            </div>
        </section>
    );
};

export default SideBar;