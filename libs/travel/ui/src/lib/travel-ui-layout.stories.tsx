import type { Meta } from '@storybook/react';
import { TravelUiLayout } from './travel-ui-layout';

import { TravelUiThemeProvider } from '@ipts/travel-ui';
import { TravelDataNavigationProvider } from '@ipts/travel-data-navigation-provider';
import { DrawerStateProvider, LogoHO, LogoVIcon } from '@ipts/core/ui';

import Box from '@mui/material/Box/Box';

const meta: Meta<typeof TravelUiLayout> = {
  component: TravelUiLayout,
  title: 'Sites/Travel/Layout',
  decorators: [
    (Story) => (
      <TravelUiThemeProvider>
        <TravelDataNavigationProvider>
          <DrawerStateProvider>
            <Story
              heroTitle={<LogoVIcon sx={{ fontSize: 180 }} />}
              heroSubTitle="Space travel at ease"
              pageTitle={<LogoHO />}
            />
          </DrawerStateProvider>
        </TravelDataNavigationProvider>
      </TravelUiThemeProvider>
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
