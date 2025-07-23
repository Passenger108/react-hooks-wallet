# 🔁 `useToggle`

A custom React hook to easily toggle between two values — useful for boolean flags, themes, or any two states.

---

## ✨ Features

- ✅ Toggle between `true` and `false` (default)
- ✅ Toggle between **any two values** (e.g., `'light'`/`'dark'`)
- ✅ Simple and reusable abstraction over `useState` and `useCallback`

---

## 🔧 Usage
- const [value, toggle] = useToggle(initialValue?, reverseValue?)


### Import
```js
import useToggle from '../hooks/useToggle'