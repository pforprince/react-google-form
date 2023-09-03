const loadTemplates = () => {
  var array = localStorage.getItem("templates");
  array = JSON.parse(array) || [];

  return array;
};

const saveTemplate = (inputs, formName) => {
  if (inputs.length <= 0 || !formName) return;

  var array = localStorage.getItem("templates");
  array = JSON.parse(array) || [];
  array.push({
    inputs: inputs.map((input) => {
      var { type, label, data } = input;
      return {
        type,
        label,
        data,
        value: "",
        isValid: false,
        isTouched: false,
      };
    }),
    time: new Date(),
    name: formName,
  });
  localStorage.setItem("templates", JSON.stringify(array));
};

export { loadTemplates, saveTemplate };
