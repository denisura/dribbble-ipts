import { Outlet } from '@ipts/shared-router';
import { RailDataNavigationProvider } from '@ipts/rail-data-navigation-provider';
import { RailUiLayout } from '@ipts/rail-ui';
import { LogoVIcon, LogoHO } from '@ipts/shared-ui-logo';

export const AppLayout = () => {
  return (
    <RailDataNavigationProvider>
      <RailUiLayout
        heroTitle={<LogoVIcon sx={{ fontSize: 180 }} />}
        heroSubTitle="Stay connected"
        pageTitle={<LogoHO />}
      >
        <Outlet />
      </RailUiLayout>
    </RailDataNavigationProvider>
  );
};

export default AppLayout;
