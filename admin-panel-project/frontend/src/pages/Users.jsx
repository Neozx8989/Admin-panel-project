import { Box } from "@mui/material";
import * as React from "react";
import Sidebar from "../components/Sidebar";
import UsersTable from "../components/UsersTable";

export default function User({userData, setUserData}) {
  return (
    <Box>
      <Sidebar />
      <UsersTable userData={userData} setUserData={setUserData}/>
    </Box>
  );
}
