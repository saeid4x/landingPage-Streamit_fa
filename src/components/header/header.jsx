import React from 'react';
import "./header.css";
import {Link} from 'react-router-dom'
import { useState } from 'react';
export const Header = () => {
    
    const [mobile, setMobile] = useState(false)
    return(
         <>
           <header>
              <div className="container flexSB">

                <div className='account flexSB'>
                    <i className='fa fa-search'></i>
                    <i className='fa fa-bell'></i>
                    <i className='fa fa-user'></i>
                    <button>اشتراک بگیرید</button>
                </div>

                <nav className="flexSB txt-rtl">
                    
                <div className='logo'>
                        <img src="./images/logo.png" alt="" />
                    </div>

                    <ul className={mobile ? "navMenu-list" : "flexSB"} 
                        onClick={() => setMobile(false)} >

                        <Link to="/">خانه</Link>
                        <Link to="series">سریال ها</Link>
                        <Link to="movies">فیلم ها</Link>
                        <Link to="pages">صفحات</Link>
                        <Link to="pricing">قیمت</Link>
                        <Link tp="contact">ارتباط با ما</Link>
                    </ul>

                   


                    <button className='toggle' onClick={() => setMobile(!mobile)}>
                        {mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>


              </div>
           </header>
         </>
    )
}

