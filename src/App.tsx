import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import WhatsAppFloat from './components/WhatsAppFloat'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HelpCenterPage from './pages/HelpCenterPage'
import TrackOrderPage from './pages/TrackOrderPage'
import ReturnsPage from './pages/ReturnsPage'
import WarrantyPage from './pages/WarrantyPage'
import FurnitureCarePage from './pages/FurnitureCarePage'
import CareersPage from './pages/CareersPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/help-center" element={<HelpCenterPage />} />
              <Route path="/track-order" element={<TrackOrderPage />} />
              <Route path="/returns" element={<ReturnsPage />} />
              <Route path="/warranty" element={<WarrantyPage />} />
              <Route path="/furniture-care" element={<FurnitureCarePage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
          </main>
          <WhatsAppFloat />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
