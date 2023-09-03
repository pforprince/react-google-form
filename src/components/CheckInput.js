import { Checkbox, FormHelperText } from "@mui/material";
import React from "react";

const CheckInput = ({ data, onChange }) => {
  const { isTouched, isValid, label, value } = data;

  return (
    <div>
      <Checkbox
        checked={value}
        onChange={(e) => onChange(!value)}
        color="primary"
        inputProps={{ "aria-label": "Checkbox" }}
      />
      {label}

      {isTouched && !isValid && (
        <FormHelperText error>{label} is required and should be valid</FormHelperText>
      )}
    </div>
  );
};

export default CheckInput;
