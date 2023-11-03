import { RailUiHeader } from '@ipts/rail-ui-header';
import { RailUiNavigationDrawer } from '@ipts/rail-ui-navigation-drawer';
import { RailUiFooter } from '@ipts/rail-ui-footer';
import { SharedUiHero } from '@ipts/shared-ui-hero';
import { DrawerStateProvider } from '@ipts/shared-ui-drawer';
import heroBackgroundUrl from '../assets/background.jpg';

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
        <RailUiHeader title={pageTitle}>
          <SharedUiHero
            backgroundUrl={heroBackgroundUrl}
            title={heroTitle}
            subTitle={heroSubTitle}
          />
        </RailUiHeader>
        <RailUiNavigationDrawer title={pageTitle} />
      </DrawerStateProvider>
      {children}
      <RailUiFooter />
    </>
  );
};

export default RailUiLayout;
