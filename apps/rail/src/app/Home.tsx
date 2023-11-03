import { SharedUiLinearLayout } from '@ipts/shared-ui-linear-layout';
import background from '../assets/rail-background.svg';
import { RailUiSubscriptionSection } from '@ipts/rail-ui-subscription-section';
import { RailUiSearchSection } from '@ipts/rail-ui-search-section';
import { RailUiAlertsSection } from '@ipts/rail-ui-alerts-section';

export const Home = () => {
  return (
    <SharedUiLinearLayout backgroundUrl={background}>
      <RailUiSearchSection />
      <RailUiAlertsSection />
      <RailUiSubscriptionSection />
    </SharedUiLinearLayout>
  );
};

export default Home;
