import { Box } from "@mui/material";
import * as React from "react";
import Sidebar from "../../components/Sidebar";
import UsersList from "../../components/userscomponent/UsersList";

export default function User({userData, setUserData}) {
  return (
    <Box>
      <Sidebar />
      <UsersList userData={userData} setUserData={setUserData}/>
    </Box>
  );
}
