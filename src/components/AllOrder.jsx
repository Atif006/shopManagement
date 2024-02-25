import React from "react";
import HomeSection from "./HomeSection";
import { Grid } from "@mui/material";

const AllOrder = () => {
  return (
    <HomeSection>
      <div className="p-4 border shadow-lg">
        <Grid container>
          <Grid item xs={6}>
            <div className="  ">
              <h2> md irfan </h2>
              <p>tekari gaya </p>
              <p> mob : 98786786</p>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className=" ">
              <h4> Date :17/02/2024</h4>
              <h5>Total : 76788</h5>
            </div>
          </Grid>
        </Grid>
      </div>
    </HomeSection>
  );
};

export default AllOrder;
