import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import ScrollToHash from './components/common/ScrollToHash';
import LowercaseRedirect from './components/common/LowercaseRedirect';

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
