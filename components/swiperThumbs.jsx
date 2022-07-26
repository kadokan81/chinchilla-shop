import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

const SwiperThumb = ({ photos }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<>
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
					'--swiper-pagination-color': '#fff',
				}}
				slidesPerView={1}
				spaceBetween={10}
				navigation={true}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper2'
				// onSlideChange={() => console.log('slide change')}
				// onSwiper={(swiper) => console.log(swiper)}
			>
				{photos.map((photo, ind) => (
					<SwiperSlide key={ind}>
						<Image src={photo.url} alt='cat' layout='fill' />
					</SwiperSlide>
				))}
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper'>
				{photos.map((photo, ind) => (
					<SwiperSlide key={ind}>
						<Image src={photo.url} alt='cat' layout='fill' />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default SwiperThumb;
