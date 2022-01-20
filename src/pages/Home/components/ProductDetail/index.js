import React from 'react'

import {Image, Icon} from 'semantic-ui-react'

import './styles.scss'

const ProductDetail = () => {
  return (
    <div className="general-container product-detail-container">
      <div className="header-container">
        <div className="ui mini breadcrumb">
          <a href="a" className="section">
            Good Market
          </a>
          <Icon name="angle double right" />
          <a href="a" className="section">
            Tablet
          </a>
          <Icon name="angle double right" />
          <a href="a" className="section">
            Samsung
          </a>
        </div>
      </div>
      <div className="content-container">
        <div className="left-section-container">
          <Image src="http://newstimber.com/wp-content/uploads/2021/08/1-9.jpg" />
          <h3>galaxy j4 plus man is 98% beautiful like new tab</h3>
          <h3 className="price">990,000 VND</h3>
          <p>galaxy j4 plus man is 98% beautiful like new tab</p>
          <a href="/">Click to show number: 056394 ***</a>
          <div className="info-list-container">
            <div className="list-container">
              <div className="item-container">
                <Image src="https://static.chotot.com/storage/icons/logos/ad-param/tablet_brand.png" />
                <span>Brand: Samsung</span>
              </div>
              <div className="item-container">
                <Image src="https://static.chotot.com/storage/icons/logos/ad-param/elt_condition.png" />
                <span>Condition: Used</span>
              </div>
              <div className="item-container">
                <Image src="https://static.chotot.com/storage/icons/logos/ad-param/tablet_capacity.png" />
                <span>Capacity: 16GB</span>
              </div>
            </div>
            <div className="list-container">
              <div className="item-container">
                <Image src="https://static.chotot.com/storage/icons/logos/ad-param/tablet_model.png" />
                <span>Model: Galaxy</span>
              </div>
              <div className="item-container">
                <Image src="https://static.chotot.com/storage/icons/logos/ad-param/elt_warranty.png" />
                <span>Warranty status: Out of warranty</span>
              </div>
              <div className="item-container">
                <Image src="https://static.chotot.com/storage/icons/logos/ad-param/tablet_screen_size.png" />
                <span>Screen size: 8 inches</span>
              </div>
            </div>
          </div>
          <h4>Ask the seller via chat</h4>
          <ul className="questions-container">
            <li>Tablets too ?</li>
            <li>Do you ship good ?</li>
            <li>Is the product still under warranty ?</li>
            <li>Has this product been repaired ?</li>
            <li>Are there accessories included the product ?</li>
          </ul>
          <h4>Share this post with your friends:</h4>
          <div className="media-container">
            <Image src="https://static.chotot.com/storage/chotot-icons/svg/circle-facebook.svg" />
            <Image src="https://static.chotot.com/storage/chotot-icons/svg/circle-messenger.svg" />
            <Image src="https://static.chotot.com/storage/chotot-icons/svg/circle-zalo.svg" />
            <Image src="https://static.chotot.com/storage/chotot-icons/svg/circle-copylink.svg" />
          </div>
          <div className="report-container">
            <Image src="https://static.chotot.com/storage/marketplace/shield-iconx4.png" />
            <p>
              This post has been moderated. If you have a problem, please report
              the post or contact customer service for help.
              <a href="http://trogiup.chotot.com/ban-hang-tai-chotot-vn/kiem-duyet-tin/tai-sao-chotot-vn-duyet-tin-truoc-khi-dang/?utm_source=chotot&utm_medium=user_protection&utm_campaign=user_protection_ad_view&_ga=2.134644849.1006435902.1642412994-1352724562.1642412994">
                See more ››
              </a>
            </p>
          </div>
        </div>
        <div className="right-section-container">
          <div className="ava-container">
            <Image src="https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png" />
            <div className="name-container">
              <h4>Ngan</h4>
              <p>Active 2 hours ago</p>
            </div>
          </div>
          <div className="ui breadcrumb">
            <div className="section">
              <p>Semi-professional</p>
              <Image src="https://static.chotot.com/storage/chotot-icons/png/pro-grey-icon.png" />
            </div>
            <div className="section">
              <p>Evaluate</p>
              <div className="stars-container">
                <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
                <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
                <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
                <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
                <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
              </div>
            </div>
            <div className="section">
              <p>Chat feedback</p>
              <p>85%</p>
            </div>
          </div>
          <div className="contact-container">
            <Image src="https://static.chotot.com/storage/chotot-icons/svg/white-phone.svg" />
            <span>01234*** Click to display numbers</span>
          </div>
          <div className="contact-container chat-container">
            <Image src="https://static.chotot.com/storage/chotot-icons/png/chat_green.png" />
            <span>Chat with seller</span>
          </div>
          <div className="tip-container">
            <Image src="https://static.chotot.com/storage/images/tips/6_mobile.png" />
            <span>
              Choose a safe-reputable-effective delivery method, when receiving
              the goods, carefully check the product quality before paying.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail
