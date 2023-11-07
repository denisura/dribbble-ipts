import { PropsWithChildren } from 'react';
import { SharedDataNavigationProvider } from '@ipts/shared-data-navigation-provider';

export const RailDataNavigationProvider = (props: PropsWithChildren) => {
  const main = [
    {
      label: 'Plan My Trip',
      to: '#',
      key: 'MyTrip',
      onClick: () => {
        console.log('navigate to Plan My Trip');
      },
    },
    {
      label: 'Local Services',
      to: '#',
      key: 'guide',
      onClick: () => {
        console.log('navigate to Guidebook to Galaxy');
      },
    },

    {
      label: 'Local Hotels',
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

  return <SharedDataNavigationProvider value={navData} {...props} />;
};

export default RailDataNavigationProvider;
