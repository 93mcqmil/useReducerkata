import { useReducer } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
};

const countReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 };
  }
};

function Counter() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <>
      <input type='text' value={state.count} onChange={handleChange} />
      <button onClick={() => dispatch({ type: ACTION.ADD })}>Add</button>
      <button>Remove</button>
    </>
  );
}
export default Counter;
