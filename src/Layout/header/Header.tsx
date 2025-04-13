import React from 'react';

const Header = ({setShowSideBar} : {setShowSideBar: ()=>void}) => {
    return (
 <section id="header" className="fixed top-0 h-app_header_h w-full bg-red-500 md:pr-app_sidebar_w">
    <button onClick={setShowSideBar} >
    نمایش سایدبار
    </button>
    
    </section>

    );
};

export default Header;