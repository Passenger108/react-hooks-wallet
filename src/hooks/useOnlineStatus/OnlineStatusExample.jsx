import useOnlineStatus from './useOnlineStatus';

export default function OnlineStatusComponent() {
  const { onlineStatus, error } = useOnlineStatus();

  if (error) {
    return <p>❌ Error: {error.message}</p>;
  }

  return (
    <div>
      {onlineStatus ? (
        <p style={{ color: 'green' }}>🟢 You are Online!</p>
      ) : (
        <p style={{ color: 'red' }}>🔴 You are Offline!</p>
      )}
    </div>
  );
}