import {
  decrement,
  increament,
  increamentByValue,
} from "../features/Counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const useCounter = () => {
  const count = useAppSelector((state: any) => state.counter.count);
  const dispatch = useAppDispatch();

  const increase = () => {
    dispatch(increament());
  };
  const decrease = () => {
    dispatch(decrement());
  };
  const increaseBy = (value: number) => {
    dispatch(increamentByValue(value));
  };

  return {
    count,
    increase,
    decrease,
    increaseBy,
  };
};

export default useCounter;
