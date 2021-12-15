import  React from 'react'

import './styles.scss'

import Banner from './components/Banner'

export const useState = () => <p>Home Header</p>

export const HomeHeader1 = () => <p>Home Header1</p>

export const HomeHeader2 = () => <p>Home Header2</p>

export const HomeHeader3 = () => <p>Home Header3</p>


const Home = () => {
  
  return (
    <div>
      <div className='title'> Almost </div>
      <Banner />
      <p> test 1 </p>
      <h1> test 2 </h1>
      <h5> test 3 </h5>
    </div>
  )
}


export default Home
