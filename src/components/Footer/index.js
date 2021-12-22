import React from 'react'
import {Image, Divider} from 'semantic-ui-react'

import './styles.scss'

const mainFooter = () => {
  return (
    <div className="footer-container">
      <div className="general-container items-container">
        <div className="item">
          <h5> DOWNLOAD GOOD MARKET APP</h5>
          <div className="apps-container">
            <Image
              src="https://static.chotot.com/storage/default/group-qr.webp"
              size="tiny"
              className='qrcode'
            />
            <div className="appitems">
              <Image
                src="https://static.chotot.com/storage/default/ios.svg"
                className='app'
                href='https://apps.apple.com/us/app/chotot-vn/id790034666'
              />
              <Image
                src="https://static.chotot.com/storage/default/android.svg"
                className='app'
                href='https://play.google.com/store/apps/details?id=com.chotot.vn'
              />
              <Image
                src="https://static.chotot.com/storage/default/huawei_app_install.webp"
                width={115}
                height={39}
                className='app'
                href='https://appgallery.cloud.huawei.com/ag/n/app/C102420927?channelId=web&detailType=0'
              />
            </div>
          </div>
        </div>
        <div className="item">
          <h5> CUSTOMER SUPPORT </h5>
          <a href='https://trogiup.chotot.com/?_ga=2.250313408.751718731.1640081374-451603730.1639971106'> Help Center </a>
          <a href='https://trogiup.chotot.com/nguoi-mua/cho-tot-bao-ve-nguoi-dung-nhu-the-nao/?_ga=2.53286510.751718731.1640081374-451603730.1639971106'> Safe buying and selling </a>
          <a href='https://trogiup.chotot.com/nguoi-mua/cho-tot-bao-ve-nguoi-dung-nhu-the-nao/?_ga=2.53286510.751718731.1640081374-451603730.1639971106'> Rules to know </a>
          <a href='https://trogiup.chotot.com/nguoi-ban/rieng-tu/?_ga=2.53286510.751718731.1640081374-451603730.1639971106'> Privacy Policy </a>
          <a href='https://trogiup.chotot.com/lien-he/?_ga=2.86185566.751718731.1640081374-451603730.1639971106'> contact help </a>
        </div>
        <div className="item">
          <h5> ABOUT MARKET TOT </h5>
          <a href='https://trogiup.chotot.com/nguoi-ban/gioi-thieu-chotot-com/?_ga=2.86185566.751718731.1640081374-451603730.1639971106'> Introduce </a>
          <a href='https://careers.chotot.com/?_ga=2.14966768.751718731.1640081374-451603730.1639971106'> Recuitment </a>
          <a href='https://careers.chotot.com/?_ga=2.14966768.751718731.1640081374-451603730.1639971106'> The media </a>
          <a href='https://www.chotot.com/kinh-nghiem/'> Blog </a>
        </div>
        <div className="item">
          <h5> LINK </h5>
          <div className="med-container">
            <Image
              src="https://static.chotot.com/storage/default/facebook.svg"
              href='https://www.facebook.com/chotot.vn'
              className='app'
            />
            <Image
              src="https://static.chotot.com/storage/default/youtube.svg"
              href='https://www.youtube.com/user/ChototVN'
              className='app'
            />
            <Image
              src="https://static.chotot.com/storage/default/google.svg"
              href='https://plus.google.com/112159203362880782068'
              className='app'
            />
          </div>
          <h5> CERTIFICATIONS</h5>
          <Image
            src="https://static.chotot.com/storage/default/certificate.webp"
            size="small"
            href='http://online.gov.vn/Home/WebDetails/33119'
          />
        </div>
      </div>
      <Divider section />
      <div className='general-container text-footer'>
      <p>
          CHINESE COMPANY LIMITED - Address: Room 1808, Floor 18, Me Linh Point
          Tower, 02 Ngo Duc Ke, Ben Nghe Ward, District 1, Ho Chi Minh City
        </p>
        <p>
          Business Registration Certificate No. 0312120782 issued by the
          Department of Planning and Investment Ho Chi Minh City Investment issued
          on 11/01/2013
        </p>
        <p>
          Email: trogiup@chotot.vn - Customer Service Call Center: 19003003 (1,000
          VND/minute)
        </p>
      </div>
    </div>
  )
}
export default mainFooter
