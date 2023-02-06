import { Box } from "@mui/system";
import Home from "../../components/Home";
import EditUserList from "../../components/userscomponent/EditUserList";

export default function NewUser () {
    return (
        <Box sx={{ display: "flex" }}>
            <Home/>
            <EditUserList/>
        </Box>
    )
}