import { Box } from "@mui/system";
import CreateNewUser from "../../components/userscomponent/CreateNewUser";
import Sidebar from "../../components/Sidebar";

export default function NewUser ({userData, setUserData}) {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar/>
            <CreateNewUser userData={userData} setUserData={setUserData}/>
        </Box>
    )
}