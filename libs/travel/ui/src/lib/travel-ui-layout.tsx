import { SharedUiHero } from '@ipts/shared-ui-hero';
import { DrawerStateProvider } from '@ipts/shared-ui-drawer';
import { SharedUiLinearLayout } from '@ipts/shared-ui-linear-layout';

import Header from './travel-ui-header';
import Drawer from './travel-ui-navigation-drawer';
import Footer from './travel-ui-footer';

import heroBackgroundUrl from '../assets/background.jpg';
import background from '../assets/main-background-3.svg';

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
      <SharedUiLinearLayout backgroundUrl={background}>
        {children}
      </SharedUiLinearLayout>
      <Footer />
    </>
  );
};

export default TravelUiLayout;
