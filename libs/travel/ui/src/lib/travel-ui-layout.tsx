import {
  DrawerStateProvider,
  SharedUiHero,
  SharedUiLinearLayout,
} from '@ipts/core/ui';

import heroBackgroundUrl from '../assets/background.jpg';
import background from '../assets/main-background-3.svg';

import Header from './travel-ui-header';
import Drawer from './travel-ui-navigation-drawer';
import Footer from './travel-ui-footer';

export interface TravelUiLayoutProps {
  drawerOpen?: boolean;
  children?: React.ReactNode;
  heroTitle: string | React.ReactNode;
  heroSubTitle?: string;
  pageTitle: string | React.ReactNode;
}

export const TravelUiLayout = ({
  heroTitle,
  heroSubTitle = '',
  children,
  pageTitle,
}: TravelUiLayoutProps) => {
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
      <main>
        <SharedUiLinearLayout backgroundUrl={background}>
          {children}
        </SharedUiLinearLayout>
      </main>
      <Footer />
    </>
  );
};

export default TravelUiLayout;
