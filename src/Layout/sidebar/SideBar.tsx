import React from 'react';

const SideBar = ({showSideBar , setHiddenSideBar} :{showSideBar : boolean , setHiddenSideBar : () => void}) => {
    return (
             <section id="sidebar"
              className={`fixed md:right-0 top-0 h-screen w-app_sidebar_w
               bg-blue-500 md:block transition-all ${showSideBar ?"right-0" : " -right-app_sidebar_w"}`}>
                <button onClick={setHiddenSideBar}>
                بستن منو

                </button>
                
                </section>
    );
};

export default SideBar;