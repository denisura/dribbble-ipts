import {
  SharedUiHero,
  DrawerStateProvider,
  SharedUiLinearLayout,
} from '@ipts/core/ui';

import Header from '../header/company-ui-header';
import Footer from '../footer/company-ui-footer';
import Drawer from '../drawer/company-ui-navigation-drawer';
import heroBackgroundUrl from '../../assets/outer-space.jpg';
import background from '../../assets/main-background.svg';

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
      <SharedUiLinearLayout backgroundUrl={background}>
        <main>{children}</main>
      </SharedUiLinearLayout>
      <Footer />
    </>
  );
};

export default CompanyUiLayout;
