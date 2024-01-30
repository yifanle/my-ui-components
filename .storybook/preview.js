/** @type { import('@storybook/react').Preview } */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "../src/theme";

import 'story.css'

export const decorators = [(Story) => (
  <ThemeProvider theme={theme}><Story/></ThemeProvider>
)]

export const parameters = {
  options: {
    showRoots: true,
  }
}

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
