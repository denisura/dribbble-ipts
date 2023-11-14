import type { Meta } from '@storybook/react';
import { RailUiLayout } from './rail-ui-layout';

import { RailUiThemeProvider } from './rail-ui-theme-provider';
import { RailDataNavigationProvider } from '@ipts/rail-data-navigation-provider';
import { DrawerStateProvider, LogoHO, LogoVIcon } from '@ipts/core/ui';
import Box from '@mui/material/Box/Box';

const meta: Meta<typeof RailUiLayout> = {
  component: RailUiLayout,
  title: 'Sites/Rail/Layout',
  decorators: [
    (Story) => (
      <RailUiThemeProvider>
        <RailDataNavigationProvider>
          <DrawerStateProvider>
            <Story
              heroTitle={<LogoVIcon sx={{ fontSize: 180 }} />}
              heroSubTitle="Space travel at ease"
              pageTitle={<LogoHO />}
            />
          </DrawerStateProvider>
        </RailDataNavigationProvider>
      </RailUiThemeProvider>
    ),
  ],
  argTypes: {
    children: {
      control: 'object',
      options: ['placeholder'],
      mapping: {
        placeholder: (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 0, 0, 0.3)',
              height: '100vh',
              width: '100%',
              color: '#fff',
            }}
          >
            Placeholder
          </Box>
        ),
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export default meta;

export const Main = {
  args: {
    heroTitle: 'My Title',
    heroSubTitle: 'Space travel at ease',
    pageTitle: 'Page Title',
  },
};

export const MainWithOpenDrawer = {
  args: {
    heroTitle: 'My Title',
    heroSubTitle: 'Space travel at ease',
    pageTitle: 'Page Title',
    drawerOpen: true,
  },
};
