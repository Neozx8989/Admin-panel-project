import { Box } from "@mui/system";
import NewProduct from "../../components/productscomponent/NewProduct";
import Sidebar from "../../components/Sidebar";

export default function CreateProduct ({userData, setUserData}) {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar/>
            <NewProduct userData={userData} setUserData={setUserData}/>
        </Box>
    )
}