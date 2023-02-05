import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



export default function ProductList ({productData , setProductData}) {

  const URL = "http://localhost:8080/users";

  useEffect(() => {
    fetchAllData();
  }, []);

   async function fetchAllData () {
    const FETCHED_DATA = await fetch("http://localhost:8080/users");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProductData(FETCHED_JSON.products);
    console.log(FETCHED_JSON);
   } 



    const columns = [
        {field: 'id', headerName: ' ID', width: 60 },
        {field: 'image', headerName: ' Image', width: 200 },
        {field: 'name', headerName: ' Name', width: 200 },
        {field: 'description', headerName: ' Description', width: 200 },
        {field: 'price',  headerName: ' Price', width: 120 },
        {field: 'size',  headerName: ' Size', width: 120 },
        {field: 'color',  headerName: ' Color', width: 120 },
        {field: 'category',  headerName: ' Category', width: 130 },
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
            rows={productData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection  style={{ height: '400px', width: '100%'}}/>
      </Typography>
    )

}