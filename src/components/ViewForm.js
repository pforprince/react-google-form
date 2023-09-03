import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ViewForm = ({ inputs }) => {
  return (
    <Paper className="paper" sx={{ p: 2, my: 2 }} elevation={2}>
      <Typography textAlign="center" sx={{ my: 2 }} variant="h5">
        Values:
      </Typography>
      {inputs.map((i, index) => {
        return (
          <Box key={index} sx={{ display: "flex" }}>
            <Typography>{i.label}:</Typography>
            <Typography sx={{ ml: 1 }}>{`${i.value}`}</Typography>
          </Box>
        );
      })}
    </Paper>
  );
};

export default ViewForm;
