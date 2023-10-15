import React from 'react'
import UCard from './UCard'
import {Link} from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./upcome.css"



const SampleNextArrow = (props) => {
  const {onClick} = props;
  console.log('SampleNextArrow',props)

  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}


const SamplePrevArrow = (props) => {
  const {onClick} = props;

  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}


const Upcomming = ({items,title}) => {
    
  const settings = {
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive:[{
        breakpoint: 800,
        settings:{
            slidesToShow:2,
            slidesToScroll:1
        }
    }]
  }
  return (
    <>
       <section className="upcome">
        <div className="container ">
            <div className="heading flexSB">
                <Link to="/" >نمایش همه</Link>
                <h1>{title}</h1>
            </div>

            <div className="content ">

                <Slider {...settings}>

                    {items.map((item) => (
                        <UCard key={item.id} item={item}/>
                    ))}

                </Slider>
            </div>
        </div>
       </section>
    </>
  )
}

export default Upcomming
