import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../card/Card";

import './CardCarouselSection.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import leftBtn from "../../assests/leftBtn.png";
import rightBtn from "../../assests/rightBtn.png"





const CardCarouselSection=({ name, songsData })=>{

    return(
        <div className='swipper'>
          <Swiper
           slidesPerView={10}
            spaceBetween={10}
            navigation={{
                nextE1:`#${name.split(' ').join('')}-right`,
            prevEl: `#${name.split(' ').join('')}-left`,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >

            {songsData.map((song)=>(
                <SwiperSlide key={song.id}>
                <Card
              image={song.image}
              text={
                song.follows !== undefined
                  ? `${song.follows} Follows`
                  : `${song.likes} Likes`
              }
              title={song.title}
              tooltipText={song.songs?.length}
            />

                </SwiperSlide>
            ))}

          </Swiper>

          <button
        className="left-btn slider-btn"
        id={`${name.split(' ').join('')}-left`}
      >
        <img src={leftBtn} alt="Left Button" />
      </button>
      <button
        className="right-btn slider-btn"
        id={`${name.split(' ').join('')}-right`}
      >
        <img src={rightBtn} alt="Right Button" />
      </button>


        </div>

    );
};


export default CardCarouselSection;
