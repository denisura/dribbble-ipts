import { useState } from 'react';
import { CompanyUiHeader } from '@ipts/company-ui-header';
import { CompanyUiNavigationDrawer } from '@ipts/company-ui-navigation-drawer';
import { CompanyUiFooter } from '@ipts/company-ui-footer';
import { SharedUiHero } from '@ipts/shared-ui-hero';
import { DrawerStateProvider } from '@ipts/shared-ui-drawer';

import heroBackgroundUrl from './outer-space.jpg';

export interface CompanyUiLayoutProps {
  drawerOpen?: boolean;
  children?: React.ReactNode;
  heroTitle: string | React.ReactNode;
  heroSubTitle?: string;
  pageTitle: string | React.ReactNode;
}

export const CompanyUiLayout = ({
  heroTitle,
  heroSubTitle = '',
  children,
  pageTitle,
}: CompanyUiLayoutProps) => {
  return (
    <>
      <DrawerStateProvider>
        <CompanyUiHeader title={pageTitle}>
          <SharedUiHero
            backgroundUrl={heroBackgroundUrl}
            title={heroTitle}
            subTitle={heroSubTitle}
          />
        </CompanyUiHeader>
        <CompanyUiNavigationDrawer title={pageTitle} />
      </DrawerStateProvider>
      <main>{children}</main>
      <CompanyUiFooter />
    </>
  );
};

export default CompanyUiLayout;
