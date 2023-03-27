import React from 'react'
import { Outlet } from 'react-router'
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

export default function Layout() {
    return (
        <>
            <Sidebar />
            <div className='layout_content'>
                <Header />
                <Outlet />
            </div>
        </>
    )
}
