import { SharedUiHero } from '@ipts/shared-ui-hero';
import { DrawerStateProvider } from '@ipts/shared-ui-drawer';

import Header from '../header/company-ui-header';
import Footer from '../footer/company-ui-footer';
import Drawer from '../drawer/company-ui-navigation-drawer';

import heroBackgroundUrl from '../../assets/outer-space.jpg';

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
        <Header title={pageTitle}>
          <SharedUiHero
            backgroundUrl={heroBackgroundUrl}
            title={heroTitle}
            subTitle={heroSubTitle}
          />
        </Header>
        <Drawer title={pageTitle} />
      </DrawerStateProvider>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CompanyUiLayout;
