import { Outlet } from '@ipts/core-router';
import { CompanyDataNavigationProvider } from '@ipts/company-data-navigation-provider';
import { CompanyUiLayout } from '@ipts/company-ui';
import { LogoWorld } from '@ipts/core/ui';

export const AppLayout = () => {
  return (
    <CompanyDataNavigationProvider>
      <CompanyUiLayout
        heroTitle={<LogoWorld />}
        heroSubTitle="Space travel at ease"
        pageTitle={<LogoWorld />}
      >
        <Outlet />
      </CompanyUiLayout>
    </CompanyDataNavigationProvider>
  );
};

export default AppLayout;
