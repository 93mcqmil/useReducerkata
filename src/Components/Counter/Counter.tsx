import { useReducer } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
};

const countReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 };
    case ACTION.REMOVE:
      return { count: state.count - 1 };
    case ACTION.RESET:
      return { count: 0 };
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
      </div>
    </div>
  );
}
export default Counter;
