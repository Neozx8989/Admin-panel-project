import { Box } from "@mui/system";
import NewProduct from "../../components/productscomponent/NewProduct";
import Sidebar from "../../components/Sidebar";

export default function CreateProduct () {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar/>
            <NewProduct/>
        </Box>
    )
}