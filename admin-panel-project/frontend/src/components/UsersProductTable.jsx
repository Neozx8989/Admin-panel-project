import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



export default function UsersProductTable () {

    const columns = [
        {field: 'id', headerName: ' ID', width: 60 },
        {field: 'image', headerName: ' Image', width: 200 },
        {field: 'title', headerName: ' Title', width: 200 },
        {field: 'subtitle', headerName: ' Subtitle', width: 200 },
        {field: 'price',  headerName: ' Price', width: 120 },
        {field: 'rating',  headerName: ' Rating', width: 130 },
        {
          field: 'actions',  headerName: ' Actions', width: 200,
          renderCell: () => {
            return (
              <Box>
                <Stack direction="row" spacing={3}>
                  <Button variant='contained' color='info'>
                    Edit
                  </Button>
                  <Button variant='contained' color='error'>
                    Delete
                  </Button>
                </Stack>
              </Box>
            )
          }
        },
      ];
      
      const rows = [
        { id: 1, image: 'ЗУРАГ' ,title: 'Air Jordan', subtitle: 'Low 1 Travis scott', price: '$175', },
      ];

    return (
      <Typography style={{width: '1200px', margin: '0 auto', padding: "20px", boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.5)', borderRadius: '7px' }}>     
        <p style={{color: 'gray', fontSize: '24px', marginBottom: '10px'}}>Products</p>
          <Stack spacing={2} direction="row" style={{ marginBottom: '30px', display: 'flex', justifyContent:"space-between"}}>
            <Link to={"newproduct"}><Button variant="contained">CREATE PRODUCT</Button></Link>
          </Stack>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection  style={{ height: '400px', width: '100%'}}/>
      </Typography>
    )

}