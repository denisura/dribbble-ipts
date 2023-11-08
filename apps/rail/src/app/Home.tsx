import { SharedUiLinearLayout } from '@ipts/shared-ui-linear-layout';
import {
  RailUiSubscriptionSection,
  RailUiSearchSection,
  RailUiAlertsSection,
} from '@ipts/rail-ui';
import { RailDataAlertProvider } from '@ipts/rail-data-alert-provider';

import background from '../assets/rail-background.svg';

export const Home = () => {
  return (
    <SharedUiLinearLayout backgroundUrl={background}>
      <RailUiSearchSection />
      <RailDataAlertProvider>
        <RailUiAlertsSection />
      </RailDataAlertProvider>
      <RailUiSubscriptionSection />
    </SharedUiLinearLayout>
  );
};

export default Home;
