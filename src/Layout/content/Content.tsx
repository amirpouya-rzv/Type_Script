import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DasBord from '../../pages/dashboard/DasBord';
import Categories from '../../pages/categories/Categories';
import Task from '../../pages/task/Task';

const Content = () => {
    return (
        <div>
            <section id="content" className="fixed top-0 left-0 w-full h-screen bg-gray-200 dark:bg-black dark:text-white overflow-y-auto md:pr-app_sidebar_w pt-app_header_h">
                <div className='w-full p-4'>
                    <Routes>
                        <Route path='/' element={<DasBord/>}/>
                        <Route path='/categoris' element={<Categories/>}/>
                        <Route path='/task' element={<Task/>}/>
                    </Routes>
                </div>
            </section>
        </div>
    );
};

export default Content;