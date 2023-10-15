import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import { homeData, recommended } from '../../dummyData';
import Upcomming from '../Upcomming/Upcomming';
import "./SinglePage.css"


const SinglePage = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [recommend, setRecommend] = useState(recommended)

    useEffect(() => {
        let item = homeData.find((item) => item.id === parseInt(id));
        if(item){
            setItem(item);
            console.log(item)
        }

    } , [id])
  return (
    <>
        {item ? (
            <> 
              <section className='singlePage'>
                 <div className="singleHeading txt-rtl">
                    <h1>{item.name}</h1> &nbsp; &nbsp;
                    <span> | {item.time} | </span> &nbsp; &nbsp;
                    <span>HD</span>
                 </div>

                 <div className='container'>
                    <video src={item.video} controls> </video>
                    <div className='para txt-rtl'>
                        <h3>تاریخ: {item.date}</h3>
                        <p>{item.desc}</p>
                        
                        <p>
                        این مجموعه بخشی از فرنچایز جنگ ستارگان و اسپین‌آفی از مجموعهٔ مندلورین (۲۰۱۹–اکنون) 
                        به‌شمار می‌رود که داستان آن در بازهٔ زمانی این مجموعه و اسپین‌آف‌های پس از 
                        وقایع فیلم بازگشت جدای (۱۹۸۳) جریان دارد
                         و ادامه‌دهندهٔ داستان مجموعهٔ پویانمایی شورشیان جنگ ستارگان (۲۰۱۴–۲۰۱۸) است. این مجموعه به آسوکا
                         تانو می‌پردازد که در حال 
                         رسیدگی به تهدیدی رو به
                          شکل‌گیری برای کهکشان
                          به‌دنبال سرنگونی 
                         امپراتوری است
                        </p>

                        <p>
                        در دنیای پرماجرای دریانوردی،
                         یک کاپیتان دزد دریایی جوان به همراه دارودسته‌اش قدم به عرصه دریا می‌گذارد تا عنوان
                         پادشاه دزدان دریایی را به دست آورد و گنج افسانه‌ای موسوم به «وان پیس» را پیدا کند.
                        </p>

                        <p>
                        در مورد زوجی جوان به نام‌های لیو و ویل تیلور می‌باشد. آن‌ها زوجی خوشبخت هستند، 
                        اما وقتی لیو پیامی را در تلفن همراه
                         ویل مشاهده می‌کند که رابطه او با یکی از همکارانش را فاش می‌کند، زندگی آن‌ها به خطر می‌افتد.
                         دلشکستگی و تراژدی به سرعت به خشم و انتقام تبدیل می‌شود و داستان از اینجا آغاز می‌شود.
                        </p>

                    </div>

                    <div className='social txt-rtl'>
                        <h3> اشتراک گذاری:</h3>
                        &nbsp; &nbsp; &nbsp; 
                            <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                            <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                            <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />

                    </div>
                 </div>
              </section>

              <Upcomming items={recommend} title="فیلم های پیشنهاد شده" />

            </>
        ) : null}
    </>
  )
}

export default SinglePage
