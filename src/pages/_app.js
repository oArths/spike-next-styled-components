import { ThemeProvider } from 'styled-components';
import { theme } from '../app/theme.jsx';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
