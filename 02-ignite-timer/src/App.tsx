import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

import { CyclesContextProvider } from './contexts/CyclesContext';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
