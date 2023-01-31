import { Box } from "@mui/material";
import ProductTable from "../components/ProductTable";
import Sidebar from "../components/Sidebar";

export default function Product () {
    return (
        <Box sx={{ display: "flex" }}>  
            <Sidebar/>
            <ProductTable/>
        </Box>
    )
}