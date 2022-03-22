import React from 'react'
import {Image, Button} from 'semantic-ui-react'

import {ReactComponent as LocationIcon} from 'assets/images/icons/location.svg'
import * as helpers from 'utils/helpers'

import Footer from 'components/Footer'

import './styles.scss'

const PreviewProduct = ({
  handlePreview,
  imageUpload,
  name,
  price,
  location,
  description,
}) => {
  const renderPreviewProduct = () => {
    return (
      <div className="preview-container">
        <Image src={imageUpload} />
        <h2>{name}</h2>
        <h3 className="price">{helpers.formatPrice(price)}</h3>
        <p>{description}</p>
        <h2>Area</h2>
        <h3>
          <LocationIcon /> {location}
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
            Correct Text
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default PreviewProduct
