import React from 'react'
import FooterCss from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={FooterCss.footer}>
      <div className={FooterCss.left}>
        <ul>
          <li>CREATEIVE TIM</li>
          <li>ABOUT US</li>
          <li>BLOG</li>
        </ul>
      </div>
      <div className={FooterCss.right}>
        © 2018 made with by <span>Creative Tim </span>for a better web.
      </div>
    </div>
  )
}

export default Footer
