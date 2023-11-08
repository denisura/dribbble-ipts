import { Outlet } from '@ipts/shared-router';
import { TravelDataNavigationProvider } from '@ipts/travel-data-navigation-provider';
import { TravelUiLayout } from '@ipts/travel-ui';
import { LogoVIcon, LogoHO } from '@ipts/shared-ui-logo';

export const AppLayout = () => {
  return (
    <TravelDataNavigationProvider>
      <TravelUiLayout
        heroTitle={<LogoVIcon sx={{ fontSize: 180 }} />}
        heroSubTitle="Memories await"
        pageTitle={<LogoHO />}
      >
        <Outlet />
      </TravelUiLayout>
    </TravelDataNavigationProvider>
  );
};

export default AppLayout;
