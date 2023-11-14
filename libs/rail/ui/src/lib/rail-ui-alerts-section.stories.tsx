import type { Meta } from '@storybook/react';
import { RailUiAlertsSection } from './rail-ui-alerts-section';

import { RailUiThemeProvider } from '@ipts/rail-ui';
import { RailDataAlertProvider } from '@ipts/rail-data-alert-provider';

const meta: Meta<typeof RailUiAlertsSection> = {
  component: RailUiAlertsSection,
  title: 'Sites/Rail/Sections',
  decorators: [
    (Story) => (
      <RailUiThemeProvider>
        <RailDataAlertProvider>
          <Story />
        </RailDataAlertProvider>
      </RailUiThemeProvider>
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

export const Alerts = {
  args: {},
};
