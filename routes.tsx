import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './screens/Home';
import { Services } from './screens/Services';
import { Realisations } from './screens/Realisations';
import { About } from './screens/About';
import { Contact } from './screens/Contact';

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="realisations" element={<Realisations />} />
        <Route path="a-propos" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}