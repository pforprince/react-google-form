import { FormHelperText, MenuItem, TextField } from "@mui/material";
import React, { useEffect } from "react";

const SelectInput = ({ data, onChange }) => {
  var { isTouched, isValid, data: options, label, value } = data;

  options = options
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  useEffect(() => {
    options = options.map((e) => e.trim());
  }, [options]);

  return (
    <div>
      <TextField
        fullWidth
        select
        label={label}
        sx={{ my: 1 }}
        value={value}
        onChange={(e) => onChange(e.target.value, e.target.value != "")}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      {isTouched && !isValid && (
        <FormHelperText error>
          {label} is required and should be valid
        </FormHelperText>
      )}
    </div>
  );
};

export default SelectInput;
