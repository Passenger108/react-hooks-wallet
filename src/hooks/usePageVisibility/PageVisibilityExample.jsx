
import usePageVisibility from './usePageVisibility';

export default function PageVisibilityExample() {
  const { isVisible, visibilityStatus, error } = usePageVisibility();

  if (error) return <p>❌ Error: {error.message}</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>🕵️‍♂️ usePageVisibility Hook Demo</h1>
      <h2>Status: {visibilityStatus}</h2>
      <p style={{ fontSize: '2rem' }}>
        {isVisible ? '✅ You are Viewing This Tab' : alert('🚫 You recently Switched Away!')}
      </p>
    </div>
  );
}