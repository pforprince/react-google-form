import { FormHelperText, TextField } from "@mui/material";
import React from "react";

const NumberInput = ({ data, onChange }) => {
  const { isTouched, isValid, label, value } = data;

  return (
    <div>
      <TextField
        value={value}
        onChange={(e) => onChange(e.target.value, e.target.value != null)}
        fullWidth
        type="number"
        sx={{ my: 1 }}
        label={label}
        placeholder={`Enter ${label}`}
      />
      {isTouched && !isValid && (
        <FormHelperText error>{label} is required and should be valid</FormHelperText>
      )}{" "}
    </div>
  );
};

export default NumberInput;
