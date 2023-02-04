import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";


export default function UsersTable ({userData, setUserData}) {
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  function handleMenu (event) {
    setAnchorEl(event.currentTarget);
  };

  function handleClose () {
    setAnchorEl(null);
  };
  
   async function fetchAllData () {
    const FETCHED_DATA = await fetch("http://localhost:8080/users");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserData(FETCHED_JSON.users);
    console.log(FETCHED_JSON);
   } 


    const columns = [
        {field: 'id', headerName: "ID", width: 200 },
        {field: 'firstname', headerName: ' First name', width: 180 },
        {field: 'lastname', headerName: ' Last name', width: 180 },
        {field: 'number', headerName: ' Phone Number', width: 180 },
        {field: 'email', headerName: ' E-Mail', width: 180 },
        {field: 'role',  headerName: ' Role', width: 100 },
        {field: 'disabled',  headerName: ' Disabled', width: 100 },
        {field: 'avatar',  headerName: ' Avatar', width: 100 },
        {field: 'actions', headerName: ' Actions', width: 100,
        renderCell: () => {
          return (
            <Box>
              <MoreVertIcon arial-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onclick={handleMenu} 
                />
                <Menu id="menu-appbar" 
                  anchorEl={anchorEl} 
                  anchorOrigin={{vertical: "top", horizontal: "right",}}
                  keepMounted 
                  transformOrigin={{vertical: "top", horizontal: "right",}} 
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} >Edit</MenuItem>
                    <MenuItem onClick={handleClose} >Delete</MenuItem>
                  </Menu>
            </Box>
          )
        }
        },
      ];
  
    return (
      <Box style={{width: '1200px', margin: '0 auto', padding: "20px", boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.5)', borderRadius: '7px' }}>     
        <p style={{color: 'gray', fontSize: '24px', marginBottom: '10px'}}>Users</p>
          <Stack spacing={2} direction="row" style={{ marginBottom: '30px', display: 'flex', justifyContent:"space-between"}}>
            <Link to={"newuser"}><Button variant="contained">New</Button></Link>
            <Button variant="contained">ADD FILTER</Button>
          </Stack>

          <DataGrid
            rows={userData}
            columns={columns}
            pageSize={3}
            rowsPerPageOptions={[3]}
            checkboxSelection  style={{ height: '400px', width: '100%'}}/>
      </Box>
    )

}