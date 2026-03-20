import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LiveChatWidget from './components/LiveChatWidget'
import ToastContainer from './components/ToastContainer'
import { CartProvider } from './context/CartContext'

// Lazy-loaded pages for better performance
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
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const OrderConfirmationPage = lazy(() => import('./pages/OrderConfirmationPage'))
const WishlistPage = lazy(() => import('./pages/WishlistPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const StoreLocatorPage = lazy(() => import('./pages/StoreLocatorPage'))
const SizeGuidePage = lazy(() => import('./pages/SizeGuidePage'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="space-y-4 text-center">
        <div className="w-12 h-12 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mx-auto" />
        <p className="text-gray-500 dark:text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
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
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPage />} />
                <Route path="/store-locator" element={<StoreLocatorPage />} />
                <Route path="/size-guide" element={<SizeGuidePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <LiveChatWidget />
          <ToastContainer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
