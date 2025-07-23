import useCounter from "../hooks/useCounter"

export default function CounterExample() {
  const [count, { increment, decrement, reset }] = useCounter(10, {
    step: 5,
    min: 0,
    max: 50
  })

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  )
}