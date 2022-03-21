import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {Dropdown, Menu, Icon, Image, Modal} from 'semantic-ui-react'

import * as categoryActions from 'redux/actions/categoryActions'

import './styles.scss'

const CategoryModal = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)
  const categories = useSelector(state => state.Category.category)

  useEffect(() => {
    dispatch(categoryActions.loadCategory())
  }, [dispatch])

  return (
    <>
      <Menu vertical>
        <Menu.Item header>List Of Posts</Menu.Item>
        <Dropdown onClick={() => setOpen(!open)} text="Dropdown" simple item />
      </Menu>
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
    </>
  )
}
export default CategoryModal
