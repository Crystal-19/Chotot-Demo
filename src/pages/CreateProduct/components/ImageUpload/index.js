import React from 'react'

import {Image} from 'semantic-ui-react'

import {ReactComponent as CameraIcon} from 'assets/images/icons/camera.svg'
import {ReactComponent as RemoveIcon} from 'assets/images/icons/remove.svg'
import {ReactComponent as Plus} from 'assets/images/icons/plus.svg'

import './styles.scss'

const ImageUpload = ({setFile, setImageUpload, imageUpload}) => {
  const handleImageUpload = e => {
    setImageUpload(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }

  const handleImageRemove = () => {
    setImageUpload(null)
  }

  const renderImageUpload = () => {
    return (
      <div className="image-upload-container">
        <input
          accept="image/*"
          type="file"
          className="file"
          onChange={e => handleImageUpload(e)}
        />
        <div className="image-upload">
          <CameraIcon />
          <Plus className="plus" />
        </div>
      </div>
    )
  }

  const renderUploadedImage = () => {
    return (
      <div className="uploaded-img-container">
        <RemoveIcon onClick={handleImageRemove} className="remove-icon" />
        <Image className="img-uploaded" src={imageUpload} />
      </div>
    )
  }

  return imageUpload === null ? renderImageUpload() : renderUploadedImage()
}
export default ImageUpload
