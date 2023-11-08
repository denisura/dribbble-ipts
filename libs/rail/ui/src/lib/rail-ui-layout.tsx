import { SharedUiHero } from '@ipts/shared-ui-hero';
import { DrawerStateProvider } from '@ipts/shared-ui-drawer';
import heroBackgroundUrl from '../assets/background.jpg';

import Header from './rail-ui-header';
import Drawer from './rail-ui-navigation-drawer';
import Footer from './rail-ui-footer';

export interface RailUiLayoutProps {
  drawerOpen?: boolean;
  children?: React.ReactNode;
  heroTitle: string | React.ReactNode;
  heroSubTitle?: string;
  pageTitle: string | React.ReactNode;
}

export const RailUiLayout = ({
  heroTitle,
  heroSubTitle = '',
  children,
  pageTitle,
}: RailUiLayoutProps) => {
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
      {children}
      <Footer />
    </>
  );
};

export default RailUiLayout;
