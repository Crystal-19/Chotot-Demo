import  React from 'react'

import Banner from './components/Banner'

export const useState = () => <p>Home Header</p>

export const HomeHeader1 = () => <p>Home Header1</p>

export const HomeHeader2 = () => <p>Home Header2</p>

export const HomeHeader3 = () => <p>Home Header3</p>


const Home = () => {
  
  return (
    <div>
      <p> Home </p>
      <Banner />
    </div>
  )
}


export default Home
