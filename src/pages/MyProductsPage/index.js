import React, {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import BreadcrumbCustom from 'components/Breadcrumb'
import * as profileActions from 'redux/actions/profileActions'
import MyInfo from './MyInfo'
import MyPost from './MyPost'
import Footer from 'components/Footer'

import './styles.scss'

const MyProductsPage = () => {
  const dispatch = useDispatch()
  const email = useSelector(state => state.Profile.userProfile.email)

  useEffect(() => {
    dispatch(profileActions.loadUserProfile())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderBreadcrumb = () => {
    const data = [
      {title: 'Good Market', link: ''},
      {title: `${email}'s personal page`, link: ''},
    ]
    return <BreadcrumbCustom data={data} />
  }

  return (
    <div className="gray-background">
      <div className="general-container">
        {renderBreadcrumb()}
        {MyInfo()}
        {MyPost()}
      </div>
      <Footer />
    </div>
  )
}
export default MyProductsPage
