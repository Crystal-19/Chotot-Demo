import React from 'react'
import {Image, Divider} from 'semantic-ui-react'

import {
  socialData,
  appItems,
  customerItems,
  marketItems,
  textFooter,
} from './data'

import './styles.scss'

const mainFooter = () => {
  const downloadApp = () => {
    return (
      <div className="item">
        <p> DOWNLOAD GOOD MARKET APP</p>
        <div className="apps-container">
          <Image
            src="https://static.chotot.com/storage/default/group-qr.webp"
            className="qrcode"
          />
          <div className="appitems">
            {appItems.map((dt, index) => (
              <Image key={index} src={dt.src} href={dt.href} className="app" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const customerSupport = () => {
    return (
      <div className="item">
        <p> CUSTOMER SUPPORT </p>
        {customerItems.map((dt, index) => (
          <a key={index} href={dt.href}>
            {dt.text}
          </a>
        ))}
      </div>
    )
  }
  const itemsLeft = () => {
    return (
      <div className="items-left">
        {downloadApp()}
        {customerSupport()}
      </div>
    )
  }

  const aboutCT = () => {
    return (
      <div className="item">
        <p> ABOUT MARKET TOT </p>
        {marketItems.map((dt, index) => (
          <a key={index} href={dt.href}>
            {dt.text}
          </a>
        ))}
      </div>
    )
  }

  const linkCT = () => {
    return (
      <div className="item link">
        <p> LINK </p>
        <div className="med-container">
          {socialData.map(dt => (
            <Image
              key={Math.random()}
              src={dt.src}
              href={dt.href}
              className="app"
              target="_blank"
            />
          ))}
        </div>
        <p> CERTIFICATIONS</p>
        <Image
          src="https://static.chotot.com/storage/default/certificate.webp"
          href="http://online.gov.vn/Home/WebDetails/33119"
          className="cert"
        />
      </div>
    )
  }

  const itemsRight = () => {
    return (
      <div className="items-right">
        {aboutCT()}
        {linkCT()}
      </div>
    )
  }

  const textBottom = () => {
    return (
      <div className="general-container text-footer">
        {textFooter.map((dt, index) => (
          <p key={index}>{dt.text}</p>
        ))}
      </div>
    )
  }
  
  return (
    <div className="footer-container">
      <div className="general-container items-container">
        {itemsLeft()}
        {itemsRight()}
      </div>
      <Divider section />
      {textBottom()}
    </div>
  )
}
export default mainFooter
