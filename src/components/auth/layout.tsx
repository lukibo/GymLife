import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';

import { paths } from '@/paths';
import { DynamicLogo } from '@/components/core/logo';
import Typography from "@mui/material/Typography";

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'grid' },
        flexDirection: { xs: 'column', lg: 'row' },
        gridTemplateColumns: { lg: '1fr 2fr' },
        minHeight: '100%',
        backgroundColor: 'rgba(228, 228, 228, 1)'
      }}
    >
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
        <Box sx={{ p: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-flex', fontSize: 0 }}>
            <DynamicLogo colorDark="light" colorLight="dark" height={180} width={180} />
          </Box>
          <Typography variant="h2" sx={{ mt: 2 }}><strong>Gym Life</strong></Typography>
        </Box>
        <Box sx={{ display: 'flex', flex: '1 1 auto', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '450px', width: '100%' }}>{children}</Box>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="img"
          alt="Gym"
          src="/assets/gym.webp"
          sx={{ height: 'auto', width: '100%', maxHeight: '100%' }}
        />
      </Box>
    </Box>
  );
}
