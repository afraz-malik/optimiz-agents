import React, { useState } from 'react'
import NavbarCss from './Navbar.module.scss'

const Navbar = () => {
  const [nav, setNav] = useState({
    search: false,
    notification: false,
    profile: false,
  })
  const toggleNav = (value) => {
    if (value === 'notification') {
      setNav({
        ...nav,
        notification: !nav.notification,
      })
    }
    if (value === 'search') {
      document.getElementById('input').style.display = 'block'
      document.getElementById('input').focus()
      setNav({
        ...nav,
        search: !nav.search,
      })
    }
    if (value === 'closesearch') {
      if (document.getElementById('input').value === '') {
        document.getElementById('input').style.display = 'none'
        console.log()
        setNav({
          ...nav,
          search: !nav.search,
        })
      }
    }
    if (value === 'profile') {
      setNav({
        ...nav,
        profile: !nav.profile,
      })
    }
  }

  return (
    <div className={NavbarCss.navbar}>
      <div className={NavbarCss.leftnav}>
        <h3>DEFAULT BRAND TEXT</h3>
      </div>
      <div className={NavbarCss.rightnav}>
        <div className={NavbarCss.search}>
          <img
            alt=""
            src="images/search.svg "
            onClick={() => toggleNav('search')}
            style={nav.search ? { display: 'none' } : { display: 'block' }}
          />
          <input
            type="text"
            id="input"
            onBlur={() => toggleNav('closesearch')}
          />
        </div>
        <div className={NavbarCss.notification}>
          <img
            className={NavbarCss.notificationimg}
            alt=""
            src="images/notification.svg"
            onClick={() => toggleNav('notification')}
            onBlur={() => toggleNav('notification')}
          />
          <img className={NavbarCss.dot} alt="" src="images/dot.svg" />
          <div
            className={NavbarCss.notificationBoxmodel}
            style={
              nav.notification ? { display: 'block' } : { display: 'none' }
            }
          >
            <h2>No New Notification</h2>
          </div>
        </div>
        <div className={NavbarCss.anime}>
          <img alt="" src="images/anime.png" />
        </div>
      </div>
      {/* Their Box Models */}
    </div>
  )
}

export default Navbar
