import {
  TravelUiDealSubscriptionSection,
  TravelUiPopularSection,
  TravelUiSearchSection,
} from '@ipts/travel-ui';

export const Home = () => {
  return (
    <>
      <TravelUiSearchSection />
      <TravelUiPopularSection />
      <TravelUiDealSubscriptionSection />
    </>
  );
};

export default Home;
