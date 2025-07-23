## 📦 useDebounce

The `useDebounce` hook delays updating a value until after a specified delay of inactivity. It is useful when you want to avoid triggering expensive operations (like API calls or filtering logic) every time the user types, scrolls, or performs a frequent action.

---

### 🧠 Purpose

Debouncing is especially useful for:
- Search input fields
- Auto-saving
- Scroll or resize event handling
- Preventing rapid API calls

---

### 🛠️ Usage

```js
const debouncedValue = useDebounce(value, delay);