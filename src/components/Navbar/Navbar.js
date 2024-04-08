// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';
import styles from 'Navbar.module.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="logo"
        />
      </div>
      <div className="navbar-right">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
        <Link href="/services">
          <a className="nav-link">Services</a>
        </Link>
        <Link href="/contact">
          <a className="nav-link">Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
