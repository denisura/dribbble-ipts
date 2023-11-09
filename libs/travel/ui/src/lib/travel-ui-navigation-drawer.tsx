import { useNavigationContext } from '@ipts/core-data-navigation-provider';
import {
  SharedUiDrawer,
  SharedUiNavigationList,
  DrawerHeader,
} from '@ipts/core/ui';

import Footer from './travel-ui-footer';

export interface TravelUiNavigationDrawerProps {
  title: React.ReactElement | string | React.ReactNode;
}

export const TravelUiNavigationDrawer = ({
  title,
}: TravelUiNavigationDrawerProps) => {
  const { main } = useNavigationContext();

  return (
    <SharedUiDrawer>
      {(toggle) => (
        <>
          <DrawerHeader>{title}</DrawerHeader>
          <SharedUiNavigationList
            navItems={main}
            color="primary"
            dense={false}
            onClick={toggle}
            sx={{ flexGrow: 1 }}
          />
          <Footer onClick={toggle} />
        </>
      )}
    </SharedUiDrawer>
  );
};

export default TravelUiNavigationDrawer;
