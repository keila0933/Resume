import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination])

const works = [
  {
    title: '1',
    tool: '',
    link: '',
    img: 'https://swiperjs.com/demos/images/nature-1.jpg',
  },
  {
    title: '2',
    tool: ' ',
    link: '',
    img: 'https://swiperjs.com/demos/images/nature-2.jpg',
  },
]

export default function Works() {
  return (
    <div className="mgb container">
      <div className="title_box container-flex">
        <h2>作品集</h2>
        <span>SIDE PROJECTS</span>
      </div>
      <Swiper
        effect={'coverflow'}
        initialSlide={1}
        centeredSlides={true}
        slidesPerView={'auto'}
        observer={true}
        observeParents={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide tag="a" href="https://keila0933.github.io/Resume/">
          <img src="https://keila0933.github.io/Resume/images/work_resume.JPG" />
          <div className="workInfo">
            <p className="workTitle">Portfolio Website</p>
            <p className="workTool">Webpack | React.js | Swiper | SCSS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="a" href="https://fcy-shoes-store.herokuapp.com/">
          <img src="https://keila0933.github.io/Resume/images/work_store.JPG" />
          <div className="workInfo">
            <p className="workTitle">Shoes Store</p>
            <p className="workTool">
              React.js | Hook | Heroku <br /> JSON Sever | JWT
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide tag="a" href="https://keila0933.github.io/paint-board/">
          <img src="https://keila0933.github.io/Resume/images/work_paint.JPG" />
          <div className="workInfo">
            <p className="workTitle">Paint Board</p>
            <p className="workTool">JS | Canvas | CSS</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
