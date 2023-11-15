import type { Meta } from '@storybook/react';

import {
  SharedUiBackgroundContainer,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
  Placeholder,
} from '@ipts/core/ui';

import backgroundUrl from '../assets/story_background.jpg';

const meta: Meta<typeof SharedUiBackgroundContainer> = {
  component: SharedUiBackgroundContainer,
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

export const Background = {
  args: { children: 'placeholder', backgroundUrl, disableGutters: false },
};
