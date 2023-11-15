import type { Meta } from '@storybook/react';

import {
  SharedUiHeader,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
  Placeholder,
} from '@ipts/core/ui';

const meta: Meta<typeof SharedUiHeader> = {
  component: SharedUiHeader,
  title: 'Design System/Header',
  decorators: [
    (Story) => (
      <SharedUiThemeProvider theme={createTheme(defaultTheme)}>
        <Story />
        <Placeholder sx={{ height: '100vh' }} />
      </SharedUiThemeProvider>
    ),
  ],

  argTypes: {
    children: {
      options: ['placeholder'],
      control: { type: 'select' },
      mapping: {
        placeholder: <Placeholder />,
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

export const Default = {
  args: {
    children: 'placeholder',
    title: '{Title}',
    navItems: [
      {
        label: 'Nav 1',
        key: 'nav1',
        onClick: () => {},
      },
    ],
  },
};
