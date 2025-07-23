## `useCounter`

A custom hook to manage numeric state with optional bounds and step control.

### 📦 Usage

```js
const [count, { increment, decrement, reset }] = useCounter(
  initialValue = 0,
  { step = 1, min, max }
);