import { Container, FormControl, TextField, Typography, Button, Snackbar, } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MuiAlert from "@mui/material/Alert"
import * as React from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NewProduct({userProductData, setUserProductData}) {
  const POST_DATA_URL = "http://localhost:8080/products";
  const [ formValue, setFormValue] = useState({name:"", price:"", stock:"", size:"", color:"", category:"", description:""});
  const [open, setOpen] = React.useState(false);

  function handleClose (event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleInput(e){
    const {name, value} = e.target;
    setFormValue({...formValue, [name]:value});
  } 

  async function handleSubmit (e) {
    e.preventDefault();
    setOpen(true);
    const AllInputValue = {
      name: formValue.name,
      price: formValue.price,
      stock: formValue.stock,
      size: formValue.size,
      color: formValue.color,
      category: formValue.category,
      description: formValue.description,
    }

    const res = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AllInputValue),
    }
    const FETCHED_DATA = await fetch(POST_DATA_URL, res);
    const FETCHED_JSON = await FETCHED_DATA.json()
    setUserProductData(FETCHED_JSON.data);
  };

        return (
            <Container sx={{boxShadow:"2px 2px 5px rgba(0, 0, 0, 0.5)", padding:"30px", borderRadius:"7px", width:"700px"}}>
                <h2>Create New Product</h2>
                <br/>
                <form onSubmit={handleSubmit}>
                <Button type="submit" variant={"contained"} color={"primary"} sx={{marginBottom:"20px",}}>UPLOAD AN IMAGE</Button>
                    <br/>
                  <FormControl sx={{ display: "flex", flexDirection: "column", gap: 3, justifyContent: "center", marginBottom: "20px", width:"650px"}}>
                    <Typography sx={{display: "flex", flexDirection: "column", gap: 2,}}>
                        <TextField label={"Name"} name={"name"} type={"text"} fullWidth={true} value={formValue.name} onChange={handleInput}/>
                        <TextField label={"Price"} name={"price"} type={"text"} fullWidth={true} value={formValue.price} onChange={handleInput}/>
                        <TextField label={"Stock"} name={"stock"} type={"number"} fullWidth={true} value={formValue.stock} onChange={handleInput}/>
                        <TextField label={"Size"} name={"size"} type={"text"} fullWidth={true} value={formValue.size} onChange={handleInput}/>
                        <TextField label={"Color"} name={"color"} type={"text"} fullWidth={true} value={formValue.color} onChange={handleInput}/>
                        <TextField label={"Category"} name={"category"} type={"text"} fullWidth={true} value={formValue.category} onChange={handleInput}/>
                        <TextField label={"Description"} name={"description"} type={"text"} fullWidth={true} value={formValue.description} onChange={handleInput}/>
                    </Typography>
                  </FormControl>
            
                  <Typography sx={{ display: "flex", gap: "15px"}}>
                    <Button
                      type="submit" 
                      variant={"contained"} 
                      color={"info"}
                      onClick={handleClose}
                      >Save</Button>
                    <Button variant={"outlined"} color={"primary"}>cancel</Button>
                    <Link to={"/product"}>
                        <Button variant={"contained"} color={"success"}>Back</Button>
                    </Link>
                  </Typography>
                  <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert severity="success" sx={{width: "100%"}}>
                      Амжилттай шинэ хэрэглэгч нэмлээ !
                    </Alert>
                  </Snackbar>
                </form>
            </Container>
          );
}