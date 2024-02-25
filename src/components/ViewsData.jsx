import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HomeSection from "./HomeSection";
import { useSelector } from "react-redux";
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

function createData(name, category, quantity, rate) {
  return { name, category, quantity, rate };
}

// const rows = [
//   createData("Sand (Balu)", "super", "10 tellor", 2500),
//   createData("Rod", "10 MM", "10 tan", 6500),
//   createData("Rod", "12 MM", "15 tan", 7500),
//   createData("Rod", "16 MM", "5 tan", 8500),
//   createData("Rod", "20 MM", "1 tan", 8200),
//   createData("Stone", " Small", "10 tan", 4500),
//   createData("Stone", " medium", "12 tan", 5000),
// ];

const ViewsData = () => {
  const data = useSelector((state) => state.storeData);
  return (
    <HomeSection>
      <div className=" p-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Item Name </StyledTableCell>
                <StyledTableCell align="center">Category</StyledTableCell>
                <StyledTableCell align="center">
                  Rate &nbsp;(RS)
                </StyledTableCell>
                <StyledTableCell align="center">Quantity </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.itemName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.rate}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.quantity}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </HomeSection>
  );
};
export default ViewsData;
