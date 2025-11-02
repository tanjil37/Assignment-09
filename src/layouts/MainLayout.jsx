import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50' >
                <Navbar/>
            </header>
           <main className='min-h-screen'>
            
            <Outlet/>
           </main>
           <footer>
            <Footer/>
           </footer>
        </div>
    );
};

export default MainLayout;