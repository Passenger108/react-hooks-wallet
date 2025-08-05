# 💤 useIdle

A custom React hook that detects **user inactivity (idle state)** after a specified timeout period. It tracks whether the user is currently idle and how long they've been idle in real-time.

Perfect for **auto-logout systems**, **session timeouts**, **autosave triggers**, or any feature where monitoring user inactivity is essential.

---

* API
        useIdle(options?: {
        idleTimeout?: number;  // Timeout in ms to mark user as idle (default: 5000ms)
        }): {
        isIdle: boolean;      // Whether the user is idle
        idleTime: number;     // Time in ms since the user became idle
        }

## 🚀 Features

- ✅ Detects user inactivity based on customizable idle timeout.
- ✅ Tracks real-time idle duration (`idleTime`).
- ✅ Listens to multiple user interaction events.
- ✅ Automatically resets idle state on user activity.
- ✅ Cleans up event listeners and timers on unmount.
- ✅ Safe for SSR (Server-Side Rendering).

---

## 🧠 How It Works

1. On mount, the hook sets up listeners for user interaction events like `mousemove`, `keydown`, `mousedown`, `scroll`, and `touchstart`.
2. If no activity is detected for the specified `idleTimeout` (in ms), it marks the user as **idle**.
3. The hook also tracks how long the user has been idle via `idleTime`, updating every second.
4. On any user interaction, the idle timer resets, marking the user as active again.
5. It safely cleans up event listeners and timers when the component unmounts.

---

## 🧪 Usage Example

```jsx
import useIdle from './useIdle';

export default function IdleExample() {
  const { isIdle, idleTime } = useIdle({ idleTimeout: 10000 }); // 10 seconds idle timeout

  return (
    <div style={{ padding: '2rem', fontSize: '1.2rem' }}>
      <h2>🕒 Idle Detection Demo</h2>
      <p>Status: {isIdle ? '💤 User is Idle' : '🟢 User is Active'}</p>
      <p>Idle Time: {Math.floor(idleTime / 1000)} seconds</p>
      <p>Interact (mouse, scroll, keypress) to reset idle timer.</p>
    </div>
  );
}