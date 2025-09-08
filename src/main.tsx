
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  // NEW: Global error listener (logs any crashes)
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error, e.message);
});
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

console.log('Main JS loaded in prod!');  // Test

  createRoot(document.getElementById("root")!).render(<App />);
  if (import.meta.env.DEV) {
  console.log('Dev mode - JS working');
} else {
  console.log('Prod mode - JS working');
}
  console.log('React rendered!');  // Test after render