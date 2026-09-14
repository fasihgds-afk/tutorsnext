import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToHash from './components/common/ScrollToHash';
import LowercaseRedirect from './components/common/LowercaseRedirect';
import { logBundleInfo, preloadRoutes } from './utils/bundleAnalyzer.jsx';

// Log bundle info in development
if (import.meta.env.DEV) {
  logBundleInfo();
}

// Preload critical routes in production
if (import.meta.env.PROD) {
  preloadRoutes();
}

function App() {
  return (
    <BrowserRouter>
      <LowercaseRedirect />
      <ScrollToHash />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
