import { Container } from "@mui/system";
import { Box, Button,  FormControl, Snackbar, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import MuiAlert from "@mui/material/Alert"


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function NewProduct({productData, setProductData}) {
  const POST_DATA_URL = "http://localhost:8080/users";
  const [ formValue, setFormValue] = useState({image:"", title:"", description:"", price:"", size:"", color:"", category:""});
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState("No");

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
      image: formValue.image,
      title: formValue.title,
      description: formValue.description,
      price: formValue.price,
      size: formValue.size,
      color: formValue.color,
      category: formValue.category,
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
    setProductData(FETCHED_JSON.data);
  };

  return (
    <Container maxWidth="sm">
    <Typography variant="h5" color="initial" sx={{ marginBottom: "20px", marginTop: "20px" }}>New product</Typography>
    <form onSubmit={handleSubmit}>
        <FormControl sx={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
            <TextField id="image" label="image" variant="outlined" name={"image"} value={formValue.image} onChange={handleInput}/>
            <TextField id="title" label="Title" variant="outlined" name={"title"} value={formValue.title} onChange={handleInput}/>
            <TextField id="description" label="Description" variant="outlined" name={"description"} value={formValue.description} onChange={handleInput}/>
            <TextField id="price" label="Price" variant="outlined" name={"price"} value={formValue.price} onChange={handleInput}/>
            <TextField id="size" label="Size" variant="outlined" name={"size"} value={formValue.size} onChange={handleInput}/>
            <TextField id="color" label="Color" variant="outlined" name={"color"} value={formValue.color} onChange={handleInput}/>
            <TextField id="category" label="Category" variant="outlined" name={"category"} value={formValue.category} onChange={handleInput}/>

            <Box variant='contained' aria-label="contained button group" sx={{display: "flex", gap:"20px"}}>
                <Button color='success' variant="outlined" sx={{width: "20%"}} type="submit" onClick={handleClose}>Save</Button>
                <Link to={"/product"}><Button color='primary' variant="outlined" sx={{width: "50%"}}> Back </Button></Link>
            </Box>
        </FormControl>

        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success" sx={{width: "100%"}}>
            Амжилттай шинэ бүтээгдэхүүн нэмлээ !
          </Alert>
        </Snackbar>
    </form>

</Container >
  );
}
