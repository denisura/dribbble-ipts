import { TravelUiFooter } from '@ipts/travel-ui-footer';
import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { SharedUiDrawer, DrawerHeader } from '@ipts/shared-ui-drawer';
import { SharedUiNavigationList } from '@ipts/shared-ui-navigation-list';

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
          <TravelUiFooter onClick={toggle} />
        </>
      )}
    </SharedUiDrawer>
  );
};

export default TravelUiNavigationDrawer;
