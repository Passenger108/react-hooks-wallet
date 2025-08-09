## ⏳ useThrottle

The `useThrottle` hook ensures that a value changes at most once within a specified delay period.  
This is useful when you want to limit how often a state update happens (e.g., limiting API calls while typing, controlling expensive computations during rapid updates).

### **Syntax**
```js
const throttledValue = useThrottle(value, delay);