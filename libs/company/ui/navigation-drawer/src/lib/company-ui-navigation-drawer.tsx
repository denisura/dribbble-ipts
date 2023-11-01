import { createPortal } from 'react-dom';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { createContext, useContext } from 'react';
import invariant from 'invariant';
import { useToggle } from 'react-use';
import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import { Container, Link, Stack } from '@mui/material';

export interface CompanyUiNavigationDrawerProps {
  title: React.ReactElement | string | React.ReactNode;
}

const navItems = ['About', 'Services', 'Research'];

export type DrawerStateContextProp = [boolean, (nextValue?: any) => void];

export const DrawerStateContext = createContext<DrawerStateContextProp>([
  false,
  () => {},
]);

export const useDrawerStateContext = () => {
  const context = useContext(DrawerStateContext);
  invariant(
    context,
    'useDrawerStateContext must be used within DrawerStateProvider'
  );
  return context;
};

export interface DrawerStateProviderProps {
  open?: boolean;
  children?: React.ReactNode;
}

export const DrawerStateProvider = ({
  open = false,
  children,
}: DrawerStateProviderProps) => {
  return (
    <DrawerStateContext.Provider value={useToggle(open)}>
      {children}
    </DrawerStateContext.Provider>
  );
};

export const CompanyUiNavigationDrawer = ({
  title,
}: CompanyUiNavigationDrawerProps) => {
  const [open, toggle] = useDrawerStateContext();
  const { main, secondary, social } = useNavigationContext();

  return (
    <>
      {createPortal(
        <Drawer
          anchor="right"
          variant="temporary"
          open={open}
          onClose={toggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 'max(60vw,250px)',
            },
          }}
        >
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
          <Container
            onClick={toggle}
            sx={{ textAlign: 'center', background: '#412859', color: '#fff' }}
            maxWidth={false}
          >
            <Divider />
            <List>
              {secondary &&
                secondary.map(({ label, key, onClick }) => (
                  <ListItem key={key} disablePadding>
                    <ListItemButton
                      sx={{ textAlign: 'center' }}
                      onClick={onClick}
                    >
                      <ListItemText color="inherit">{label}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </Container>
          <Container
            onClick={toggle}
            sx={{
              textAlign: 'center',
              background: '#412859',
              color: '#fff',
              pb: 3,
            }}
            maxWidth={false}
          >
            <Typography variant="subtitle1" color="inherit" gutterBottom>
              Follow Us
            </Typography>
            <Stack gap={1} direction="row" justifyContent="center">
              {social &&
                social.map(({ label, key, to, icon }) => (
                  <Link href={to} key={key} color="inherit">
                    {icon ? icon : label}
                  </Link>
                ))}
            </Stack>
          </Container>
        </Drawer>,
        document.body
      )}
    </>
  );
};

export default CompanyUiNavigationDrawer;
