// src/pages/_app.tsx
import { ThemeProvider } from 'shadcn-ui/dist';
import theme from '../theme/theme'; // Adjust the path as needed
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../queryClient';
// import other necessary modules

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    );
  }
  
export default MyApp;
