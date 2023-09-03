import { FormHelperText, TextField } from "@mui/material";
import React from "react";

const TextAreaInput = ({ data, onChange }) => {
  const { isTouched, isValid, label, value } = data;
  return (
    <div>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value, e.target.value != "")}
        type="text"
        label={label}
        sx={{ my: 1 }}
        multiline
        rows={4}
        placeholder={`Enter ${label}`}
      />
      {isTouched && !isValid && (
        <FormHelperText error>{label} is required and should be valid</FormHelperText>
      )}
    </div>
  );
};

export default TextAreaInput;
