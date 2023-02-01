import React, { useState, useEffect } from 'react'
import { Button, Box, Grid, TextField, InputLabel, MenuItem, FormControl, Select } from "@mui/material";


const NewProduct = () => {
    const URL = "http://localhost:8080/products"
    const newProduct = {
        title: "",
        subTitle: "",
        price: "",
        description: "",
        color: "",
    };

    const [color, setColor] = React.useState('');
    const [product, setProduct] = useState([])
    const [currentProduct, setCurrentProduct] = useState(newProduct)

    useEffect(() => {
        fetchAllData();
    }, [])

    async function fetchAllData() {
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setProduct(FETCHED_JSON.data)
    }


    async function handleSubmit(e) {
        e.preventDefault();
        const postData = {
            title: e.target.title.value,
            subTitle: e.target.subTitle.value,
            price: e.target.price.value,
            description: e.target.description.value,
            color: e.target.color.value,
        }
        console.log("data", postData);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }

        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setProduct(FETCHED_JSON.data);
        // setCurrentProduct(newProduct);

    }
    const handleChange = (event) => {
        setColor(event.target.value);
    };
    return (
        <Box m="20px" sx={{ width: 550 }}>
            <div>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField name='title' placeholder="Enter Title" id="filled-basic" label="Title" variant="filled" color="secondary" required fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name='subTitle' placeholder="Enter Sub Title" id="filled-basic" label="Subtitle" variant="filled" color="secondary" required fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name='price' placeholder="Enter Price" id="filled-number" label="Price" type="number" InputLabelProps={{ shrink: true, }} variant="filled" color="secondary" required fullWidth />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField placeholder="Enter Discount" id="filled-number" label="Discount" type="number" InputLabelProps={{ shrink: true, }} variant="filled" color="secondary" required fullWidth />
                        </Grid> */}
                        <Grid item xs={12}>
                            <TextField name='description' placeholder="Enter Description" id="filled-basic" label="Description" variant="filled" color="secondary" required fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-autowidth-label" color="secondary">Color</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={color}
                                    onChange={handleChange}
                                    label="Color"
                                    variant="filled"
                                    color="secondary"
                                    required
                                    name='color'
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"White"}>White</MenuItem>
                                    <MenuItem value={"Black"}>Black</MenuItem>
                                    <MenuItem value={"Red"}>Red</MenuItem>
                                    <MenuItem value={"Blue"}>Blue</MenuItem>
                                    <MenuItem value={"Yellow"}>Yellow</MenuItem>
                                    <MenuItem value={"Orange"}>Orange</MenuItem>
                                    <MenuItem value={"Green"}>Green</MenuItem>
                                    <MenuItem value={"Pink"}>Pink</MenuItem>
                                    <MenuItem value={"Purple"}>Purple</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <TextField placeholder="Enter Rating" id="filled-number" label="Rating" type="number" InputLabelProps={{ shrink: true, }} variant="filled" color="secondary" required fullWidth />
                        </Grid> */}
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="success" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Box >
    )
}
export default NewProduct

