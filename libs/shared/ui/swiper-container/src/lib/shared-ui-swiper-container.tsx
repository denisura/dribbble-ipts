// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@mui/material/Container';
import { PropsWithChildren, Children, isValidElement } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const SharedUiSwiperContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container maxWidth={false} sx={{ minHeight: 300 }} disableGutters>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        slidesOffsetBefore={24}
        slidesOffsetAfter={24}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SharedUiSwiperContainer;
