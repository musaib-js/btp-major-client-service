import React from 'react';
import './App.css';
import Routes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/Index';

function App() {

  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}> <Routes /></QueryClientProvider>
    </ThemeProvider> 
  )
}

export default App;
