import { CompanyDataNewsProvider } from '@ipts/company-data-news-provider';
import { CompanyUiNewsSection } from '@ipts/company-ui-news-section';
import { CompanyUiIntroSection } from '@ipts/company-ui-intro-section';
import { CompanyUiNewsSubscriptionSection } from '@ipts/company-ui-news-subscription-section';
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
