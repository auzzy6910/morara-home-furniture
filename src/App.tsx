import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { CartProvider } from './context/CartContext'

const HomePage = lazy(() => import('./pages/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const HelpCenterPage = lazy(() => import('./pages/HelpCenterPage'))
const TrackOrderPage = lazy(() => import('./pages/TrackOrderPage'))
const ReturnsPage = lazy(() => import('./pages/ReturnsPage'))
const WarrantyPage = lazy(() => import('./pages/WarrantyPage'))
const FurnitureCarePage = lazy(() => import('./pages/FurnitureCarePage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div></div>}>
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
            </Suspense>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
