import { CompanyDataNewsProvider } from '@ipts/company-data-news-provider';
import {
  CompanyUiNewsSection,
  CompanyUiIntroSection,
  CompanyUiNewsSubscriptionSection,
} from '@ipts/company-ui';
import { SharedUiLinearLayout } from '@ipts/shared-ui-linear-layout';
import background from '../assets/main-background.svg';

export const Home = () => {
  return (
    <SharedUiLinearLayout backgroundUrl={background}>
      <CompanyUiIntroSection />
      <CompanyDataNewsProvider>
        <CompanyUiNewsSection />
      </CompanyDataNewsProvider>
      <CompanyUiNewsSubscriptionSection />
    </SharedUiLinearLayout>
  );
};

export default Home;
