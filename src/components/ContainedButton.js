import { Button } from "@mui/material";
import React from "react";

const ContainedButton = ({onClick, disabled, text}) => {
  return (
    <Button
      onClick={() => onClick()}
      variant="contained"
      sx={{ my: 2 }}
      fullWidth
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default ContainedButton;
