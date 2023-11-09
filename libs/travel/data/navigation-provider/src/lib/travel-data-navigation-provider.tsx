import { PropsWithChildren } from 'react';
import { SharedDataNavigationProvider } from '@ipts/core-data-navigation-provider';

export const TravelDataNavigationProvider = (props: PropsWithChildren) => {
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

  return <SharedDataNavigationProvider value={navData} {...props} />;
};

export default TravelDataNavigationProvider;
