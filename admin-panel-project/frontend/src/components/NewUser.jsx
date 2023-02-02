import { Container, FormControl, TextField, Typography, Button, FormControlLabel, Radio, Checkbox } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewUser() {
  const POST_DATA_URL = "http://localhost:8080/users";

  const [ formValue, setFormValue] = useState({firstname:"", lastname:"", number:"", email:""})

  function handleInput(e){
    const {name, value} = e.target;
    setFormValue({...formValue, [name]:value});
  } 

  async function handleSubmit (e) {
    e.preventDefault();
    const AllInputValue = {
      firstname: formValue.firstname,
      lastname: formValue.lastname,
      number: formValue.number,
      email: formValue.email,
    }

    const res = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AllInputValue),
    }
    const FETCHED_DATA = await fetch(POST_DATA_URL, res);
    console.log(FETCHED_DATA);
    e(FETCHED_DATA);
  };

        return (
            <Container sx={{boxShadow:"2px 2px 9px rgba(0, 0, 0, 0.5)", padding:"30px", borderRadius:"7px", marginTop:"60px"}}>
                <h2>Add New Users</h2>
                <br/>
                <form onSubmit={handleSubmit}>
                  <FormControl sx={{ display: "flex", flexDirection: "column", gap: 3, justifyContent: "center", marginBottom: "20px"}} fullWidth={true}>
                    <Typography sx={{display: "flex", flexDirection: "column", gap: 2,}}>
                        <TextField label={"First Name"} name={"firstname"} type={"text"} fullWidth={true} value={formValue.firstname} onChange={handleInput}/>
                        <TextField label={"Last Name"} name={"lastname"} type={"text"} fullWidth={true} value={formValue.lastname} onChange={handleInput}/>
                        <TextField label={"Phone Number"} name={"number"} type={"number"} fullWidth={true} value={formValue.number} onChange={handleInput}/>
                        <TextField label={"E-Mail"} name={"email"} type={"text"} fullWidth={true} value={formValue.email} onChange={handleInput}/>
                    </Typography>
                  </FormControl>

                    <p>Role</p>
                    <FormControlLabel value="admin" control={<Radio />} label="admin"/>
                    <FormControlLabel value="user" control={<Radio />} label="user" />
                    <br/>
                    <p>Disabled</p>
                    <FormControlLabel control={<Checkbox />}/>
                    <br/>
                    <p>Avatar</p>
                    <Button type="submit" variant={"contained"} color={"primary"}>UPLOAD AN IMAGE</Button>
                    <br/>
                    <TextField label={"Password"} name={"password"} type={"text"} fullWidth={true} sx={{marginTop:"20px", marginBottom:"20px",}}/>

                  <Typography sx={{ display: "flex", gap: "15px"}}>
                    <Button type="submit" variant={"contained"} color={"info"}>Save</Button>
                    <Button type="back" variant={"outlined"} color={"primary"}>Reset</Button>
                    <Button type="back" variant={"outlined"} color={"primary"}>cansel</Button>
                    <Link to={"/user"}>
                        <Button type="back" variant={"contained"} color={"success"}>Back</Button>
                    </Link>
                  </Typography>
                </form>
            </Container>
          );
}