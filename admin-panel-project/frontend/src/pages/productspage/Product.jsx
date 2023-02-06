import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import ProductList from "../../components/productscomponent/ProductsList";

export default function Product ({userProductData, setUserProductData}) {
    return (
        <Box sx={{ display: "flex", marginTop: "60px", }}>  
            <Sidebar/>
            <ProductList userData={userProductData} setUserData={setUserProductData}/>
        </Box>
    )
}