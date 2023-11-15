import type { Meta } from '@storybook/react';
import { Facebook, Instagram, YouTube } from '@ipts/core/ui';

import {
  SharedUiNavigationStack,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
} from '@ipts/core/ui';

const meta: Meta<typeof SharedUiNavigationStack> = {
  component: SharedUiNavigationStack,
  title: 'Design System/Navigation',
  decorators: [
    (Story) => (
      <SharedUiThemeProvider theme={createTheme(defaultTheme)}>
        <Story />
      </SharedUiThemeProvider>
    ),
  ],

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

const navItemsWithLogo = [
  {
    label: 'Item 1',
    key: 'Item1',
    onClick: () => {},
    icon: <Facebook />,
  },
  {
    label: 'Item 2',
    key: 'Item2',
    onClick: () => {},
    icon: <Instagram />,
  },
  {
    label: 'Item 3',
    key: 'Item3',
    onClick: () => {},
    icon: <YouTube />,
  },
];

export const StackWithLabel = {
  args: {
    subtitle: '{Subtitle}',
    navItems,
  },
};
export const StackWithIcons = {
  args: {
    subtitle: '{Subtitle}',
    navItems: navItemsWithLogo,
  },
};
