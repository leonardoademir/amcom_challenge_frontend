// eslint-disable-next-line import/no-unresolved
import Header from '@/components/Header';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comissions from './pages/Comissions';
import Sells from './pages/Sells';
import SellCreation from './pages/SellCreation';
import { SellsContextProvider } from './context/sellContext';
import { ComissionsContextProvider } from './context/comissionContext';

export default function App() {
  return (
    <main className="app overflow-hidden">
      <SellsContextProvider>
        <ComissionsContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Sells />} />
              <Route path="/sell-create" element={<SellCreation />} />
              <Route path="/comissions" element={<Comissions />} />
            </Routes>
          </BrowserRouter>
        </ComissionsContextProvider>
      </SellsContextProvider>
    </main>
  );
}
