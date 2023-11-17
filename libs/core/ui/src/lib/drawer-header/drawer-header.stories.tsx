import type { Meta } from '@storybook/react';

import {
  DrawerHeader,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
  LogoWorld,
  Placeholder,
} from '@ipts/core/ui';

const meta: Meta<typeof DrawerHeader> = {
  component: DrawerHeader,
  title: 'Design System/Drawer',
  decorators: [
    (Story) => (
      <SharedUiThemeProvider theme={createTheme(defaultTheme)}>
        <Story />
      </SharedUiThemeProvider>
    ),
  ],

  argTypes: {
    children: {
      // control: 'object',
      options: ['placeholder', 'logo'],
      control: { type: 'select' },
      mapping: {
        placeholder: <Placeholder />,
        logo: <LogoWorld />,
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

export const Header = {
  args: { children: 'placeholder' },
};
