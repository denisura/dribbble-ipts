import { Outlet } from '@ipts/core-router';
import { RailDataNavigationProvider } from '@ipts/rail-data-navigation-provider';
import { RailUiLayout } from '@ipts/rail-ui';
import { LogoVIcon, LogoHO } from '@ipts/core/ui';

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
