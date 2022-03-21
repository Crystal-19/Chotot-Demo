import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {
  Dropdown,
  Menu,
  Icon,
  Image,
  Modal,
  Placeholder,
} from 'semantic-ui-react'

import * as categoryActions from 'redux/actions/categoryActions'

import './styles.scss'

const CategoryModal = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [categoryName, setCategoryName] = useState('')
  const categories = useSelector(state => state.Category.category)
  const isLoading = useSelector(state => state.Category.isLoading)

  const handleSelectedCategory = name => {
    setCategoryName(name)
    setOpen(false)
  }

  useEffect(() => {
    dispatch(categoryActions.loadCategory())
  }, [dispatch])

  const renderPlaceholder = () => {
    const categoryPlaceholder = Array.from({length: 7})
    return (
      <Modal.Content>
        {categoryPlaceholder.map((pl, index) => (
          <Placeholder key={index}>
              <Placeholder.Line />
              <Placeholder.Line />
          </Placeholder>
        ))}
      </Modal.Content>
    )
  }

  const renderModalContent = () => {
    return (
      <Modal.Content>
        {categories.map(cd => (
          <Modal.Description
            key={cd._id}
            onClick={() => handleSelectedCategory(cd.name)}>
            <Image src={cd.imageUrl} />
            <h2>{cd.name}</h2>
            <Icon name="chevron right" />
          </Modal.Description>
        ))}
      </Modal.Content>
    )
  }

  return (
    <>
      <Menu vertical>
        <Menu.Item header>List Of Posts</Menu.Item>
        <Dropdown
          onClick={() => setOpen(!open)}
          text={categoryName}
          simple
          item
        />
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
        {isLoading ? renderPlaceholder() : renderModalContent()}
      </Modal>
    </>
  )
}
export default CategoryModal
