import type { Meta } from '@storybook/react';
import { CompanyUiIntroSection } from './company-ui-intro-section';
import { CompanyUiThemeProvider } from './company-ui-theme-provider';
import { CompanyDataNavigationProvider } from '@ipts/company-data-navigation-provider';
import { DrawerStateProvider } from '@ipts/core/ui';

const meta: Meta<typeof CompanyUiIntroSection> = {
  component: CompanyUiIntroSection,
  title: 'Sites/Company/Sections',
  decorators: [
    (Story) => (
      <CompanyUiThemeProvider>
        <CompanyDataNavigationProvider>
          <DrawerStateProvider>
            <Story />
          </DrawerStateProvider>
        </CompanyDataNavigationProvider>
      </CompanyUiThemeProvider>
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

export const Intro = {
  args: {},
};
