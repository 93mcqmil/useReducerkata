import { useReducer } from "react";

const ACTION = {
  ADD: "add",
  DECREASE: "decrease",
};

const countReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 };
    case ACTION.DECREASE:
      return { count: state.count - 1 };
  }
};

function Countertwo() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: ACTION.ADD })}>ADD</button>
      <p>{state?.count}</p>
      <button onClick={() => dispatch({ type: ACTION.DECREASE })}>
        DECREASE
      </button>
    </div>
  );
}
export default Countertwo;
