import React from 'react'
import NavbarCss from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={NavbarCss.navbar}>
      <div className={NavbarCss.leftnav}>
        <h3>DEFAULT BRAND TEXT</h3>
      </div>
      <div className={NavbarCss.rightnav}>
        <div className={NavbarCss.search}>
          <img alt="" src="images/search.svg " />
        </div>
        <div className={NavbarCss.notification}>
          <img alt="" src="images/notification.svg" />
          <img className={NavbarCss.dot} alt="" src="images/dot.svg" />
        </div>
        <div className={NavbarCss.anime}>
          <img alt="" src="images/anime.png" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
