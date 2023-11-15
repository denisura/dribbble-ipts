import type { Meta } from '@storybook/react';

import {
  SharedUiSwiperContainer,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
  Placeholder,
} from '@ipts/core/ui';

const meta: Meta<typeof SharedUiSwiperContainer> = {
  component: SharedUiSwiperContainer,
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
        placeholder: [
          <Placeholder />,
          <Placeholder />,
          <Placeholder />,
          <Placeholder />,
          <Placeholder />,
        ],
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

export const Swiper = {
  args: {
    children: 'placeholder',
  },
};
