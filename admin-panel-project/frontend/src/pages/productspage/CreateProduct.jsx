import { Box } from "@mui/system";
import NewProduct from "../../components/productscomponent/NewProduct";
import Sidebar from "../../components/Sidebar";

export default function CreateProduct ({userProductData, setUserProductData}) {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar/>
            <NewProduct userData={userProductData} setUserData={setUserProductData}/>
        </Box>
    )
}