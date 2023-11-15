import type { Meta } from '@storybook/react';

import {
  SharedUiBulletinSection,
  defaultTheme,
  SharedUiThemeProvider,
} from '@ipts/core/ui';

import { createTheme } from '@mui/material';
const meta: Meta<typeof SharedUiBulletinSection> = {
  component: SharedUiBulletinSection,
  title: 'Design System/Bulletin',
  tags: ['autodocs'],
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

export const BulletinHasMore = {
  args: {
    items: [
      { title: 'Item 1', url: '#' },
      { title: 'Item 2', url: '#' },
      { title: 'Item 3', url: '#' },
    ],
    loadMore: () => {},
    showMore: () => {},
    hasMore: true,
    title: '{ title }',
    color: 'primary',
  },
};
export const BulletinLoaded = {
  args: {
    items: [
      { title: 'Item 1', url: '#' },
      { title: 'Item 2', url: '#' },
      { title: 'Item 3', url: '#' },
      { title: 'Item 4', url: '#' },
    ],
    loadMore: () => {},
    showMore: () => {},
    hasMore: false,
    title: '{ title }',
    color: 'primary',
  },
};

export const BulletAlert = {
  args: {
    items: [
      { title: 'Item 1', url: '#' },
      { title: 'Item 2', url: '#' },
      { title: 'Item 3', url: '#' },
      { title: 'Item 4', url: '#' },
    ],
    loadMore: () => {},
    showMore: () => {},
    hasMore: false,
    title: '{ title }',
    color: 'error',
  },
};
