import type { Meta } from '@storybook/react';

import {
  SharedUiDrawer,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
  Placeholder,
  DrawerStateProvider,
} from '@ipts/core/ui';

const meta: Meta<typeof SharedUiDrawer> = {
  component: SharedUiDrawer,
  title: 'Design System/Containers',
  decorators: [
    (Story) => (
      <SharedUiThemeProvider theme={createTheme(defaultTheme)}>
        <DrawerStateProvider open={true}>
          <Story />
        </DrawerStateProvider>
      </SharedUiThemeProvider>
    ),
  ],

  argTypes: {
    children: {
      options: ['placeholder'],
      control: { type: 'select' },
      mapping: {
        placeholder: (toggle: () => void) => <Placeholder onClick={toggle} />,
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

export const Drawer = {
  args: { children: 'placeholder' },
};
