import useGeolocation from './useGeolocation'

function GeolocationExample() {
  const {
    position,
    loading,
    error,
    refreshPosition,
  } = useGeolocation(
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 10000,
    },
    false // set true if you want continuous tracking
  )

  if (loading) return <p>Loading location...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!position) return <p>No position available.</p>

  return (
    <div>
      <h2>Your Coordinates</h2>
      <ul>
        <li><strong>Latitude:</strong> {position.latitude}</li>
        <li><strong>Longitude:</strong> {position.longitude}</li>
        <li><strong>Accuracy:</strong> {position.accuracy} meters</li>
      </ul>
      <button onClick={refreshPosition}>Refresh Location</button>
    </div>
  )
}

export default GeolocationExample;