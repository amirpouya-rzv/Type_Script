import React from 'react';
import { IconType } from 'react-icons';
import { NavLink, To } from 'react-router-dom';

type SidebarItemType ={
    title:string;
    Icon :  IconType;
    to:To;
}


const SideBarItem = ({Icon,title, to}: SidebarItemType) => {
    return (
        <li>
            <NavLink to={to} 
            className={({isActive})=>`items-center rounded-full px-3 py-2 transition-all hover:bg-gray-800
            hover:text-white border-l-2 border-l-red-500 border-r-2 border-r-red-500 flex space-y-4 gap-5 mx-2 mt-5
                 ${isActive && "bg-gray-500 text-white"}`}>
                <Icon size={20}/>
                {title}
            </NavLink>
        </li>
    );
};

export default SideBarItem;