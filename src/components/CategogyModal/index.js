import React, {useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {Modal, Icon, Image} from 'semantic-ui-react'

import * as categoryActions from 'redux/actions/categoryActions'

import './styles.scss'

const CategoryModal = ({open, setOpen}) => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.Category.category)

  useEffect(() => {
    dispatch(categoryActions.loadCategory())
  }, [dispatch])

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}>
      <Modal.Header>
        <Modal.Actions>
          <Icon onClick={() => setOpen(false)} name="times circle outline" />
        </Modal.Actions>{' '}
        Select a post category
      </Modal.Header>
      <Modal.Content>
        {categories.map(cd => (
          <Modal.Description key={cd._id}>
            <Image src={cd.imageUrl} />
            <h2>{cd.name}</h2>
            <Icon name="chevron right" />
          </Modal.Description>
        ))}
      </Modal.Content>
    </Modal>
  )
}
export default CategoryModal
