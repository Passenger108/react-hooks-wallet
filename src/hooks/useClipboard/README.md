

## 📋 useClipboard

A custom React hook that provides an easy and reactive way to copy text to the system clipboard using the Clipboard API. It also returns the copy status and error (if any), enabling feedback in the UI like “Copied!” or “Failed to copy.”

Ideal for actions like copying promo codes, URLs, or any user-generated content in your app with a single click.


⸻

# 🚀 Features

- **Programmatically copies text to clipboard on demand**
- **Returns copy success state and error (if occurred)**
- **Supports optional reset of copied flag after a timeout**
- **Gracefully handles unsupported browsers**
- **No external dependencies—lightweight and reactive**

⸻

# 🧠 How It Works

- The `useClipboard` hook utilizes the modern `navigator.clipboard.writeText()` API.
- Calling `copy(text)` attempts to copy the provided text and updates the success or error state.
- You can pass an optional `resetTimeout` (in milliseconds) to automatically reset the copy status after the specified duration.
- The hook maintains state (`copied`, `error`) using React's `useState`.
- Cleanup logic ensures state updates do not occur after the component is unmounted.


⸻

🧪 Usage

API

useClipboard(options?: {
  resetTimeout?: number; // Time after which `copied` flag is reset
}): {
  copied: boolean;
  error: Error | null;
  copy: (text: string) => void;
}

import useClipboard from './useClipboard';

export default function CopyComponent() {
  const { copied, copy, error } = useClipboard({ resetTimeout: 2000 });

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        defaultValue="https://github.com/passenger108/react-hooks-wallet"
        id="text"
      />
      <button
        onClick={() => {
          const text = document.getElementById('text').value;
          copy(text);
        }}
      >
        📋 Copy to Clipboard
      </button>

      {copied && <p style={{ color: 'green' }}>✅ Copied!</p>}
      {error && <p style={{ color: 'red' }}>❌ Failed to copy: {error.message}</p>}
    </div>
  );
}


⸻

Let me know if you also want:
	•	TypeScript support signature
	•	Clipboard API browser support fallback
	•	Or animation/UI enhancements for feedback state

Ready for your next hook whenever you are! 🚀