### 🧭 `useScroll`

A custom hook to track scroll position of either the **window** or a specific **element** via `ref`.

#### 🔧 Usage

```jsx
const scroll = useScroll(); // tracks window
const scroll = useScroll(ref); // tracks ref element

Returns: { x: scrollX, y: scrollY }