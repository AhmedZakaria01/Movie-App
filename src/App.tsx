// Components
import Navbar from 'components/Navbar';
import Router from '@/Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/Movie-App/">
      <div className="relative">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;