import { Outlet } from '@ipts/shared-router';
import { SharedDataNavigationProvider } from '@ipts/shared-data-navigation-provider';
import { CompanyUiLayout } from '@ipts/company-ui-layout';

import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';

import { LogoVIcon, LogoHO } from '@ipts/shared-ui-logo';

export const AppLayout = () => {
  const main = [
    {
      label: 'Mission',
      to: '#',
      key: 'Mission',
      onClick: () => {
        console.log('navigate to Mission');
      },
    },
    {
      label: 'About',
      to: '#',
      key: 'about',
      onClick: () => {
        console.log('navigate to About');
      },
    },
    {
      label: 'Services',
      to: '#',
      key: 'services',
      onClick: () => {
        console.log('navigate to Services');
      },
    },
    {
      label: 'Research',
      to: '/#',
      key: 'research',
      onClick: () => {
        console.log('navigate to Research');
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
      label: 'Careers',
      to: '#',
      key: 'careers',
      onClick: () => {
        console.log('navigate to Careers');
      },
    },
    {
      label: 'Partners',
      to: '#',
      key: 'parters',
      onClick: () => {
        console.log('navigate to Partners');
      },
    },
  ];

  const social = [
    {
      label: 'Instagram',
      to: '#',
      key: 'instagram',
      icon: <Instagram />,
      onClick: () => {
        console.log('navigate to Instagram');
      },
    },
    {
      label: 'Youtube',
      to: '#',
      key: 'youtube',
      icon: <YouTube />,
      onClick: () => {
        console.log('navigate to Youtube');
      },
    },
    {
      label: 'Facebook',
      to: '#',
      icon: <Facebook />,
      key: 'facebook',
      onClick: () => {
        console.log('navigate to Facebook');
      },
    },
    {
      label: 'Twitter',
      to: '#',
      key: 'twitter',
      icon: <Twitter />,
      onClick: () => {
        console.log('navigate to Twitter');
      },
    },
  ];

  const navData = { main, secondary, social };

  return (
    <SharedDataNavigationProvider value={navData}>
      <CompanyUiLayout
        heroTitle={<LogoVIcon sx={{ fontSize: 180 }} />}
        heroSubTitle="Space travel at ease"
        pageTitle={<LogoHO />}
      >
        <Outlet />
      </CompanyUiLayout>
    </SharedDataNavigationProvider>
  );
};

export default AppLayout;
