import type { Meta } from '@storybook/react';
import {
  SharedUiLinearLayout,
  defaultTheme,
  SharedUiThemeProvider,
  createTheme,
  Placeholder,
} from '@ipts/core/ui';

import backgroundUrl from '../assets/pattern_background.png';

const meta: Meta<typeof SharedUiLinearLayout> = {
  component: SharedUiLinearLayout,
  title: 'Design System/Layout',
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
          <Placeholder marginBottom="20px" />,
          <Placeholder marginBottom="20px" />,
          <Placeholder marginBottom="20px" />,
          <Placeholder marginBottom="20px" />,
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

export const Linear = {
  args: { children: 'placeholder', backgroundUrl },
};
