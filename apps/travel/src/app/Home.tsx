import { SharedUiLinearLayout } from '@ipts/shared-ui-linear-layout';
import background from '../assets/main-background-3.svg';
import { TravelUiDealSubscriptionSection } from '@ipts/travel-ui-deal-subscription-section';
import { TravelUiPopularSection } from '@ipts/travel-ui-popular-section';
import { TravelUiSearchSection } from '@ipts/travel-ui-search-section';

export const Home = () => {
  return (
    <SharedUiLinearLayout backgroundUrl={background}>
      <TravelUiSearchSection />
      <TravelUiPopularSection />
      <TravelUiDealSubscriptionSection />
    </SharedUiLinearLayout>
  );
};

export default Home;
