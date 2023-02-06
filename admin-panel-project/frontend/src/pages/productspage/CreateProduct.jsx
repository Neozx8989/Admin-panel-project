import { Box } from "@mui/system";
import Home from "../../components/Home";
import NewProduct from "../../components/productscomponent/NewProduct";

export default function CreateProduct ({userProductData, setUserProductData}) {
    return (
        <Box sx={{ display: "flex" }}>
            <Home/>
            <NewProduct userProductData={userProductData} setUserProductData={setUserProductData}/>
        </Box>
    )
}