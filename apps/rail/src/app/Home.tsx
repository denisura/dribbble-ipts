import {
  RailUiSubscriptionSection,
  RailUiSearchSection,
  RailUiAlertsSection,
} from '@ipts/rail-ui';
import { RailDataAlertProvider } from '@ipts/rail-data-alert-provider';

export const Home = () => {
  return (
    <>
      <RailUiSearchSection />
      <RailDataAlertProvider>
        <RailUiAlertsSection />
      </RailDataAlertProvider>
      <RailUiSubscriptionSection />
    </>
  );
};

export default Home;
