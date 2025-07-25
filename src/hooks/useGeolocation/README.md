# 📍 useGeolocation

A custom React hook that allows components to access and reactively update the user's geographic location using the **Geolocation API**. It returns location coordinates, accuracy, and optionally error information if permissions are denied or unavailable.

This hook is especially useful in apps involving maps, travel, weather, check-ins, or any kind of location-based service.

---

## 🚀 Features

- ✅ Fetches current geographic coordinates (`latitude`, `longitude`, `accuracy`, etc.).
- ✅ Automatically updates when the location changes (watch mode).
- ✅ Handles permission denial and error gracefully.
- ✅ Cleans up watcher on unmount to avoid memory leaks.
- ✅ Option to control watching behavior (watch vs one-time fetch).

---

## 🧠 How It Works

1. The `useGeolocation` hook uses the **browser's `navigator.geolocation` API**.
2. On mount, it checks for API availability and permission status.
3. You can configure whether to **watch the position continuously** or **fetch it once** using an options object.
4. It stores and updates location state with `useState`, and sets up cleanup with `useEffect`.
5. Any errors (like user denial, timeout, or unsupported browser) are captured and returned.

---

## 🧪 Usage
 API 

useGeolocation(options?: {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
  watch?: boolean;
}): {
  coords: {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude?: number | null;
    heading?: number | null;
    speed?: number | null;
  } | null;
  error: GeolocationPositionError | null;
  loading: boolean;
}

```jsx
import useGeolocation from './useGeolocation';

export default function LocationComponent() {
  const { coords, error, loading } = useGeolocation({
    enableHighAccuracy: true,
    watch: true,
    timeout: 10000,
  });

  if (loading) return <p>📡 Fetching location...</p>;
  if (error) return <p>❌ Error: {error.message}</p>;

  return (
    <div>
      <h3>🌍 Your Location:</h3>
      <p>Latitude: {coords.latitude}</p>
      <p>Longitude: {coords.longitude}</p>
      <p>Accuracy: {coords.accuracy} meters</p>
    </div>
  );
}


