import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ViewsData from "./ViewsData";
import HomeSection from "./HomeSection";
import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  removeAllItems,
  removeItem,
} from "../redux/features/sellSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const SellItem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.storeData);
  const cartItem = useSelector((state) => state.sellItems);
  const [item, setItem] = useState("");
  const [rates, setRates] = useState();
  const [quantity, setquantityValue] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [delTogle, setDelToggle] = useState(false);

  const handleItem = (event) => {
    const selectItem = event.target.value;
    setItem(selectItem);
    let rate = data.find((itm) => itm.itemName === selectItem);
    setRates(rate);
  };
  const setQuantity = (e) => {
    let value = e.target.value;
    setquantityValue(value);
  };
  const bagItems = (e) => {
    // e.preventDefault();
    if (quantity === 0 || quantity === "") {
      alert("Quantity should not be ( 0 ) or Empty");
      return;
    }
    let cart = {
      itemID: rates.itemID,
      itemName: rates.itemName,
      rate: rates.rate,
      quantity: quantity,
      amount: rates.rate * quantity,
    };
    let amount = rates.rate * quantity;
    setAmount(amount);
    dispatch(addItems(cart));
    setquantityValue("");
    setDelToggle(!delTogle);
  };
  const deleteItem = (item) => {
    dispatch(removeItem(item));
    setDelToggle(!delTogle);
  };
  useEffect(() => {
    let amountValue = 0;
    cartItem?.map((item) => (amountValue += item.amount));
    setTotalAmount(amountValue);
  }, [delTogle]);
  console.log("cart Item : ", cartItem);
  const makeBills = () => {
    dispatch(removeAllItems());
    setTotalAmount(0);
  };
  return (
    <HomeSection>
      <div className="   p-1 px-2">
        <div className="border raunded-md shadow-lg p-1 mt-2 px-2 pb-4">
          <div className=" px-5 pb-2">
            <h3 className=""> Select Products</h3>
          </div>
          <div className="px-2 mt-2 pb-1">
            <Grid container spacing={3}>
              <Grid item xs={6} lg={3}>
                <FormControl fullWidth size="small">
                  <InputLabel>Items</InputLabel>
                  <Select
                    id="item"
                    value={item}
                    label="Item"
                    onChange={handleItem}
                  >
                    {/* <MenuItem value="select item">Select an Item</MenuItem> */}
                    {data.map((item) => {
                      return (
                        <MenuItem key={item.itemID} value={item.itemName}>
                          {item.itemName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item lg={3} xs={6}>
                <TextField
                  id="rate"
                  name="rate"
                  label="Rate"
                  variant="outlined"
                  fullWidth
                  size="small"
                  aria-readonly
                  value={rates ? rates.rate : 0}
                  defaultValue={0}
                />
              </Grid>
              <Grid item lg={3} xs={6}>
                <TextField
                  id="quantity"
                  name="quantity"
                  label="Quantity"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={quantity}
                  onChange={setQuantity}
                  required
                />
              </Grid>
              <Grid item lg={3} xs={6}>
                <div className=" flex items-end">
                  <Button
                    sx={{ bgcolor: "rgb(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                    onClick={bagItems}
                  >
                    Add Items
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="border raunded-md shadow-lg p-1 mt-2 px-2 bg-white">
          <h3 className=" px-5 pb-2">your bags</h3>
          <div className="">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Item Name </StyledTableCell>

                    <StyledTableCell align="center">
                      Rate &nbsp;(RS)
                    </StyledTableCell>
                    <StyledTableCell align="center">Quantity </StyledTableCell>
                    <StyledTableCell align="center">
                      Amount &nbsp;(RS)
                    </StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItem.map((row) => (
                    <StyledTableRow
                      key={row.itemID}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.itemName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.rate}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.quantity}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.amount}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <IconButton onClick={() => deleteItem(row)}>
                          <DeleteForeverIcon sx={{ color: "red" }} />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          {cartItem.length > 0 && (
            <div
              className="  py-3"
              style={{
                display: "flex",
                // flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <h5>Total Amount :</h5>
              </div>
              <div>
                <h5>{totalAmount}</h5>
              </div>
              <div>
                <Button onClick={makeBills} variant="contained">
                  Make Bill
                </Button>
              </div>
              {/* <Grid container>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}>
                <h5>Total Amount :</h5>
              </Grid>
              <Grid item xs={3}>
                <h5>66666666</h5>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained">Make Bill</Button>
              </Grid>
            </Grid> */}
            </div>
          )}
        </div>
      </div>
    </HomeSection>
  );
};

export default SellItem;
