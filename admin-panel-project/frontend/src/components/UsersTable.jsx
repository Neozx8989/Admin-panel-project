import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



export default function UsersTable () {

    const columns = [
        {field: 'firstName', headerName: ' First name', width: 180 },
        {field: 'lastName', headerName: ' Last name', width: 180 },
        {field: 'phonenumber', headerName: ' Phone Number', width: 180 },
        {field: 'email', headerName: ' E-Mail', width: 180 },
        {field: 'role',  headerName: ' Role', width: 100 },
        {field: 'disabled',  headerName: ' Disabled', width: 100 },
        {field: 'avatar',  headerName: ' Avatar', width: 100 },
        {field: 'actions', headerName: ' Actions', width: 100,},
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', phonenumber: '+976 99119911', email: 'JonSnow@gmail.com', role: 'User', disabled: 'Yes' },
        { id: 2, lastName: 'Lannister', firstName: 'Client', phonenumber: '+976 99119911', email: 'Client@gmail.com', role: 'User', disabled: 'Yes'},
        { id: 3, lastName: 'Lannister', firstName: 'Admin', phonenumber: '+976 99119911', email: 'Admin@gmail.com', role: 'Admin', disabled: 'Yes' },
      ];

    return (
      <Box style={{width: '1200px', marginTop: "120px", margin: '0 auto', padding: "20px", boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.5)', borderRadius: '7px' }}>     
        <p style={{color: 'gray', fontSize: '24px', marginBottom: '10px'}}>Users</p>
          <Stack spacing={2} direction="row" style={{ marginBottom: '30px', display: 'flex', justifyContent:"space-between"}}>
            <Link to={"newuser"}><Button variant="contained">New</Button></Link>
            <Button variant="contained">ADD FILTER</Button>
          </Stack>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={3}
            rowsPerPageOptions={[3]}
            checkboxSelection  style={{ height: '400px', width: '100%'}}/>
      </Box>
    )

}