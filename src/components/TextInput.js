import { FormHelperText, TextField } from "@mui/material";
import React from "react";

const TextInput = ({ data, onChange }) => {
  const { isTouched, isValid, label, value } = data;

  return (
    <div>
      <TextField
        sx={{ my: 1 }}
        value={value}
        onChange={(e) => onChange(e.target.value, e.target.value != "")}
        fullWidth
        type="text"
        label={label}
        placeholder={`Enter ${label}`}
      />
      {isTouched && !isValid && (
        <FormHelperText error>{label} is required and should be valid</FormHelperText>
      )}
    </div>
  );
};

export default TextInput;
