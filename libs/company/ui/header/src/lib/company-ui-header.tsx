import { cloneElement } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@ipts/shared-ui-theme';
import { useScrolledToTop } from '@ipts/shared-hooks';
import { useDrawerStateContext } from '@ipts/company-ui-navigation-drawer';
import { useNavigationContext } from '@ipts/shared-data-navigation-provider';
import AdbIcon from '@mui/icons-material/Adb';

export interface CompanyUiHeaderProps {
  children: React.ReactElement;
  title: React.ReactElement | string | React.ReactNode;
}

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    threshold: 200,
  });

  const etrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
      easing={{
        enter: theme.transitions.easing.easeOut,
        exit: theme.transitions.easing.sharp,
      }}
    >
      {cloneElement(children, {
        elevation: etrigger ? 4 : 0,
      })}
    </Slide>
  );
}

export const CompanyUiHeader = ({ title, children }: CompanyUiHeaderProps) => {
  const theme = useTheme();

  const { main } = useNavigationContext();

  const [_, toggle] = useDrawerStateContext();
  const isScrolledToTop = useScrolledToTop();
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Container maxWidth="md">
            <Toolbar disableGutters>
              <Fade in={!isScrolledToTop}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: 'block' }}
                >
                  {title}
                </Typography>
              </Fade>

              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {main &&
                  main.map(({ label, key, onClick }) => (
                    <Button key={key} onClick={onClick}>
                      {label}
                    </Button>
                  ))}
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggle}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
          {children}
        </AppBar>
      </HideOnScroll>
      <Collapse
        in={isScrolledToTop}
        collapsedSize={theme.mixins.toolbar.minHeight}
      >
        <Toolbar
          sx={{
            '@media all': {
              minHeight: `calc(40vh + ${theme.mixins.toolbar.minHeight}px)`,
            },
          }}
        />
      </Collapse>
      <Box minHeight={theme.mixins.toolbar.minHeight}></Box>
    </>
  );
};
export default CompanyUiHeader;
