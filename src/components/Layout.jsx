
import { useState } from 'react';
import { Link } from 'react-router-dom';
import headerStyle from '../styles/Header.module.css';
import { Outlet } from 'react-router-dom';
import Header from './Header'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>

<Header />

      <main>
        <Outlet />
      </main> 
   
    </div>
  );
}


