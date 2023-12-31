import { useNavigationContext } from '@ipts/core-data-navigation-provider';
import {
  SharedUiDrawer,
  DrawerHeader,
  SharedUiNavigationList,
} from '@ipts/core/ui';

import Footer from './company-ui-footer';

export interface CompanyUiNavigationDrawerProps {
  title: React.ReactElement | string | React.ReactNode;
}

export const CompanyUiNavigationDrawer = ({
  title,
}: CompanyUiNavigationDrawerProps) => {
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

export default CompanyUiNavigationDrawer;
