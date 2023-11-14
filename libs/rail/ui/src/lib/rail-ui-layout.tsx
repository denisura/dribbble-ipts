import {
  SharedUiHero,
  DrawerStateProvider,
  SharedUiLinearLayout,
} from '@ipts/core/ui';

import heroBackgroundUrl from '../assets/background.jpg';
import Header from './rail-ui-header';
import Drawer from './rail-ui-navigation-drawer';
import Footer from './rail-ui-footer';
import background from '../assets/rail-background.svg';

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
  drawerOpen = false,
}: RailUiLayoutProps) => {
  return (
    <>
      <DrawerStateProvider open={drawerOpen}>
        <Header title={pageTitle}>
          <SharedUiHero
            backgroundUrl={heroBackgroundUrl}
            title={heroTitle}
            subTitle={heroSubTitle}
          />
        </Header>
        <Drawer title={pageTitle} />
      </DrawerStateProvider>
      <main>
        <SharedUiLinearLayout backgroundUrl={background}>
          {children}
        </SharedUiLinearLayout>
      </main>
      <Footer />
    </>
  );
};

export default RailUiLayout;
