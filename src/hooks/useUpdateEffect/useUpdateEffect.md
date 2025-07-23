# 🔁 useUpdateEffect

A custom hook that acts like `useEffect`, but **skips the effect on initial render**.

## ✅ Why useUpdateEffect?

`useEffect` runs on **first render + updates**. But sometimes, you want it to run **only on updates**, not the first render — that’s where `useUpdateEffect` comes in.

---

## 🧪 Usage (during development dont forget to remove StrictMode to see it working)

```js
import useUpdateEffect from './useUpdateEffect';

useUpdateEffect(() => {
  console.log("This runs only on updates, not on mount.");
}, [someState]);