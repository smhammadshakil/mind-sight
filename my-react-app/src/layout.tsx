import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import CustomAppBar from './components/CustomAppBar';
import { QueryProvider } from './core/query-provider';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <QueryProvider>
      <Box
        sx={{
          bgcolor: 'var(--mui-palette-background-default)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '100%',
        }}
      >
        <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
          <CustomAppBar />
          <main>
            <Container maxWidth="xl" sx={{ py: '46px' }}>
              {children}
            </Container>
          </main>
        </Box>
      </Box>
    </QueryProvider>
  );
}
