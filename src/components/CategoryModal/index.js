import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {Dropdown, Menu, Icon, Image, Modal} from 'semantic-ui-react'

import * as categoryActions from 'redux/actions/categoryActions'

import './styles.scss'

const CategoryModal = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)
  const [categoryName, setCategoryName] = useState('')
  const categories = useSelector(state => state.Category.category)

  const handleSelectedCategory = (name) => {
    setCategoryName(name)
    setOpen(false)
  }

  useEffect(() => {
    dispatch(categoryActions.loadCategory())
  }, [dispatch])

  return (
    <>
      <Menu vertical>
        <Menu.Item header>List Of Posts</Menu.Item>
        <Dropdown onClick={() => setOpen(!open)} text={categoryName} simple item />
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
            <Modal.Description key={cd._id} onClick={() => handleSelectedCategory(cd.name)} >
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
