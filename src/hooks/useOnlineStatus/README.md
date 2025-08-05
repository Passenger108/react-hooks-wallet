### useOnlineStatus

A custom React hook to track the user’s online/offline connectivity status in real-time using the Navigator Online/Offline Events API.

This hook listens to browser events and updates the component whenever the user’s internet connection status changes.

* Note: it does not guarantee internet access, but it ensures the browser is connected to a network.

## Features
	•	Detects initial online/offline state.
	•	Subscribes to real-time online/offline events.
	•	Works in all modern browsers that support the Navigator API.
	•	Gracefully handles environments where navigator or window is not available (SSR-safe).
	•	Cleans up event listeners on component unmount.



## How It Works
	1.	The hook checks navigator.onLine to determine the initial connectivity status.
	2.	Subscribes to browser “online” and “offline” events via window.addEventListener.
	3.	Updates the React state whenever the browser triggers these events.
	4.	On unmount, the event listeners are cleanly removed to avoid memory leaks.
	5.	Returns an object containing:
	    •	onlineStatus: A boolean indicating if the user is online.
	    •	error: Any API/environment-related error.


## API

const { onlineStatus, error } = useOnlineStatus();

Return Value	Type	Description
onlineStatus	boolean	true if online, false if offline
error	{ message: string } | null	Error object if API unsupported, else null




## Usage Example

import useOnlineStatus from './useOnlineStatus';

export default function OnlineStatusComponent() {
  const { onlineStatus, error } = useOnlineStatus();

  if (error) {
    return <p>\u274c Error: {error.message}</p>;
  }

  return (
    <div>
      {onlineStatus ? (
        <p style={{ color: 'green' }}>\ud83d\udfe2 You are Online!</p>
      ) : (
        <p style={{ color: 'red' }}>\ud83d\udd34 You are Offline!</p>
      )}
    </div>
  );
}




## Browser API Reference
	•	navigator.onLine
	•	online and offline events`



## Notes
	•	This hook works only on client-side. On server-side (SSR), it will assume offline but return an error message.
	•	Works well for:
	•	Offline-first applications.
	•	Connectivity-aware features.
	•	Informing users about connection loss.


# Happy Coding with React Hooks Wallet!