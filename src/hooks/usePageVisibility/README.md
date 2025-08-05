# 🕵️‍♂️ usePageVisibility

A custom React hook that tracks the **visibility state of the browser tab or window**. It tells you if the page is currently visible to the user or hidden (e.g., switched tab, minimized).

Perfect for pausing animations, stopping API calls, or adjusting app behavior when the user is not actively viewing the page.

        usePageVisibility(): {
        isVisible: boolean;              // Is the page currently visible?
        visibilityStatus: VisibilityState;  // Exact string status: 'visible', 'hidden', 'prerender', etc.
        error: Error | null;              // Error if API unsupported.
        }


---

## 🚀 Features

- ✅ Detects if the page is currently visible or hidden.
- ✅ Provides the exact `visibilityState` (e.g., `visible`, `hidden`, `prerender`, etc.).
- ✅ Auto-updates in real-time when tab/window visibility changes.
- ✅ Handles SSR environments safely.
- ✅ Cleans up listeners on component unmount.

---

## 🧠 How It Works

1. Uses the **Document Visibility API** (`document.visibilityState` & `document.hidden`).
2. On mount, sets up an event listener for the `visibilitychange` event.
3. Updates internal React state whenever the visibility changes.
4. Exposes `isVisible` (boolean), `visibilityStatus` (exact string state), and optional `error` if unsupported.

---

## 🧪 Usage Example

```jsx
import usePageVisibility from './usePageVisibility';

export default function App() {
  const { isVisible, visibilityStatus, error } = usePageVisibility();

  if (error) return <p>❌ Error: {error.message}</p>;

  return (
    <div style={{ padding: '2rem', fontSize: '1.2rem' }}>
      <h2>👀 Page Visibility Status</h2>
      <p>Status: <strong>{visibilityStatus}</strong></p>
      <p>{isVisible ? '✅ Page is Visible!' : '🚫 Page is Hidden!'}</p>
    </div>
  );
}