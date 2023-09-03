import { TextField } from "@mui/material";
import React from "react";

const FileInput = ({ data, onChange }) => {
  const { isTouched, isValid, label, value } = data;

  return (
    <div>
      <TextField
        sx={{ my: 1 }}
        value={value}
        onChange={(e) => onChange(e.target.value, e.target.value != "")}
        fullWidth
        type="file"
        label={label}
        placeholder={`Enter ${label}`}
      />
      {isTouched && !isValid && (
        <FormHelperText error>
          {label} is required and should be valid
        </FormHelperText>
      )}
    </div>
  );
};

export default FileInput;
