import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import AppContent from './components/layout/AppContent';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  </Provider>
);

export default App;
