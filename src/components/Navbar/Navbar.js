'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Spin as Hamburger } from 'hamburger-react'

import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarContainer} container`}>
        <Link className={styles.homeLink} href="/">
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </Link>
        <div className={`${styles.navbarLinks}` + (isMenuOpen && `${styles.navbarOpen}`) }>
          <Link className={styles.navLink} href="/about">
            About
          </Link>
          <Link className={styles.navLink} href="/services">
            Services
          </Link>
          <Link className={`${styles.navLink} button`} href="/contact">
            Contact Us
          </Link>
        </div>
        <Hamburger toggle={toggleMenu} toggled={isMenuOpen} direction="right" color="#9c8c58" label="Show Menu" />
      </div>
    </nav>
  );
};

export default Navbar
