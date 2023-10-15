import React from 'react'
import "./upcome.css"

const UCard = ({item:{id, cover, name, time}}) => {
  return (
    <>
      <div className='movieBox'>
         <div className='img'>
            <img src={cover} alt="" />
         </div>

         <div className="text">
            <h3>{name}</h3>
            <span>{time}</span> <br />

            <button>
                <i className="fa fa-play"></i>
                 نمایش ویدیو
            </button>
         </div>
      </div>
    </>
  )
}

export default UCard
