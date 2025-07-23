# 📱 useMediaQuery

A custom React hook that allows components to respond to CSS media query changes. It returns a boolean indicating whether the given media query currently matches the user's device/screen configuration.

This is particularly useful for responsive UI behavior, like rendering different components based on screen size (e.g., mobile vs desktop).

---

## 🚀 Features

- ✅ Supports dynamic media queries.
- ✅ Works in client-side only — safe against server-side rendering (SSR).
- ✅ Automatically cleans up listeners on unmount or query change.
- ✅ Real-time updates when screen state changes (resizing, device rotation).

---

## 🧠 How It Works

1. The `useMediaQuery` hook takes a media query string (e.g., `"(max-width: 768px)"`).
2. On mount or query change, it creates a `MediaQueryList` object via `window.matchMedia`.
3. It reads the initial `.matches` value and sets up an event listener to track any changes to the match status.
4. The listener updates internal state using `setMatches`, triggering a re-render when needed.
5. It safely avoids SSR pitfalls by checking `typeof window === 'undefined'`.

---

## 🧪 Usage

```jsx
import useMediaQuery from './useMediaQuery';

export default function Component() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      {isMobile ? (
        <p>📱 You are on a mobile screen!</p>
      ) : (
        <p>🖥️ You are on a desktop screen!</p>
      )}
    </div>
  );
}