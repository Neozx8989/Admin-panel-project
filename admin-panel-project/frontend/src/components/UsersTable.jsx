import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';


export default function UsersTable () {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

   async function fetchAllData () {
    const FETCHED_DATA = await fetch("http://localhost:8080/users");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserData(FETCHED_JSON);
    console.log(FETCHED_JSON);
   } 


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
      
       userData.map((userData, index) => (
          <span key={index}> 
            <span>{index + 1} </span>
            <span>{userData.firstname}  </span>
            <span>{userData.lastname} </span>
            <span>{userData.number} </span>
            <span>{userData.email} </span>
          </span>
        ))
     
  
    return (
      <Box style={{width: '1200px', margin: '0 auto', padding: "20px", boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.5)', borderRadius: '7px' }}>     
        <p style={{color: 'gray', fontSize: '24px', marginBottom: '10px'}}>Users</p>
          <Stack spacing={2} direction="row" style={{ marginBottom: '30px', display: 'flex', justifyContent:"space-between"}}>
            <Link to={"newuser"}><Button variant="contained">New</Button></Link>
            <Button variant="contained">ADD FILTER</Button>
          </Stack>

          <DataGrid
          
            columns={columns}
            pageSize={3}
            rowsPerPageOptions={[3]}
            checkboxSelection  style={{ height: '400px', width: '100%'}}/>
      </Box>
    )

}