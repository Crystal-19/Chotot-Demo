import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import dayjs from 'dayjs'
import {Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import {ReactComponent as LocationIcon} from 'assets/images/icons/location.svg'
import Footer from 'components/Footer'

import './styles.scss'

const PreviewProduct = () => {
  // const renderImagePlaceholder = () => {
  //   return (
  //     <Placeholder>
  //       <Placeholder.Image square />
  //     </Placeholder>
  //   )
  // }

  const renderPreviewProduct = () => {
    return (
      <div className="preview-container">
        <Image src="https://catscanman.net/wp-content/uploads/2021/09/anh-meo-cute-de-thuong-35.jpg" />
        <h2>Ten chu con meo</h2>
        <h3>Meo de thuong</h3>
        <h3 className="price">100.000.000</h3>
        <p>Meo ngu ngoc va de thuong the best in the world</p>
        <h2>Area</h2>
        <h3>
          <LocationIcon /> District 7, HCMC
        </h3>
      </div>
    )
  }

  return (
    <div className="background-container">
      <div className="general-container product-detail-container">
        {renderPreviewProduct()}
        <div className="button-container">
          <Link to="/create-product" className="correct">
            Correction Text
          </Link>
          <button className="register-now">Register now</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default PreviewProduct
