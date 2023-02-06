import { Box } from "@mui/system";
import CreateNewUser from "../../components/userscomponent/CreateNewUser";
import Home from "../../components/Home";

export default function NewUser ({userData, setUserData}) {
    return (
        <Box sx={{ display: "flex" }}>
            <Home/>
            <CreateNewUser userData={userData} setUserData={setUserData}/>
        </Box>
    )
}