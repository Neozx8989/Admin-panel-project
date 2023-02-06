import { Box } from "@mui/material";
import ProductList from "../../components/productscomponent/ProductsList";
import Home from "../../components/Home";

export default function Product ({userProductData, setUserProductData}) {
    return (
        <Box sx={{ display: "flex", marginTop: "60px", }}>  
            <Home/>
            <ProductList userProductData={userProductData} setUserProductData={setUserProductData}/>
        </Box>
    )
}