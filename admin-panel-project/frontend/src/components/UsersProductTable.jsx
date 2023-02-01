import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box , useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tokens } from "../theme/theme.js";



export default function UsersProductTable () {
  const URL = "http://localhost:8080/products"
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetchAllData();
  }, [])
  
  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProduct(FETCHED_JSON.data)
  }

  async function handleDelete(productId) {
    console.log("delete", productId);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProduct(FETCHED_JSON.data);
  }

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
    const columns = [
        {field: 'id', headerName: ' ID', width: 60 },
        {field: 'image', headerName: ' Image', width: 200 },
        {field: 'title', headerName: ' Title', width: 200 },
        {field: 'subtitle', headerName: ' Subtitle', width: 200 },
        {field: 'price',  headerName: ' Price', width: 120 },
        {field: 'rating',  headerName: ' Rating', width: 130 },
        {
          field: 'actions',  headerName: ' Actions', width: 200,
          renderCell: (params) => {
            return (
              <Box
              m="40px 0 0 0"
              height="50vh"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[400]} !important`,
                },
              }}
            >
              <DataGrid
                rows={product}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              // checkboxSelection
              />
            </Box>
            )
          }
        },
      ];
   

    return (
      <Box style={{width: '1200px', marginTop: "120px", margin: '0 auto', padding: "20px", boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.5)', borderRadius: '7px' }}>     
        <p style={{color: 'gray', fontSize: '24px', marginBottom: '10px'}}>Products</p>
          <Stack spacing={2} direction="row" style={{ marginBottom: '30px', display: 'flex', justifyContent:"space-between"}}>
            <Link to={"newproduct"}><Button variant="contained">CREATE PRODUCT</Button></Link>
          </Stack>

          <DataGrid
            rows={product}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection  style={{ height: '400px', width: '100%'}}/>
      </Box>
    )

}