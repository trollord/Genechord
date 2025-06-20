import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import ForDoctors from './pages/ForDoctors';
import Team from './pages/Team';
import Contact from './pages/Contact';
import QRInfo from './pages/QRInfo';

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// AnimatedRoutes component with route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  // Check if current route is the QR info page
  const isQRInfoPage = location.pathname === '/info';

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/for-doctors" element={<ForDoctors />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<QRInfo />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const location = useLocation();
  const isQRInfoPage = location.pathname === '/info';

  return (
    <div className="flex flex-col min-h-screen">
      {!isQRInfoPage && <Header />}
      <ScrollToTop />
      <main className={isQRInfoPage ? '' : 'flex-grow'}>
        <AnimatedRoutes />
      </main>
      {!isQRInfoPage && <Footer />}
    </div>
  );
}

// Wrap App with Router
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;