'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Spin as Hamburger } from 'hamburger-react'

import styles from './Navbar.module.css'

import InViewLoad from '../InViewLoad/InViewLoad'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarContainer} container`}>
        <InViewLoad>
          <Link className={styles.homeLink} href='/'>
            <img src='/logo.png' alt='Logo' className={styles.logo} priority />
          </Link>
        </InViewLoad>
        <div className={`${styles.navbarLinks}` + (isMenuOpen ? ` ${styles.navbarOpen}` : '')}>
          <Link className={styles.navLink} href='/about' onClick={toggleMenu}>
            About
          </Link>
          <Link className={styles.navLink} href='/services' onClick={toggleMenu}>
            Services
          </Link>
          <Link className={`${styles.navLink} button`} href='/contact' onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
        <div className={styles.navBurger}>
          <Hamburger toggle={toggleMenu} toggled={isMenuOpen} direction='right' color='#D52129' label='Show Menu' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
