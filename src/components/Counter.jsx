import { produce } from "immer";
import { useReducer } from "react";
import Panel from "./Panel";
import Button from "./Button";

const RESET_COUNT = "reset-count";
const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const ADD_VALUE_TO_COUNT = "add-value-to-count";
const SET_VALUE_TO_ADD = "set-value-to-add";

const reducer = (state, action) => {
  switch (action.type) {
    case RESET_COUNT:
      state.count = 0;
      return;
    case INCREMENT_COUNT:
      state.count++;
      return;

    case DECREMENT_COUNT:
      if (state.count === 0) {
        break;
      }
      state.count--;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count += state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    default:
      break;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: 0,
    valueToAdd: 0,
  });
  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };
  const reset = () => {
    dispatch({ type: RESET_COUNT });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  return (
    <Panel>
      <h3 className="font-bold text-lg text-gray-700 mb-4 ">
        Counter made with 'useReducer' Hook
      </h3>
      <div className="flex flex-col gap-2">
        Count = {state.count}
        <div className="flex row gap-2">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-y-1"
        >
          <label>Add Value : </label>
          <input
            onChange={handleChange}
            value={state.valueToAdd || ""}
            type="number"
            className="border border-gray-300 rounded px-2 py-1"
          />
          <Button primary>Add</Button>
        </form>
      </div>
    </Panel>
  );
};

export default Counter;
