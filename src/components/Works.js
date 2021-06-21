import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation])

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
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://www.google.com.tw/">
            <img src="https://keila0933.github.io/Resume/images/work_resume.JPG" />
            <div className="workInfo">
              <div className="workTitle">Title1</div>
              <div className="workTool">Tool</div>
            </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://fcy-shoes-store.herokuapp.com/">
            <img src="https://keila0933.github.io/Resume/images/work_store.JPG" />
            <div className="workInfo">
              <div className="workTitle">Title2</div>
              <div className="workTool">Tool</div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://keila0933.github.io/paint-board/">
            <img src="https://keila0933.github.io/Resume/images/work_paint.JPG" />
            <div className="workInfo">
              <div className="workTitle">Title3</div>
              <div className="workTool">Tool</div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
