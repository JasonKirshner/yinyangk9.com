'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Spin as Hamburger } from 'hamburger-react'

import styles from './Navbar.module.css';

import logo from '../../../public/logo.png'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarContainer} container`}>
        <Link className={styles.homeLink} href="/">
          <Image src={logo} alt="Logo" className={styles.logo} priority />
        </Link>
        <div className={`${styles.navbarLinks}` + (isMenuOpen ? ` ${styles.navbarOpen}` : '') }>
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
        <div className={styles.navBurger}>
          <Hamburger toggle={toggleMenu} toggled={isMenuOpen} direction="right" color="#D52129" label="Show Menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar
