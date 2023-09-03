import { FormHelperText, TextField } from "@mui/material";
import React from "react";

const EmailInput = ({ data, onChange }) => {
  const { isValid, label, value, isTouched } = data;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div>
      <TextField
        fullWidth
        value={value}
        onChange={(e) =>
          onChange(e.target.value, emailPattern.test(e.target.value))
        }
        sx={{ my: 1 }}
        type="email"
        label={label}
        placeholder={`Enter ${label}`}
      />
      {isTouched && !isValid && (
        <FormHelperText error>{label} is required and should be valid</FormHelperText>
      )}
    </div>
  );
};

export default EmailInput;
