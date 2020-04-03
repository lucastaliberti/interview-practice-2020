// O(n * m2)
// n = number of inputs
// m = length of largest namespace
export function processForm(formValues) {
  const objToReturn = {};

  formValues.forEach(tuple => {
    tupleToObject(tuple, objToReturn);
  });

  return objToReturn;
}

function tupleToObject(tuple, root) {
  const [inputName, inputValue] = tuple;
  const [key, ...rest] = inputName.split(".");

  if (rest.length === 0) {
    if (!root[key]) {
      root[key] = inputValue;
      return root;
    }

    if (Array.isArray(root[key])) {
      root[key].push(inputValue);
      return root;
    }

    root[key] = [root[key], inputValue];
    return root;
  }

  if (!root[key]) {
    root[key] = {};
  }

  const newTuple = [rest.join("."), inputValue];

  root[key] = tupleToObject(newTuple, root[key]);

  return root;
}
