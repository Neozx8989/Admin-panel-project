import { Container } from "@mui/system";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NewProduct() {
  return (
    <Container  sx={{boxShadow:"2px 2px 9px rgba(0, 0, 0, 0.5)", padding:"30px", borderRadius:"7px"}}>
        <h3>New product</h3>
        <form>
          <FormControl sx={{ display: "flex", flexDirection: "column", gap: 3, justifyContent: "center", marginBottom: "20px",}}>

            <Typography sx={{display: "flex", gap:"40px", alignItems:"center",}}>
                <label/> Image
                <TextField name={"image"} type={"text"}/>
            </Typography>
            
            <Typography sx={{display: "flex", gap:"40px", alignItems:"center"}}>
                <label/> Title
                <TextField name={"title"} type={"text"}/>
            </Typography> 
            
            <Typography sx={{display: "flex", gap:"40px", alignItems:"center"}}>
                <label/> Subtitle
                <TextField name={"subtitle"} type={"text"}/>
            </Typography> 
            
            <Typography sx={{display: "flex", gap:"40px", alignItems:"center"}}>
                <label/> Price
                <TextField name={"price"} type={"text"}/>
            </Typography> 

            <Typography sx={{display: "flex", gap:"40px", alignItems:"center"}}>
                <label/> Rating
                <TextField name={"rating"} type={"number"}/>
            </Typography>

          </FormControl>

          <Typography sx={{ display: "flex", gap: "10px"}}>
            <Button type="submit" variant={"contained"} color={"success"}>Save</Button>
            <Link to={"/product"}>
                <Button type="back" variant={"contained"} color={"primary"}>Back</Button>
            </Link>
          </Typography>
        </form>
    </Container>
  );
}
