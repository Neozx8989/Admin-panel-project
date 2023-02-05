import { Box } from "@mui/system";
import NewProduct from "../../components/productscomponent/NewProduct";
import Sidebar from "../../components/Sidebar";

export default function CreateProduct ({productData, setProductData}) {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar/>
            <NewProduct  productData={productData} setProductData={setProductData}/>
        </Box>
    )
}