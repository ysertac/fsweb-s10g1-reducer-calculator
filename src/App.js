import React, { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryAdd,
  memoryClear,
  memoryRecall,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickHandler = (e) => {
    const { value } = e.target;
    const numberValue = Number(value);
    dispatch(applyNumber(numberValue));
  };

  const oprHandler = (e) => {
    const { value } = e.target;
    dispatch(changeOperation(value));
  };

  const clearHandler = () => {
    dispatch(clearDisplay());
  };

  const handleMemory = () => {
    dispatch(memoryAdd());
  };

  const recallHandler = () => {
    dispatch(memoryRecall());
  };

  const memoryClearHandler = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b>
                {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemory} />
              <CalcButton value={"MR"} onClick={recallHandler} />
              <CalcButton value={"MC"} onClick={memoryClearHandler} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={clickHandler} />
              <CalcButton value={2} onClick={clickHandler} />
              <CalcButton value={3} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={clickHandler} />
              <CalcButton value={5} onClick={clickHandler} />
              <CalcButton value={6} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={clickHandler} />
              <CalcButton value={8} onClick={clickHandler} />
              <CalcButton value={9} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={oprHandler} />
              <CalcButton value={"*"} onClick={oprHandler} />
              <CalcButton value={"-"} onClick={oprHandler} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
