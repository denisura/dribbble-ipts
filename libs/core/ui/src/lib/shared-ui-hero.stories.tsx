import type { Meta } from '@storybook/react';

import {
  SharedUiHero,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
} from '@ipts/core/ui';

import backgroundUrl from '../assets/story_background.jpg';

const meta: Meta<typeof SharedUiHero> = {
  component: SharedUiHero,
  title: 'Design System/Hero',
  decorators: [
    (Story) => (
      <SharedUiThemeProvider theme={createTheme(defaultTheme)}>
        <Story />
      </SharedUiThemeProvider>
    ),
  ],

  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export default meta;

export const Background = {
  args: {
    backgroundUrl,
    title: '{Title}',
    subTitle: '{Subtitle}',
  },
};
