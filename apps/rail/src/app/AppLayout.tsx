import { Outlet } from '@ipts/core-router';
import { RailDataNavigationProvider } from '@ipts/rail-data-navigation-provider';
import { RailUiLayout } from '@ipts/rail-ui';
import { LogoRide } from '@ipts/core/ui';

export const AppLayout = () => {
  return (
    <RailDataNavigationProvider>
      <RailUiLayout
        heroTitle={<LogoRide />}
        heroSubTitle="Stay connected"
        pageTitle="Shuddle Ride"
      >
        <Outlet />
      </RailUiLayout>
    </RailDataNavigationProvider>
  );
};

export default AppLayout;
