// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import space from '../assets/space.jpg';
import open from '../assets/open-space.jpg';
import planets from '../assets/planets-art.jpg';
import travel from '../assets/travel.webp';

const points = [
  {
    title: 'Personalized Itineraries: Tailored to Your Cosmic Curiosity!',
    background: space,
  },
  {
    title: 'Cutting-Edge Spacecraft: Your Vessel to the Stars!',
    background: travel,
  },
  {
    title: 'Unveil the Cosmos: Beyond Your Wildest Dreams!',
    background: planets,
  },
  {
    title: 'Beyond Boundaries, Beyond Imagination: The Celestial Promise!',
    background: open,
  },
];

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

const InfoCard = () => (
  <Box sx={{ width: '100%', height: '100%' }}>
    <Card
      variant="outlined"
      color="secondary"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          pr: '10%',
        }}
      >
        <Typography variant="h3" color="text.secondary" gutterBottom>
          More than just a space travel
          <ArrowForwardRoundedIcon color="secondary" />
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

const InfoCardBtn = ({
  title,
  background,
}: {
  title: string;
  background: string;
}) => (
  <Box sx={{ width: '100%', height: '100%' }}>
    <Card
      variant="outlined"
      color="secondary"
      sx={{
        background: `url(${background})`,
        backgroundSize: 'cover',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          // flexGrow: 1,
          pr: '20%',
          background: 'linear-gradient(128deg, rgba(0,0,0,1), rgba(0,0,0,0))', // Dark gradient background
        }}
      >
        <Typography variant="h5" color="white" gutterBottom>
          {title}
        </Typography>
        <Button size="small" color="secondary" variant="contained">
          Learn More
        </Button>
      </CardContent>
    </Card>
  </Box>
);

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const CompanyUiIntroSection = () => {
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
        <SwiperSlide>
          <InfoCard />
        </SwiperSlide>
        {points.map(({ title, background }, index) => (
          <SwiperSlide key={index}>
            <InfoCardBtn title={title} background={background} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CompanyUiIntroSection;
