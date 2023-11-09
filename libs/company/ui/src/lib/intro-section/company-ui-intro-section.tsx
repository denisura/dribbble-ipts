import {
  SharedUiCaptionCard,
  SharedUiActionCard,
  SharedUiSwiperContainer,
} from '@ipts/core/ui';

import space from '../../assets/space.jpg';
import open from '../../assets/open-space.jpg';
import planets from '../../assets/planets-art.jpg';
import travel from '../../assets/travel.webp';

const points = [
  {
    title: 'Personalized Itineraries: Tailored to Your Cosmic Curiosity!',
    background: space,
    ctaLabel: 'Learn More',
  },
  {
    title: 'Cutting-Edge Spacecraft: Your Vessel to the Stars!',
    background: travel,
    ctaLabel: 'Learn More',
  },
  {
    title: 'Unveil the Cosmos: Beyond Your Wildest Dreams!',
    background: planets,
    ctaLabel: 'Learn More',
  },
  {
    title: 'Beyond Boundaries, Beyond Imagination: The Celestial Promise!',
    background: open,
    ctaLabel: 'Learn More',
  },
];

export const CompanyUiIntroSection = () => {
  return (
    <SharedUiSwiperContainer>
      <SharedUiCaptionCard title="More than just a space travel" />
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

export default CompanyUiIntroSection;
