import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashBord from '../../pages/dashboard/DashBord';
import Task from '../../pages/tasks/Task';
import Users from '@/pages/categories/users';

const Content = () => {
    return (
        <div>
            <section id="content" className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm dark:bg-black/50 dark:text-white overflow-y-auto md:pr-app_sidebar_w pt-app_header_h">
                <div className='w-full p-4'>
                    <Routes>
                        <Route path='/' element={<DashBord />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/task' element={<Task />} />
                        <Route path='/users/addusers'>
                        <Route path=':editusers'/>
                        </Route>
                    </Routes>
                </div>
            </section>
        </div>
    );
};

export default Content;