// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="logo"
        /> */}
      </div>
      <div className="navbar-right">
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/about">
          About
        </Link>
        <Link className="nav-link" href="/services">
          Services
        </Link>
        <Link className="nav-link" href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
