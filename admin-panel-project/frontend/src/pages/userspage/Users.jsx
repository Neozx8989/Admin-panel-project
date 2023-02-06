import { Box } from "@mui/material";
import * as React from "react";
import Home from "../../components/Home";
import UsersList from "../../components/userscomponent/UsersList";

export default function User({userData, setUserData}) {
  return (
    <Box>
      <Home/>
      <UsersList userData={userData} setUserData={setUserData}/>
    </Box>
  );
}
