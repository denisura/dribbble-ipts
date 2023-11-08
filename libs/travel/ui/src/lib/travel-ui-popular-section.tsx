import placeA from '../assets/place-a.jpg';
import placeB from '../assets/place-b.jpeg';
import placeC from '../assets/place-c.jpeg';
import placeD from '../assets/place-d.jpeg';

import { SharedUiCaptionCard } from '@ipts/shared-ui-caption-card';
import { SharedUiActionCard } from '@ipts/shared-ui-action-card';
import { SharedUiSwiperContainer } from '@ipts/shared-ui-swiper-container';

const points = [
  {
    title: 'Mars: Book exclusive tourist excursions!',
    background: placeA,
    ctaLabel: 'Book Now',
  },
  {
    title: 'Moon: Premier space tourism experience!',
    background: placeB,
    ctaLabel: 'Book Now',
  },
  {
    title: 'Space Station: Orbital vacation rentals!',
    background: placeC,
    ctaLabel: 'Book Now',
  },
  {
    title: 'Asteroid Belt: Adventure space tours available!',
    background: placeD,
    ctaLabel: 'Book Now',
  },
];

export const TravelUiPopularSection = () => {
  return (
    <SharedUiSwiperContainer>
      <SharedUiCaptionCard title="Explore popular destination" />
      {points.map(({ title, background, ctaLabel }) => (
        <SharedUiActionCard
          key={title}
          title={title}
          background={background}
          ctaLabel={ctaLabel}
        />
      ))}
    </SharedUiSwiperContainer>
  );
};

export default TravelUiPopularSection;
