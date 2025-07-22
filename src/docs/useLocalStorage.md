# 🔁 useLocalStorage

A React hook to sync state with `localStorage`, so values persist across page reloads.

## ✅ Why use it?

- Persists values in the browser
- Syncs React state with `localStorage`
- Automatically JSON-encodes/decodes
- Handles parse/stringify errors safely

---

## 🚀 Usage

```jsx
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [username, setUsername] = useLocalStorage("username", "");

  return (
    <div>
      <h1>Welcome, {username || "Guest"}</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}