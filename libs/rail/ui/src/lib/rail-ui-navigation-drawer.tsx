import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { SharedUiDrawer, DrawerHeader } from '@ipts/shared-ui-drawer';
import { SharedUiNavigationList } from '@ipts/shared-ui-navigation-list';

import Footer from './rail-ui-footer';

export interface RailUiNavigationDrawerProps {
  title: React.ReactElement | string | React.ReactNode;
}

export const RailUiNavigationDrawer = ({
  title,
}: RailUiNavigationDrawerProps) => {
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

export default RailUiNavigationDrawer;
