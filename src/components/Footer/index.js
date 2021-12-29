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
  return (
    <div className="footer-container">
      <div className="general-container items-container">
        <div className="items-left">
          <div className="item">
            <h3> DOWNLOAD GOOD MARKET APP</h3>
            <div className="apps-container">
              <Image
                src="https://static.chotot.com/storage/default/group-qr.webp"
                className="qrcode"
              />
              <div className="appitems">
                {appItems.map((dt, index) => (
                  <Image
                    key={index}
                    src={dt.src}
                    href={dt.href}
                    className="app"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="item">
            <h3> CUSTOMER SUPPORT </h3>
            {customerItems.map((dt, index) => (
              <a key={index} href={dt.href}>
                {dt.text}
              </a>
            ))}
          </div>
        </div>
        <div className="item">
          <h3> ABOUT MARKET TOT </h3>
          {marketItems.map((dt, index) => (
            <a key={index} href={dt.href}>
              {dt.text}
            </a>
          ))}
        </div>
        <div className="item">
          <h3> LINK </h3>
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
          <h3> CERTIFICATIONS</h3>
          <Image
            src="https://static.chotot.com/storage/default/certificate.webp"
            href="http://online.gov.vn/Home/WebDetails/33119"
            className="cert"
          />
        </div>
      </div>
      <Divider section />
      <div className="general-container text-footer">
        {textFooter.map((dt, index) => (
          <p key={index}>{dt.text}</p>
        ))}
      </div>
    </div>
  )
}
export default mainFooter
