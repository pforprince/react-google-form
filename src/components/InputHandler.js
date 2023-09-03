import React, { useEffect } from "react";
import EmailInput from "./EmailInput";
import NumberInput from "./NumberInput";
import RadioInput from "./RadioInput";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import CheckInput from "./CheckInput";

const InputHander = ({ setValue, index, input }) => {
  const setValueHandler = (val, valid = true) => {
    setValue((prev) => {
      return prev.map((p, ind) =>
        ind == index ? { ...p, value: val, isValid: valid, isTouched: true } : p
      );
    });
  };

  switch (input.type) {
    case "Email":
      return <EmailInput data={input} onChange={setValueHandler} />;
    case "Select":
      return <SelectInput data={input} onChange={setValueHandler} />;
    case "Number":
      return <NumberInput data={input} onChange={setValueHandler} />;
    case "Radio":
      return <RadioInput data={input} onChange={setValueHandler} />;
    case "TextArea":
      return <TextAreaInput data={input} onChange={setValueHandler} />;
    case "Checkbox":
      return <CheckInput data={input} onChange={setValueHandler} />;
    default:
      return <TextInput data={input} onChange={setValueHandler} />;
  }
};

export default InputHander;
