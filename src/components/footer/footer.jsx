import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="box">
                <ul className="flex">
                    <li>شرایط استفاده</li>
                    <li>حریم خصوصی</li>
                    <li>وبلاگ</li>
                    <li>سوالات متداول</li>
                    <li>واچ لیست</li>
                </ul>
                <p> تمامی حقوق محفوظ است. همه
                   ویدیوها و
                    تصاویر موجود در این وبسایت،تجاری بوده<br />
                     و متعلق به 
                  شرکت ایکس است. کپی برداری اکیداً ممنوع است. .</p>
            </div>

            <div className="box">
                <h3>ما را دنبال کنید</h3>
               
                <div className='socialIcon'>
                  <i className="fab fa-facebook"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-instagram"></i>
                </div>
            </div>

            <div className="box">
              <h3>اپلیکیشن استریم ایت</h3>
              
                
                <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />  
                {/* <label>اپ استور</ label> */}

              
                 <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              {/* <span>گوگل پلی</span> */}
            </div>


        </div>        
      </footer>      
    </>
  )
}

export default Footer
