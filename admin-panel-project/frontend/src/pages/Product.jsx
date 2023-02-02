import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import UsersProductTable from "../components/UsersProductTable";

export default function Product () {
    return (
        <Box sx={{ display: "flex", marginTop: "60px", }}>  
            <Sidebar/>
            <UsersProductTable/>
        </Box>
    )
}