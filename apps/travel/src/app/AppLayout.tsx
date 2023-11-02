import { Outlet } from '@ipts/shared-router';
import { SharedDataNavigationProvider } from '@ipts/shared-data-navigation-provider';
import { TravelUiLayout } from '@ipts/travel-ui-layout';
import { LogoVIcon, LogoHO } from '@ipts/shared-ui-logo';

export const AppLayout = () => {
  const main = [
    {
      label: 'Getting Started',
      to: '#',
      key: 'Popular',
      onClick: () => {
        console.log('navigate to Get Started');
      },
    },
    {
      label: 'Guidebook to Galaxy',
      to: '#',
      key: 'guide',
      onClick: () => {
        console.log('navigate to Guidebook to Galaxy');
      },
    },

    {
      label: 'Space Stations Catalog',
      to: '#',
      key: 'stations',
      onClick: () => {
        console.log('navigate to Space Stations');
      },
    },
  ];
  const secondary = [
    {
      label: 'Contact Us',
      to: '#',
      key: '',
      onClick: () => {
        console.log('navigate to Contact Us');
      },
    },
    {
      label: 'First Time Traveler',
      to: '#',
      key: 'first',
      onClick: () => {
        console.log('navigate to First Time Traveler');
      },
    },
    {
      label: 'Safety and Regulations',
      to: '#',
      key: 'safety',
      onClick: () => {
        console.log('navigate to Safety and Regulations');
      },
    },
  ];

  const navData = { main, secondary };

  return (
    <SharedDataNavigationProvider value={navData}>
      <TravelUiLayout
        heroTitle={<LogoVIcon sx={{ fontSize: 180 }} />}
        heroSubTitle="Memories await"
        pageTitle={<LogoHO />}
      >
        <Outlet />
      </TravelUiLayout>
    </SharedDataNavigationProvider>
  );
};

export default AppLayout;
