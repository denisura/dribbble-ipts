import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { Container } from '@mui/material';
import { SharedUiDrawer } from '@ipts/shared-ui-drawer';
import { CompanyUiFooter } from '@ipts/company-ui-footer';

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
          <Container
            onClick={toggle}
            sx={{ minHeight: '60vh', textAlign: 'center', flexGrow: 1 }}
          >
            <Typography variant="h6" sx={{ my: 2 }}>
              {title}
            </Typography>
            <Divider />
            <List>
              {main &&
                main.map(({ label, key, onClick }) => (
                  <ListItem key={key} disablePadding>
                    <ListItemButton
                      sx={{ textAlign: 'center' }}
                      onClick={onClick}
                    >
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </Container>

          <CompanyUiFooter onClick={toggle} />
        </>
      )}
    </SharedUiDrawer>
  );
};

export default CompanyUiNavigationDrawer;
