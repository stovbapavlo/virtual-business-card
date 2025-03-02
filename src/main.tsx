import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  console.log('Root element знайдено');
  createRoot(rootElement).render(<App />);
} else {
  console.error('Root element не знайдено');
}
