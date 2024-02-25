import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import React, { useState } from "react";
import HomeSection from "./HomeSection";

const AddItem = () => {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState();

  const handleItem = (event) => {
    setItem(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const itemData = {
      itemName: data.get("itemName"),
      category: data.get("category"),
      quantity: data.get("quantity"),
      rate: data.get("rate"),
    };
    console.log(itemData);
    alert(itemData);
  };

  return (
    <HomeSection>
      <div className=" p-4 border rounded-lg shadow-lg bg-white">
        <div className=" border rounded-s-md shadow-lg p-2">
          <div className=" ">
            <h3 className=""> Add new Items</h3>
          </div>
          <div className=" px-2 mt-4 pb-3 ">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} className="">
                <Grid item lg={3} xs={6}>
                  <TextField
                    id="itemName"
                    label="Item Name"
                    name="itemName"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={3} xs={6}>
                  <TextField
                    id="category"
                    label="Category"
                    name="category"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={3} xs={6}>
                  <TextField
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={3} xs={6}>
                  <TextField
                    id="rate"
                    name="rate"
                    label="Rate"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <div className=" flex items-end">
                    <Button
                      sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }}
                      size="large"
                      variant="contained"
                      type="submit"
                    >
                      Add Items
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>

        <div className=" border raunded-md shadow-lg p-2 mt-3">
          <div className=" ">
            <h3 className=""> Updates Item</h3>
          </div>
          <div className="px-2 mt-4 pb-3">
            <Grid container spacing={3}>
              <Grid item xs={6} lg={3}>
                <FormControl fullWidth>
                  <InputLabel>Items</InputLabel>
                  <Select
                    id="item"
                    value={item}
                    label="Item"
                    onChange={handleItem}
                  >
                    <MenuItem value={10}>Sand (Balu)</MenuItem>
                    <MenuItem value={20}>Rod</MenuItem>
                    <MenuItem value={30}>Stone (gitti)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} lg={3}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    id="category"
                    value={category}
                    label="Category"
                    onChange={handleCategory}
                  >
                    <MenuItem value={10}>10 MM</MenuItem>
                    <MenuItem value={20}>12 MM</MenuItem>
                    <MenuItem value={30}>16 MM</MenuItem>
                    <MenuItem value={30}>20 MM</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={3} xs={6}>
                <TextField
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={3} xs={6}>
                <TextField
                  id="rate"
                  name="rate"
                  label="Rate"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <div className=" flex items-end">
                  <Button
                    sx={{ mt: 2, bgcolor: "rgb(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Update Items
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default AddItem;
