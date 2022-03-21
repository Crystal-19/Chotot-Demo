import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import dayjs from 'dayjs'
import {Image, Button} from 'semantic-ui-react'

import {ReactComponent as LocationIcon} from 'assets/images/icons/location.svg'
import Footer from 'components/Footer'

import './styles.scss'

const PreviewProduct = ({handlePreview, imageUpload}) => {
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
        <Image src={imageUpload} />
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
          <Button onClick={handlePreview} color="orange" className="correct">
            Correction Text
          </Button>
          <Button color="orange" className="register-now">
            Register now
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default PreviewProduct
