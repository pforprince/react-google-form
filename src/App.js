import React, { useEffect, useState } from "react";
import "./App.css";
import { Paper, TextField, MenuItem, Grid, Typography, Box, ButtonGroup, Divider} from "@mui/material";
import { InputOptions } from "./shared/Utils";
import InputHander from "./components/InputHandler";
import ViewForm from "./components/ViewForm";
import { loadTemplates, saveTemplate } from "./shared/templateService";
import ContainedButton from "./components/ContainedButton";
import OutlinedButton from "./components/OutlinedButton";

const App = () => {
  const [newLabel, setNewLabel] = useState("");
  const [newInput, setNewInput] = useState("Input");
  const [inputs, setInputs] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [option, setOption] = useState("");
  const [formName, setFormName] = useState("");
  const [formsArray, setFormsArray] = useState([]);
  const [selectedForm, setSelectedForm] = useState({});

  var loadTemplatesHandler = () => {
    var array = loadTemplates();
    setFormsArray(array);
  };

  useEffect(() => {
    loadTemplatesHandler();
  }, []);

  useEffect(() => {
    setInputs(selectedForm.inputs || []);
  }, [selectedForm]);

  const addInput = () => {
    setInputs((prev) => [
      ...prev,
      {
        type: newInput,
        label: newLabel,
        data: option,
        isTouched: false,
        value: newInput == "Checkbox" ? false : "",
        isValid: newInput == "Checkbox" ? true : false,
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
    setIsSubmitted(true);
    loadTemplatesHandler();
  };

  const handleTemplateSave = () => {
    saveTemplate(inputs, formName);
  };

  return (
    <div className="app">
      <Paper elevation={2} sx={{ p: 2 }} className="paper">
        <Box sx={{ display: "flex" }}>
          <Grid container>
            <Grid item md={6}>
              <Typography textAlign="center" sx={{ my: 2 }} variant="h5">
                Prince Bansal Form Generator
              </Typography>
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                value={selectedForm}
                required
                onChange={(e) => setSelectedForm(e.target.value)}
                select
                label="Load Form"
              >
                {formsArray.map((option, index) => (
                  <MenuItem value={option} key={index}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Typography variant="h4" textAlign={"center"}>
              Form Generator
            </Typography>
            <TextField
              onChange={(e) => setFormName(e.target.value)}
              value={formName}
              required
              sx={{ my: 1 }}
              label="Form Name"
              fullWidth
            />
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
                required
                fullWidth
              />
            )}
            <ButtonGroup fullWidth>
              <ContainedButton
                text={"Add"}
                onClick={addInput}
                disabled={
                  !(newInput && newLabel) ||
                  (["Select", "Radio"].includes(newInput) && !option)
                }
              />
              <OutlinedButton
                disabled={!(inputs?.length > 0 && formName)}
                onClick={() => handleTemplateSave()}
                text="Save Template"
              />
            </ButtonGroup>
          </Grid>
          <Grid item md={6}>
            {inputs?.length > 0 && (
              <Typography variant="h4" textAlign={"center"}>
                User Preview
              </Typography>
            )}
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
                  <OutlinedButton onClick={() => removeInput(index)} text="-" />
                </Grid>
              </Grid>
            ))}
            {inputs.length > 0 && (
              <ContainedButton
                text="Submit"
                onClick={handleSubmit}
                disabled={!inputs.every((v) => v.isValid == true)}
              />
            )}
          </Grid>
        </Grid>
      </Paper>
      {isSubmitted && inputs?.length > 0 && <ViewForm inputs={inputs} />}
    </div>
  );
};

export default App;
