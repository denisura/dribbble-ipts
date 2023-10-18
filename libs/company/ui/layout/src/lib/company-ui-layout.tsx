import { useState } from 'react';
import { CompanyUiHeader } from '@ipts/company-ui-header';
import { CompanyUiNavigationDrawer } from '@ipts/company-ui-navigation-drawer';
import { CompanyUiFooter } from '@ipts/company-ui-footer';

export interface CompanyUiLayoutProps {
  drawerOpen?: boolean;
  children?: React.ReactNode;
}

export function CompanyUiLayout({
  drawerOpen = false,
  children,
}: CompanyUiLayoutProps) {
  const [_drawerOpen, setDrawerOpen] = useState<Boolean>(drawerOpen);
  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <CompanyUiHeader />
      <CompanyUiNavigationDrawer />
      <main>{children}</main>
      <CompanyUiFooter />
    </>
  );
}

export default CompanyUiLayout;
