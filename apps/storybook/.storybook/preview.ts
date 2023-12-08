import { Preview } from '@storybook/react';
import '@fontsource/ibm-plex-mono/300.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-serif/300.css';      
import '@fontsource/ibm-plex-serif/400.css';      

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
            order: [
                'Getting Started',
                ['Overview'],
                'Foundation',
                'Company',
                'Rail',
                'Travel',
                '*'],
      },
    },
  },
};

export default preview;