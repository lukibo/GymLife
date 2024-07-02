import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import { config } from '@/config';
import { Members } from '@/components/dashboard/overview/members';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  const members = Array(5).fill({
    firstName: 'Luuk',
    lastName: 'Romeijn',
    email: 'luukromeijn@gmail.com',
    phone: '0625134021',
    specialties: 'Diabetes'
  });

  return (
    <Grid lg={8} md={12} xs={12}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 5
        }}>
        <Typography variant="h5">
          <strong>Sporters</strong>
        </Typography>
        <Button variant="contained" color="success">
          Sporter toevoegen
        </Button>
      </Box>
      <Members
        members={members}
        sx={{ height: '100%' }}
      />
    </Grid>
  );
}
