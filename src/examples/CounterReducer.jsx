import useCounterReducer from "../hooks/useCounterReducer";

export default function CounterReducer() {
  const { count, increment, decrement, reset } = useCounterReducer();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}