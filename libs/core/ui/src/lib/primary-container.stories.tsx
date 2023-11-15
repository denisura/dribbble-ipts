import type { Meta } from '@storybook/react';

import {
  PrimaryContainer,
  defaultTheme,
  SharedUiThemeProvider,
  Placeholder,
} from '@ipts/core/ui';

import { createTheme } from '@mui/material';

const meta: Meta<typeof PrimaryContainer> = {
  component: PrimaryContainer,
  title: 'Design System/Containers',
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
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export default meta;

export const Primary = {
  args: { children: 'placeholder', disableGutters: false },
};
