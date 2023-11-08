import type { Meta, StoryObj } from '@storybook/react';
import { CompanyUiNewsSubscriptionSection } from './company-ui-news-subscription-section';
import { CompanyUiThemeProvider } from '@ipts/company-ui-theme-provider';
import { Container } from '@mui/material';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CompanyUiNewsSubscriptionSection> = {
  component: CompanyUiNewsSubscriptionSection,
  title: 'Sites/Company/Sections',
  decorators: [
    (Story) => (
      <CompanyUiThemeProvider>
        <Container
          maxWidth="xs"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Story />
        </Container>
      </CompanyUiThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CompanyUiNewsSubscriptionSection>;

export const NewsSubscription: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Subscribe to our news letter/gi)).toBeTruthy();
  },
};
