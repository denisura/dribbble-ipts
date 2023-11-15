import type { Meta } from '@storybook/react';

import {
  SharedUiNavigationList,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
  Placeholder,
} from '@ipts/core/ui';

const meta: Meta<typeof SharedUiNavigationList> = {
  component: SharedUiNavigationList,
  title: 'Design System/List',
  decorators: [
    (Story) => (
      <SharedUiThemeProvider theme={createTheme(defaultTheme)}>
        <Story />
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
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export default meta;

const navItems = [
  {
    label: 'Item 1',
    key: 'Item1',
    onClick: () => {},
  },
  {
    label: 'Item 2',
    key: 'Item2',
    onClick: () => {},
  },
  {
    label: 'Item 3',
    key: 'Item3',
    onClick: () => {},
  },
];

export const Default = {
  args: {
    color: 'primary',
    dense: false,
    navItems,
  },
};

export const Dense = {
  args: {
    color: 'primary',
    dense: true,
    navItems,
  },
};
