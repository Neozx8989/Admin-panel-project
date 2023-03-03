import {
  Container,
  FormControl,
  TextField,
  Typography,
  Button,
  Snackbar,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { Link} from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import { useEffect } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreateNewUser({ userData, setUserData }) {
  const POST_DATA_URL = "http://localhost:8080/users";
  const ROLE_URL = "http://localhost:8080/users/roles";

  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    role: "",
    admin: "",
    user: "",
  });
  const [open, setOpen] = React.useState(false);

  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  }

  function handleSelectChange(e) {
    setCurrentRole(e.target.value);
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setOpen(true);
    const AllInputValue = {
      firstname: formValue.firstname,
      lastname: formValue.lastname,
      number: formValue.number,
      email: formValue.email,
      role: formValue.role,
    };

    const res = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AllInputValue),
    };
    const FETCHED_DATA = await fetch(POST_DATA_URL, res);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUserData(FETCHED_JSON.data);
  }

  return (
    <Container
      sx={{
        boxShadow: "2px 2px 9px rgba(0, 0, 0, 0.5)",
        padding: "30px",
        borderRadius: "7px",
        marginTop: "60px",
      }}
    >
      <h2>Add New Users</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            marginBottom: "20px",
          }}
          fullWidth={true}
        >
          <Typography sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label={"First Name"}
              name={"firstname"}
              type={"text"}
              fullWidth={true}
              value={formValue.firstname}
              onChange={handleInput}
            />
            <TextField
              label={"Last Name"}
              name={"lastname"}
              type={"text"}
              fullWidth={true}
              value={formValue.lastname}
              onChange={handleInput}
            />
            <TextField
              label={"Phone Number"}
              name={"number"}
              type={"number"}
              fullWidth={true}
              value={formValue.number}
              onChange={handleInput}
            />
            <TextField
              label={"E-Mail"}
              name={"email"}
              type={"text"}
              fullWidth={true}
              value={formValue.email}
              onChange={handleInput}
            />
          </Typography>
        </FormControl>

        <InputLabel>Roles</InputLabel>
        <Select
          id="role-selector"
          value={currentRole}
          label="Roles"
          onChange={handleSelectChange}
        >
          {roles &&
            roles.map((role, index) => {
              return (
                <MenuItem key={index} value={role.id}>
                  {role.name}
                </MenuItem>
              );
            })}
        </Select>
        <br />
        <br />
        <Button type="submit" variant={"contained"} color={"primary"}>
          UPLOAD AN IMAGE
        </Button>
        <br />
        <TextField
          label={"Password"}
          name={"password"}
          type={"text"}
          fullWidth={true}
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        />

        <Typography sx={{ display: "flex", gap: "15px" }}>
          <Button
            type="submit"
            variant={"contained"}
            color={"info"}
            onClick={handleClose}
          >
            Save
          </Button>
          <Button variant={"outlined"} color={"primary"}>
            Reset
          </Button>
          <Button variant={"outlined"} color={"primary"}>
            cansel
          </Button>
          <Link to={"/user"}>
            <Button variant={"contained"} color={"success"}>
              Back
            </Button>
          </Link>
        </Typography>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Амжилттай шинэ хэрэглэгч нэмлээ !
          </Alert>
        </Snackbar>
      </form>
    </Container>
  );
}
