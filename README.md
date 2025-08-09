# 📚 React Hooks Wallet — **SUPER 20**: A React Library

A **personal learning project** where I explored **React's built-in hooks** and **various browser APIs** to understand how things work imperatively, and then re-implemented them in a **more React way** using my own custom hooks.  

This project was designed as a hands-on journey to **reinforce React fundamentals**, learn about **browser capabilities**, and practice **problem-solving techniques** in a way that mirrors industry-level hook development.

---

## 🎯 Project Goals

* **Understanding React's lifecycle deeply** by building hooks from scratch.
* **Learning and integrating browser APIs** such as `Navigator`, `Battery Status`, `Fullscreen API`, `Geolocation`, and more.
* Practicing **imperative approach first**, then **refactor into declarative hooks**.
* Reinforcing **problem-solving patterns** and **React fundamentals** through real implementations.
* Experience what it might be like to **design hooks in an industry-level codebase**.

---

## 🧠 Key Learnings from the Journey

During this project, I:

* **Mastered React's lifecycle** (`mount`, `update`, `unmount`) and how it maps to `useEffect` and other built-in hooks.
* Explored **event listeners, cleanups, and side effects** handling in React.
* Learned **many browser APIs** in-depth:
  * `Navigator` API
  * `Fullscreen API`
  * `Page Visibility API`
  * `Geolocation API`
  * `Battery Status API`
  * Clipboard API
  * Media Queries API
* Improved **problem decomposition skills** by breaking down problems into smaller reusable hooks.
* Got a **taste of real-world hook development** — handling edge cases, cleanup, and cross-browser considerations.
* Realized that there are still **gaps to fill my problem solving skills** and **future hooks to explore**.

---

## ✅ Hooks Implemented in This Library (20)

| Hook Name           | React Built-in Hooks Used               | Description |
|---------------------|------------------------------------------|-------------|
| `useCounter`        | `useState`                               | A simple state counter with increment, decrement, and reset functions. |
| `useCounterReducer` | `useReducer`                             | Counter state management using `useReducer` for more predictable state transitions. |
| `useDebounce`       | `useState`, `useEffect`                  | Delays updating a value until after a specified wait time has passed. |
| `useFetch`          | `useState`, `useEffect`                  | Handles fetching data from an API with loading and error states. |
| `useLocalStorage`   | `useState`, `useEffect`                  | Syncs state with `localStorage` for persistence across reloads. |
| `useMediaQuery`     | `useState`, `useEffect`                  | Tracks whether the document matches a given CSS media query. |
| `usePrevious`       | `useRef`, `useEffect`                    | Stores and retrieves the previous value of a variable. |
| `useScroll`         | `useState`, `useEffect`                  | Tracks the window scroll position (X and Y). |
| `useThrottle`       | `useState`, `useEffect`, `useRef`        | Limits how often a value or callback can be updated. |
| `useToggle`         | `useState`                               | Toggles a boolean state on and off. |
| `useUpdateEffect`   | `useEffect`, `useRef`                    | Like `useEffect` but skips running on the first render. |
| `useGeolocation`    | `useEffect`, `useState`, `useReducer`    | Retrieves and tracks the user's geographic location using the Geolocation API. |
| `useClipboard`      | `useEffect`, `useState`, `useCallback`   | Reads from and writes text to the system clipboard. |
| `useBatteryStatus`  | `useState`, `useEffect`                  | Monitors device battery level and charging status. |
| `useOnlineStatus`   | `useState`, `useEffect`                  | Tracks whether the browser is online or offline. |
| `usePageVisibility` | `useState`, `useEffect`                  | Detects whether the current page is visible or hidden. |
| `useFullscreen`     | `useState`, `useCallback`, `useRef`, `useEffect` | Manages entering and exiting fullscreen mode. |
| `useIdle`           | `useState`, `useEffect`, `useRef`        | Detects when the user has been idle for a specified time. |
| `useTimeout`        | `useRef`, `useEffect`, `useCallback`     | Runs a callback after a specified delay. |
| `useWindowSize`     | `useState`, `useEffect`                  | Tracks the current window width and height. |

---

## 📝 Hooks for Future Learning & Revision

### 🧠 Browser API Integration Hooks

| Hook Name               | Browser API Used                  | React Built-in Hooks Used        | Description |
|-------------------------|------------------------------------|------------------------------------|-------------|
| `useIntersectionObserver` | `IntersectionObserver` API       | `useState`, `useEffect`, `useRef` | Detects when an element enters or leaves the viewport. |
| `useSpeechRecognition`  | `SpeechRecognition` API           | `useState`, `useEffect`, `useRef` | Converts spoken words into text in real time. |

### ⚛️ React-Specific Custom Hooks

| Hook Name           | React Concepts Practiced                | Built-in Hooks Used                | Description |
|---------------------|-----------------------------------------|-------------------------------------|-------------|
| `useEventListener`  | Attaching/removing listeners in React   | `useEffect`, `useRef`               | A generic event listener hook for DOM or window events. |
| `useHover`          | Pointer events abstraction              | `useState`, `useRef`, `useEffect`   | Detects when a user is hovering over an element. |
| `useLongPress`      | Composing events + timeout              | `useRef`, `useEffect`               | Detects a press-and-hold gesture on an element. |
| `useOutsideClick`   | Detecting outside click                 | `useEffect`, `useRef`               | Runs a callback when a click occurs outside a specified element. |
| `useWhyDidYouUpdate`| Debugging re-renders                    | `useEffect`, `useRef`               | Logs why a component re-rendered. |
| `useIsFirstRender`  | Tracking first render                   | `useRef`                            | Returns `true` on first render, `false` afterwards. |
| `useMeasure`        | Measuring elements with ResizeObserver  | `useState`, `useRef`, `useEffect`   | Measures size and position of a DOM element. |
| `useMountedState`   | Safe async state updates                | `useRef`, `useCallback`             | Prevents updating state if a component is unmounted. |
| `useUpdateLogger`   | Logging prop/state changes              | `useEffect`, `useRef`               | Logs changes in props or state to the console. |

### 🔧 Advanced Built-in Hook Integrations

| Custom Hook            | Built-in Hook(s) Used                                 | Description |
|------------------------|-------------------------------------------------------|-------------|
| `useMemoizedFn`        | `useMemo`                                             | Returns a stable function reference that doesn't change across renders. |
| `useEventCallback`     | `useCallback`                                         | Returns a callback whose identity is stable and uses the latest state/props. |
| `useImperativeScroll`  | `useImperativeHandle`, `useRef`, `forwardRef`         | Exposes scroll control methods to a parent component. |
| `useAsyncTransition`   | `useTransition`                                       | Manages deferred updates for smoother UI transitions. |
| `useExternalStoreState`| `useSyncExternalStore`                                | Subscribes to an external store for state updates. |
| `useCssVariable`       | `useInsertionEffect`                                  | Reads and updates CSS custom properties (`--variables`). |
| `useDeferredSearch`    | `useDeferredValue`                                    | Defers updating search results for better performance. |
| `useDebuggableState`   | `useDebugValue`, `useState`                           | Adds a debug label to custom hook state for React DevTools. |
| `useStableId`          | `useId`                                               | Generates a stable, unique ID for use in components. |
| `useLayoutBounds`      | `useLayoutEffect`                                     | Measures DOM layout synchronously after render. |

---

## 📌 How to Use
Clone this repository and import any hook you want from the library.

```bash
git clone https://github.com/your-username/react-hooks-wallet.git