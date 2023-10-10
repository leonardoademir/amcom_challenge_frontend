// eslint-disable-next-line import/no-unresolved
import Header from '@/components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comissions from './pages/Comissions';
import Sells from './pages/Sells';

export default function App() {
  return (
    <main className="app overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Sells />} />
          <Route path="/comissions" element={<Comissions />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
