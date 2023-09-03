import React, { Component, useEffect, useState } from "react";
import "./App.css";
import {
  Button,
  Paper,
  TextField,
  MenuItem,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { InputOptions } from "./shared/Utils";
import InputHander from "./components/InputHandler";

const App = () => {
  const [newLabel, setNewLabel] = useState("");
  const [newInput, setNewInput] = useState("Input");
  const [inputs, setInputs] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [option, setOption] = useState("");

  const addInput = () => {
    setInputs((prev) => [
      ...prev,
      {
        type: newInput,
        label: newLabel,
        data: option,
        isTouched: false,
        value: newInput == "Checkbox" ? false : "",
        isValid: false,
      },
    ]);

    setNewInput("");
    setNewLabel("");
    setOption("");
  };

  const removeInput = (index) => {
    setInputs((prev) => prev.filter((v, i) => i != index));
  };

  const handleSubmit = () => {

    // todo
    // setInputs((input) => input.map((i) => ({ ...i, isTouched: true })));
    setIsSubmitted(true);
  };

  return (
    <div className="app">
      <Paper elevation={2} sx={{ p: 2 }} className="paper">
        <Typography textAlign="center" sx={{ my: 2 }} variant="h5">
          Prince Bansal Form Generator
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Box sx={{ my: 1 }}>
              <TextField
                fullWidth
                value={newInput}
                required
                onChange={(e) => setNewInput(e.target.value)}
                select
                label="Select Input Type"
              >
                {InputOptions.map((option, index) => (
                  <MenuItem value={option} key={index}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ my: 1 }}>
              <TextField
                onChange={(e) => setNewLabel(e.target.value)}
                value={newLabel}
                required
                label="Enter label"
                fullWidth
              />
            </Box>
            {newInput && ["Select", "Radio"].includes(newInput) && (
              <TextField
                onChange={(e) => setOption(e.target.value)}
                value={option}
                label="Values by comma separated"
                sx={{ my: 1 }}
                fullWidth
              />
            )}
            <Button
              onClick={addInput}
              variant="contained"
              sx={{ my: 2 }}
              fullWidth
              disabled={!(newInput && newLabel)}
            >
              Add
            </Button>
          </Grid>
          <Grid item md={6}>
            {inputs.map((input, index) => (
              <Grid
                spacing={3}
                container
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid item md={10}>
                  <InputHander
                    input={input}
                    setValue={setInputs}
                    index={index}
                    key={index}
                  />
                </Grid>
                <Grid item md={2}>
                  <Button
                    onClick={() => removeInput(index)}
                    variant="outlined"
                    color="error"
                  >
                    -
                  </Button>
                </Grid>
              </Grid>
            ))}
            {inputs.length > 0 && (
              <Button
                onClick={handleSubmit}
                sx={{ my: 2 }}
                variant="contained"
                fullWidth
                disabled={!inputs.every((v) => v.isValid == true)}
              >
                Submit
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
      {isSubmitted && (
        <Paper className="paper" sx={{ p: 2, my: 2 }} elevation={2}>
          <Typography textAlign="center" sx={{ my: 2 }} variant="h5">
            Values:
          </Typography>
          {inputs.map((i, index) => {
            return (
              <Box key={index} sx={{ display: "flex" }}>
                <Typography>{i.label}:</Typography>
                <Typography sx={{ ml: 1 }}>{`${i.value}`}</Typography>
              </Box>
            );
          })}
        </Paper>
      )}
    </div>
  );
};

export default App;
