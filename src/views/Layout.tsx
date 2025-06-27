// components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC = () => {
  const { theme} = useTheme();
  
  return (
    <div className={`${theme === 'dark' ? 'bg-darkBackground' : 'bg-gray-200'}`}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
