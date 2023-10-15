import React from 'react'
import {Link} from 'react-router-dom'
 
const HomeCard = ({item:{id, cover, name, rating, time, desc, starrring, genres, tags, video}}) => {
    console.log({id, cover, name, rating, time, desc, starrring, genres, tags, video})
  return (
     <>
       <div className='box'>
         <div className="coverImage">
           
            <img src={cover} alt="" />
            
         </div>

         <div className='content flex'>

       
            <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
            </div>

            {/* <label>{rating}</label>
            <span>GP</span> */}
            <label>{time}</label>
          

         <p>{desc}</p>
         <div className="cast">
            <h4>
                <span>بازیگر: </span>
                &nbsp;
                {starrring}
            </h4>

            <h4>
                <span>ژانر: </span> 
                &nbsp;
                {genres}
            </h4>

            <h4>
                <span>تگ ها: </span>
                &nbsp;
                {tags}
            </h4>
            </div>

 <div className='showVideo'>
            <button className='prirmary-btn'>
                نمایش ویدیو
                <i className='fas fa-play'></i>
            </button>

 </div>

 

         </div>

         <div className="playButton ">
            <Link to={`/singlepage/${id}`}>
                <button>
                  نمایش تریلر
                    <div className="img">
                        <img src="./images/play-button.png" alt="" />
                        <img src="./images/play.png" alt="" className='change' />
                    </div>

                </button>
            </Link>
         </div>


        



       </div>
       </div>
       
     </>
  )
}

export default HomeCard
