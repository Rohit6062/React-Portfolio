import React from 'react'
import './Testimonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Profilepic1 from '../../img/profile1.jpg'
import Profilepic2 from '../../img/profile2.jpg'
import Profilepic3 from '../../img/profile3.jpg'
import Profilepic4 from '../../img/profile4.jpg'
import {Pagination} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'
const Testimonial = () => {
    const clients=[
        {
            img:Profilepic1,
            review:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque odit cupiditate dolores aspernatur sapiente hic! Eligendi ad beatae doloremque dicta consequatur, aut cupiditate, similique esse quidem pariatur delectus iure!'
        },
        {
            img:Profilepic2,
            review:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque odit cupiditate dolores aspernatur sapiente hic! Eligendi ad beatae doloremque dicta consequatur, aut cupiditate, similique esse quidem pariatur delectus iure!'
        },{
            img:Profilepic3,
            review:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque odit cupiditate dolores aspernatur sapiente hic! Eligendi ad beatae doloremque dicta consequatur, aut cupiditate, similique esse quidem pariatur delectus iure!'
        },{
            img:Profilepic4,
            review:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias cumque odit cupiditate dolores aspernatur sapiente hic! Eligendi ad beatae doloremque dicta consequatur, aut cupiditate, similique esse quidem pariatur delectus iure!'
        },
    ]
  return (
    <div className="t-wrapper" id='Testomonials'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional work</span>
            <span>From me...</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        {/* slider */}
    <Swiper 
    modules={[Pagination]}
    slidesPerView={1}
    Pagination={{clickable:true}}
    >
    {clients.map((client,index)=>{
        return(
            <SwiperSlide key={index}>
                <div className="testimonial">

                <img src={client.img} alt="" />
                <span>{client.review}</span>
                </div>
            </SwiperSlide>
        )
    })}



    </Swiper>
    </div>
  )
}

export default Testimonial