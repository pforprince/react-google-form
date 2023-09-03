import {
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const RadioInput = ({ onChange, data }) => {
  var { isValid, isTouched, label, value, data: options } = data;

  options = options
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <Box sx={{ display: "flex" }}>
          {options.map((option, index) => (
            <FormControlLabel
              value={option}
              key={index}
              control={<Radio />}
              label={option}
            />
          ))}
        </Box>
      </RadioGroup>
      {isTouched && !isValid && (
        <FormHelperText error>
          {label} is required and should be valid
        </FormHelperText>
      )}
    </div>
  );
};

export default RadioInput;
