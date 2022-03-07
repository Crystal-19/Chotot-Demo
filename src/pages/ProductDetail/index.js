import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import dayjs from 'dayjs'
import {Image, Breadcrumb, Placeholder} from 'semantic-ui-react'

import ProductCard from 'components/ProductCard'
import BreadCrumb from 'components/Breadcrumb'
import Footer from 'components/Footer'
import * as helpers from 'utils/helpers'
import * as productActions from 'redux/actions/productActions'

import './styles.scss'

const ProductDetail = () => {
  const {id} = useParams()

  const productRelated = useSelector(state => state.Product.productRelated)
  const {imageUrl, name, price, description, author, category} = useSelector(
    state => state.Product.productDetail,
  )
  const {email, createdAt} = author
  const categoryName = category.name

  const joinDate = dayjs(createdAt).format('MM-YYYY')
  const isLoading = useSelector(state => state.Product.isLoading)

  const isError = useSelector(state => state.Product.isError)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.loadProductDetail(id))
    dispatch(productActions.loadProductRelated(id))
  }, [dispatch, id])

  const data = [{title: 'Good Market'}, {title: categoryName}, {title: name}]
  const renderHeader = () => {
    return (
      <div className="header-container">
        <BreadCrumb data={data} />
      </div>
    )
  }

  const renderInfoList = () => {
    return (
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
    )
  }

  const renderImagePlaceholder = () => {
    return (
      <Placeholder>
        <Placeholder.Image square />
      </Placeholder>
    )
  }
  const renderMainProductInfo = () => {
    return (
      <>
        {isLoading ? renderImagePlaceholder() : <Image src={imageUrl} />}
        <h3>{name}</h3>
        <h3 className="price">{helpers.formatPrice(price)}</h3>
        <p>{description}</p>
        {renderInfoList()}
      </>
    )
  }

  const renderQuestionList = () => {
    return (
      <ul className="questions-container">
        <li>Tablets too ?</li>
        <li>Do you ship good ?</li>
        <li>Is the product still under warranty ?</li>
        <li>Has this product been repaired ?</li>
        <li>Are there accessories included the product ?</li>
      </ul>
    )
  }

  const renderMediaIcon = () => {
    return (
      <div className="media-container">
        <Image
          href="https://www.facebook.com/login.php?skip_api_login=1&api_key=221564734660253&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv5.0%2Fdialog%2Fshare%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2c9084e9f061f8%2526domain%253Dwww.chotot.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.chotot.com%25252Ff320c5aa2c7d37%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df2114c912a37bac%2526domain%253Dwww.chotot.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.chotot.com%25252Ff320c5aa2c7d37%2526relation%253Dopener%2526frame%253Df397c713a31a254%2526result%253D%252522xxRESULTTOKENxx%252522%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.chotot.com%252Fmua-ban-may-tinh-bang-quan-ninh-kieu-can-tho%252F91626625.htm%253Futm_source%253Dad_view%2526utm_medium%253Dshare_buttons%2526utm_campaign%253Dshare_ad_via_facebook%26client_id%3D221564734660253%26ret%3Dlogin%26sdk%3Djoey%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.chotot.com%252Fmua-ban-may-tinh-bang-quan-ninh-kieu-can-tho%252F91626625.htm&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2114c912a37bac%26domain%3Dwww.chotot.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.chotot.com%252Ff320c5aa2c7d37%26relation%3Dopener%26frame%3Df397c713a31a254%26result%3D%257B%2522error_code%2522%253A4201%252C%2522error_message%2522%253A%2522User%2Bcanceled%2Bthe%2BDialog%2Bflow%2522%257D%26error_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%26e2e%3D%257B%257D&display=popup&locale=en_GB"
          src="https://static.chotot.com/storage/chotot-icons/svg/circle-facebook.svg"
        />
        <Image
          href="https://www.facebook.com/login.php?api_key=221564734660253&skip_api_login=1&display=popup&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df234da11466d6a4%26domain%3Dwww.chotot.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.chotot.com%252Ff320c5aa2c7d37%26relation%3Dopener%26frame%3Df5ee5a10d42244%26result%3D%2522xxRESULTTOKENxx%2522&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fsend%3F_path%3Dsend%26app_id%3D221564734660253%26client_id%3D221564734660253%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df234da11466d6a4%2526domain%253Dwww.chotot.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.chotot.com%25252Ff320c5aa2c7d37%2526relation%253Dopener%2526frame%253Df5ee5a10d42244%2526result%253D%252522xxRESULTTOKENxx%252522%26sdk%3Djoey%26display%3Dpopup%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df1374416baf526c%2526domain%253Dwww.chotot.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.chotot.com%25252Ff320c5aa2c7d37%2526relation%253Dopener%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.chotot.com%252Fmua-ban-may-tinh-bang-quan-ninh-kieu-can-tho%252F91626625.htm%26link%3Dhttps%253A%252F%252Fwww.chotot.com%252Fmua-ban-may-tinh-bang-quan-ninh-kieu-can-tho%252F91626625.htm%253Futm_source%253Dad_view%2526utm_medium%253Dshare_buttons%2526utm_campaign%253Dshare_ad_via_messenger%26locale%3Den_US%26version%3Dv2.9%26from_login%3D1"
          src="https://static.chotot.com/storage/chotot-icons/svg/circle-messenger.svg"
        />
        <Image
          href="https://www.chotot.com/mua-ban-may-tinh-bang-quan-ninh-kieu-can-tho/91626625.htm?utm_source=ad_view&utm_medium=share_buttons&utm_campaign=share_ad_via_copylink#px=SR-copylink-[PO-1][PL-default]"
          src="https://static.chotot.com/storage/chotot-icons/svg/circle-zalo.svg"
        />
        <Image
          href="https://www.chotot.com/mua-ban-may-tinh-bang-quan-ninh-kieu-can-tho/91626625.htm?utm_source=ad_view&utm_medium=share_buttons&utm_campaign=share_ad_via_copylink#px=SR-copylink-[PO-1][PL-default]"
          src="https://static.chotot.com/storage/chotot-icons/svg/circle-copylink.svg"
        />
      </div>
    )
  }

  const renderReportSection = () => {
    return (
      <div className="report-container">
        <Image src="https://static.chotot.com/storage/marketplace/shield-iconx4.png" />
        <p>
          This post has been moderated. If you have a problem, please report the
          post or contact customer service for help.
          <a href="http://trogiup.chotot.com/ban-hang-tai-chotot-vn/kiem-duyet-tin/tai-sao-chotot-vn-duyet-tin-truoc-khi-dang/?utm_source=chotot&utm_medium=user_protection&utm_campaign=user_protection_ad_view&_ga=2.134644849.1006435902.1642412994-1352724562.1642412994">
            See more ››
          </a>
        </p>
      </div>
    )
  }

  const renderMinorProductInfo = () => {
    <>
      <h4>Ask the seller via chat</h4>
      {renderQuestionList()}
      <h4>Share this post with your friends:</h4>
      {renderMediaIcon()}
      {renderReportSection()}
    </>
  }

  const renderLeftBody = () => {
    return (
      <div className="left-section-container">
        {renderMainProductInfo()}
        {renderMinorProductInfo()}
      </div>
    )
  }

  const renderUserInfo = () => {
    return (
      <div className="ava-container">
        <Image src="https://iptc.org/wp-content/uploads/2018/05/avatar-anonymous-300x300.png" />
        <div className="name-container">
          <h4>{email}</h4>
          <p>Join date: {joinDate}</p>
        </div>
      </div>
    )
  }

  const renderRateInfo = () => {
    return (
      <Breadcrumb>
        <Breadcrumb.Section link>
          <p>Semi-professional</p>
          <Image src="https://static.chotot.com/storage/chotot-icons/png/pro-grey-icon.png" />
        </Breadcrumb.Section>
        <Breadcrumb.Section link>
          <a href="https://www.chotot.com/user/6fa4dfc10050a1cf4ef804f1fd912b51#xtatc=INT-10-[Adview]">
            Evaluate
          </a>
          <div className="stars-container">
            <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
            <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
            <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
            <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
            <Image src="https://static.chotot.com/storage/marketplace/common/pf_rating_active_icon.svg" />
          </div>
        </Breadcrumb.Section>
        <Breadcrumb.Section link>
          <p>Chat feedback</p>
          <p>85%</p>
        </Breadcrumb.Section>
      </Breadcrumb>
    )
  }

  const renderRightBody = () => {
    return (
      <div className="right-section-container">
        {renderUserInfo()}
        {renderRateInfo()}
        <button className="contact-container">
          <Image src="https://static.chotot.com/storage/chotot-icons/svg/white-phone.svg" />
          <span>01234*** Click to display numbers</span>
        </button>
        <button className="contact-container chat-container">
          <Image src="https://static.chotot.com/storage/chotot-icons/png/chat_green.png" />
          <span>Chat with seller</span>
        </button>
        <div className="tip-container">
          <Image src="https://static.chotot.com/storage/images/tips/6_mobile.png" />
          <span>
            Choose a safe-reputable-effective delivery method, when receiving
            the goods, carefully check the product quality before paying.
          </span>
        </div>
      </div>
    )
  }

  const renderFullProductDetail = () => {
    return (
      <div className="general-container product-detail-container">
        {renderHeader()}
        <div className="content-container">
          {renderLeftBody()}
          {renderRightBody()}
        </div>
        <h3 className="title">Hello everyone else ad</h3>
        <div className="products-container">
          {productRelated.map(dt => (
            <ProductCard key={dt._id} product={dt} />
          ))}
        </div>
      </div>
    )
  }

  const renderProductError = () => {
    return (
      <div className="no-exist">
        <Image src="https://thuvienmamnon.com/wp-content/uploads/2020/06/rau-mat-nyhu-meo.jpg" />
        <h3>this product does not exist</h3>
      </div>
    )
  }

  return (
    <div className="background-container">
      {isError ? renderProductError() : renderFullProductDetail()}
      <Footer />
    </div>
  )
}
export default ProductDetail
