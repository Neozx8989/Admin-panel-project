import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import ProductList from "../../components/productscomponent/ProductsList";

export default function Product ({productData, setProductData}) {
    return (
        <Box sx={{ display: "flex", marginTop: "60px", }}>  
            <Sidebar/>
            <ProductList productData={productData} setProductData={setProductData}/>
        </Box>
    )
}