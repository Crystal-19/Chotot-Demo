import React from 'react'

import {Image} from 'semantic-ui-react'
import {data} from './data'

import './styles.scss'

const Catalog = () => {
  return (
    <div className="general-container container">
      <h3>Explore categories</h3>
      <div className="scroll-container">
        <div className="catalog-container scroll-container">
          {data.map(dt => (
            <div key={dt.id} className="items-container">
              <Image className="catalog-img" src={dt.src} href={dt.href} />
              <p>{dt.catalog}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Catalog
