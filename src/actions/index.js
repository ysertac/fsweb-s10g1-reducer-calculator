export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "Ekrandaki değeri sıfırlar";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_ADD = "Totali memory'ye aktarır";
export const MEMORY_RECALL = "Memory değerini totale aktarır";
export const MEMORY_CLEAR = "Memory'yi sıfırlar";

export const memoryAdd = () => {
  return { type: MEMORY_ADD };
};

export const memoryRecall = () => {
  return { type: MEMORY_RECALL };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (opr) => {
  return {
    type: CHANGE_OPERATION,
    payload: opr,
  };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
