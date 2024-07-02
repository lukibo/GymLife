import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export interface Member {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialties: string;
}

export interface MembersProps {
  members?: Member[];
  sx?: SxProps;
}

export function Members({ members = [], sx }: MembersProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Alle sporters" sx={{ mb: 1 }}/>
      <Divider />
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell sortDirection="desc"><strong>Voornaam</strong></TableCell>
              <TableCell><strong>Achternaam</strong></TableCell>
              <TableCell><strong>E-mail</strong></TableCell>
              <TableCell><strong>Telefoon</strong></TableCell>
              <TableCell><strong>Bijzondere omstandigheden</strong></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => {

              return (
                <TableRow hover key={member.firstName}>
                  <TableCell><strong>{member.firstName}</strong></TableCell>
                  <TableCell><strong>{member.lastName}</strong></TableCell>
                  <TableCell><strong>{member.email}</strong></TableCell>
                  <TableCell><strong>{member.phone}</strong></TableCell>
                  <TableCell><strong>{member.specialties}</strong></TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      component={Link}
                      color={"secondary"}
                    >
                      Wijzig
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}
