import placeA from '../assets/place-a.jpg';
import placeB from '../assets/place-b.jpeg';
import placeC from '../assets/place-c.jpeg';
import placeD from '../assets/place-d.jpeg';

import {
  SharedUiActionCard,
  SharedUiCaptionCard,
  SharedUiSwiperContainer,
} from '@ipts/core/ui';

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
