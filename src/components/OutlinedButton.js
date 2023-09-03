import { Button } from "@mui/material";
import React from "react";

const OutlinedButton = ({onClick, disabled, text}) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      sx={{ my: 2 }}
      fullWidth
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default OutlinedButton;
