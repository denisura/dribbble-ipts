import { CompanyDataNewsProvider } from '@ipts/company-data-news-provider';
import {
  CompanyUiNewsSection,
  CompanyUiIntroSection,
  CompanyUiNewsSubscriptionSection,
} from '@ipts/company-ui';

export const Home = () => {
  return (
    <>
      <CompanyUiIntroSection />
      <CompanyDataNewsProvider>
        <CompanyUiNewsSection />
      </CompanyDataNewsProvider>
      <CompanyUiNewsSubscriptionSection />
    </>
  );
};

export default Home;
