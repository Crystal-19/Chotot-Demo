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

const Footer = () => {
  const renderDownloadApp = () => {
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

  const renderCustomerSupport = () => {
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
  const renderItemsLeft = () => {
    return (
      <div className="items-left">
        {renderDownloadApp()}
        {renderCustomerSupport()}
      </div>
    )
  }

  const renderAboutSection = () => {
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

  const renderLinkSection = () => {
    return (
      <div className="item link">
        <p> LINK </p>
        <div className="media-container">
          {socialData.map((dt, index) => (
            <Image
              key={index}
              src={dt.src}
              href={dt.href}
              className="app"
              target="_blank"
            />
          ))}
        </div>
        <p>CERTIFICATIONS</p>
        <Image
          src="https://static.chotot.com/storage/default/certificate.webp"
          href="http://online.gov.vn/Home/WebDetails/33119"
          className="certificate"
        />
      </div>
    )
  }

  const renderItemsRight = () => {
    return (
      <div className="items-right">
        {renderAboutSection()}
        {renderLinkSection()}
      </div>
    )
  }

  const renderTextBottom = () => {
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
        {renderItemsLeft()}
        {renderItemsRight()}
      </div>
      <Divider section />
      {renderTextBottom()}
    </div>
  )
}
export default Footer
