import type { Meta } from '@storybook/react';

import {
  NeutralContainer,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
  Placeholder,
} from '@ipts/core/ui';

const meta: Meta<typeof NeutralContainer> = {
  component: NeutralContainer,
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

export const Neutral = {
  args: { children: 'placeholder', disableGutters: false },
};
