import { Outlet } from '@ipts/core-router';
import { TravelDataNavigationProvider } from '@ipts/travel-data-navigation-provider';
import { TravelUiLayout } from '@ipts/travel-ui';
import { LogoVisit } from '@ipts/core/ui';

export const AppLayout = () => {
  return (
    <TravelDataNavigationProvider>
      <TravelUiLayout
        heroTitle={<LogoVisit />}
        heroSubTitle="Memories await"
        pageTitle="Shuddle Visit"
      >
        <Outlet />
      </TravelUiLayout>
    </TravelDataNavigationProvider>
  );
};

export default AppLayout;
