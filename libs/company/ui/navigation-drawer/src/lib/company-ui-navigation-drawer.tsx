import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { SharedUiDrawer, DrawerHeader } from '@ipts/shared-ui-drawer';
import { CompanyUiFooter } from '@ipts/company-ui-footer';
import { SharedUiNavigationList } from '@ipts/shared-ui-navigation-list';

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
          <CompanyUiFooter onClick={toggle} />
        </>
      )}
    </SharedUiDrawer>
  );
};

export default CompanyUiNavigationDrawer;
