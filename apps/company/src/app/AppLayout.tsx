import { Outlet } from '@ipts/core-router';
import { CompanyDataNavigationProvider } from '@ipts/company-data-navigation-provider';
import { CompanyUiLayout } from '@ipts/company-ui';
import { LogoVIcon, LogoHO } from '@ipts/core/ui';

export const AppLayout = () => {
  return (
    <CompanyDataNavigationProvider>
      <CompanyUiLayout
        heroTitle={<LogoVIcon sx={{ fontSize: 180 }} />}
        heroSubTitle="Space travel at ease"
        pageTitle={<LogoHO />}
      >
        <Outlet />
      </CompanyUiLayout>
    </CompanyDataNavigationProvider>
  );
};

export default AppLayout;
