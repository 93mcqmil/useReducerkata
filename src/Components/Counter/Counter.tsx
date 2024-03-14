import { useReducer } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
  ADD_10: "add-10",
  REMOVE_10: "remove-10",
  HALF: "half",
};

const countReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 };
    case ACTION.REMOVE:
      return { count: state.count - 1 };
    case ACTION.RESET:
      return { count: 0 };
    case ACTION.ADD_10:
      return { count: state.count + 10 };
    case ACTION.REMOVE_10:
      return { count: state.count - 10 };
    case ACTION.HALF:
      return { count: state.count / 2 };
  }
};

function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className='wrapper'>
      <h1>Counter: useReducer</h1>
      <div className='btn-container'>
        <button onClick={() => dispatch({ type: ACTION.ADD })}>Add</button>
        <p>{state?.count}</p>
        <button onClick={() => dispatch({ type: ACTION.REMOVE })}>
          Remove
        </button>
        <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
        <button onClick={() => dispatch({ type: ACTION.ADD_10 })}>
          Add 10
        </button>
        <button onClick={() => dispatch({ type: ACTION.REMOVE_10 })}>
          Remove 10
        </button>
        <button onClick={() => dispatch({ type: ACTION.HALF })}>Half</button>
      </div>
    </div>
  );
}
export default Counter;
