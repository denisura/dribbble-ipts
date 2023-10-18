import { Outlet } from '@ipts/shared-router';
import { SharedDataNavigationProvider } from '@ipts/shared-data-navigation-provider';
import { CompanyUiLayout } from '@ipts/company-ui-layout';

export const AppLayout = () => {
  const main = [
    { label: 'blah', to: '/' },
    { label: 'blah', to: '/df' },
    { label: 'blah', to: '/sdf' },
    { label: 'blah', to: '/asdas' },
  ];
  const secondary = [
    { label: 'blah', to: '/' },
    { label: 'blah', to: '/df' },
    { label: 'blah', to: '/sdf' },
    { label: 'blah', to: '/asdas' },
  ];

  const social = [
    { label: 'Instagram', to: '/' },
    { label: 'Youtube', to: '/df' },
    { label: 'Facebook', to: '/sdf' },
    { label: 'Twitter', to: '/asdas' },
  ];

  const navData = { main, secondary, social };

  return (
    <SharedDataNavigationProvider value={navData}>
      <CompanyUiLayout>
        <Outlet />
      </CompanyUiLayout>
    </SharedDataNavigationProvider>
  );
};

export default AppLayout;
