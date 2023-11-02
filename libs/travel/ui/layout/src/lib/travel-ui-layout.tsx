import { TravelUiHeader } from '@ipts/travel-ui-header';
import { CompanyUiNavigationDrawer } from '@ipts/company-ui-navigation-drawer';
import { TravelUiFooter } from '@ipts/travel-ui-footer';
import { SharedUiHero } from '@ipts/shared-ui-hero';
import { DrawerStateProvider } from '@ipts/shared-ui-drawer';
import heroBackgroundUrl from '../assets/background.jpg';

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
        <TravelUiHeader title={pageTitle}>
          <SharedUiHero
            backgroundUrl={heroBackgroundUrl}
            title={heroTitle}
            subTitle={heroSubTitle}
          />
        </TravelUiHeader>
        <CompanyUiNavigationDrawer title={pageTitle} />
      </DrawerStateProvider>
      {children}
      <TravelUiFooter />
    </>
  );
};

export default TravelUiLayout;
