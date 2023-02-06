import * as React from 'react';
import { DataGrid, GridSearchIcon } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box} from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined"
import { deleteProduct } from '../../services/ProductServices';



export default function ProductList({userProductData, setUserProductData}) {
  const URL = "http://localhost:8080/products";

  useEffect(() => {
    fetchAllData();
  }, []);

   async function fetchAllData () {
    const FETCHED_DATA = await fetch("http://localhost:8080/products");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserProductData(FETCHED_JSON.products);
    console.log(FETCHED_JSON);
   } 

   async function handleDelete(productId) {
    deleteProduct(productId, setUserProductData, URL)
   }


    const columns = [
        {field: 'id', headerName: "ID", width: 200 },
        {field: 'image', headerName: ' Image', width: 180 },
        {field: 'name', headerName: ' Name', width: 180 },
        {field: 'price', headerName: ' Price', width: 180 },
        {field: 'stock', headerName: ' Stock', width: 180 },
        {field: 'size',  headerName: ' Size', width: 100 },
        {field: 'color',  headerName: ' Color', width: 100 },
        {field: 'category',  headerName: ' Category', width: 100 },
        {field: 'description',  headerName: ' Description', width: 100 },
        {field: 'actions', headerName: ' Actions', width: 150,
        renderCell: (params) => {
          return (
            <Box>
             <Link to={`/edituser/${params.row.id}`} state={{userProduct: userProductData.filter((u) => u.id === params.row.id) }}>
              <Button color="info" variant='outlined'>
                <AutoFixHighOutlinedIcon/>
              </Button>
             </Link>{" "}
             <Button onClick={() => handleDelete(params.row.id)} color="error" variant="contained">
                <DeleteOutlineIcon/>
             </Button>
            </Box>
          )
        }
        },
      ];
    return (
    <Box style={{width: '1200px', margin: '0 auto', padding: "20px", borderRadius: '7px', }}>
        <p style={{color: 'gray', fontSize: '24px', marginBottom: '10px'}}>Product List</p>
          <Stack spacing={2} direction="row" style={{ marginBottom: '30px', display: 'flex', justifyContent:"space-between"}}>
            <Link to={"newproduct"}><Button variant="contained"> create product</Button></Link>
           
          </Stack>

          <DataGrid
            rows={userProductData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection  style={{ height: '400px', width: '100%'}}/>
      </Box>
    )

}