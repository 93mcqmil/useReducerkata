import { useReducer } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
  ADD_10: "add-10",
  REMOVE_10: "remove-10",
  HALF: "half",
  DOUBLE: "double",
};

type State = { count: number };
type Action = { type: string; payload?: number };

const countReducer = (state: State, { type, payload = 0 }: Action): State => {
  switch (type) {
    case ACTION.ADD:
      return { count: state.count + payload };
    case ACTION.REMOVE:
      return { count: state.count - payload };
    case ACTION.RESET:
      return { count: 0 };
    case ACTION.ADD_10:
      return { count: state.count + 10 };
    case ACTION.REMOVE_10:
      return { count: state.count - 10 };
    case ACTION.HALF:
      return { count: Math.round(state.count) / 2 };
    case ACTION.DOUBLE:
      return { count: state.count * 2 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className='wrapper'>
      <h1>Counter: useReducer</h1>
      <div className='btn-container'>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: ACTION.ADD, payload: 1 })}>
          Add
        </button>
        <button onClick={() => dispatch({ type: ACTION.REMOVE, payload: 1 })}>
          Remove
        </button>
        <button onClick={() => dispatch({ type: ACTION.RESET, payload: 0 })}>
          Reset
        </button>
        <button onClick={() => dispatch({ type: ACTION.ADD, payload: 10 })}>
          Add 10
        </button>
        <button onClick={() => dispatch({ type: ACTION.REMOVE, payload: 10 })}>
          Remove 10
        </button>
        <button onClick={() => dispatch({ type: ACTION.HALF })}>Half</button>
        <button onClick={() => dispatch({ type: ACTION.DOUBLE })}>
          DOUBLE UP
        </button>
      </div>
      {/*Blev inte färdig med inputfältet där jag ska kunna klicka på add och siffran visas i counter */}
      <div className='input-type'>
        <input type='number' />
        <button>Add</button>
      </div>
    </div>
  );
}
export default Counter;
