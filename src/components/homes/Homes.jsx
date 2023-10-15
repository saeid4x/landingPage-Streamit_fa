import React from 'react'
import { useState } from 'react'
import { homeData } from '../../dummyData'
import Home from './Home'
import "./home.css"

const Homes = () => {
    const [items, setItems] = useState(homeData);
    // console.log({items})
  return (
     <>
       <section className='home'>
          <Home items={items} />
       </section>
       <div className="margin"></div>
     </>
  )
}

export default Homes
