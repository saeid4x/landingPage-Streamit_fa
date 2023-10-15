import React from 'react'
import { useState } from 'react'
import Homes from '../components/homes/Homes'
import Trending from '../components/trending/trending'
import Upcomming from '../components/Upcomming/Upcomming'
import { latest, recommended, upcome } from '../dummyData'
 


    const HomePage = () => {
      
      const [items, setItems] = useState(upcome);
      const [item, setItem] = useState(latest);
      const [recommend, setRecommend] = useState(recommended)

      return (
        <>
          <Homes />
           <div className='mainContent'>
          <Upcomming items={items} title="فیلم های پیشنهادی" />
          <Upcomming items={item} title="آخرین ویدیوها" />
          <Trending />
          <Upcomming items={recommend} title="فیلم های  محبوب" />

           </div>

           
        </>
  )
}

export default HomePage
