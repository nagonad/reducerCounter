import { ChangeEvent, ReactNode, useReducer } from "react";

const initState = { count: 0, text: "" };

const REDUCER_ACTION_TYPE = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  NEW_INPUT: "NEW_INPUT",
};

type ReducerAction = {
  type: string;
  payload?: string;
};

const reduce = (state: typeof initState, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("You didnt provide any of the values in REDUCER_ACTION");
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reduce, initState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });

  return (
    <div>
      <h1>{children(state.count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={handleInputChange} />
      <h1>{state.text}</h1>
    </div>
  );
};

export default Counter;
