# 🔢 useCounterReducer

A custom React hook that encapsulates `useReducer` to manage a simple counter logic with `increment`, `decrement`, and `reset` actions. It uses an internal reducer to provide predictable state transitions and preserves the initial value for reset functionality.

---

## ✅ Why use it?

- Useful when `useState` is not enough and you want more scalable state logic.
- Preserves the **initial value**, making **reset** behavior straightforward.
- Makes your code cleaner by abstracting the reducer logic into a reusable hook.

---

## 📦 Features

- Built using `useReducer`.
- Stores and uses initial value (`init`) for reset operation.
- Returns intuitive methods: `increment`, `decrement`, and `reset`.

---

## 🧠 How it works

- `useReducer` initializes state with both `count` and `init` keys.
- The reducer handles 3 actions:
  - `'increment'` → increases count by 1.
  - `'decrement'` → decreases count by 1.
  - `'reset'` → resets count back to `init`.

---

## ⚙️ Usage

```jsx
import useCounterReducer from '../hooks/useCounterReducer';

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounterReducer(10);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
}