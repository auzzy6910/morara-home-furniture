import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HelpCenterPage from './pages/HelpCenterPage'
import TrackOrderPage from './pages/TrackOrderPage'
import DeliveryAssemblyPage from './pages/DeliveryAssemblyPage'
import ShowroomLocationsPage from './pages/ShowroomLocationsPage'
import ReturnPolicyPage from './pages/ReturnPolicyPage'
import HowToOrderPage from './pages/HowToOrderPage'
import WarrantyClaimsPage from './pages/WarrantyClaimsPage'
import BulkOrdersPage from './pages/BulkOrdersPage'
import InteriorDesignPage from './pages/InteriorDesignPage'
import FurnitureCarePage from './pages/FurnitureCarePage'
import FlashSalesPage from './pages/FlashSalesPage'
import ReturnsRefundsPage from './pages/ReturnsRefundsPage'
import CareersPage from './pages/CareersPage'
import ExpressDeliveryPage from './pages/ExpressDeliveryPage'
import TermsPage from './pages/TermsPage'
import StoreCreditPage from './pages/StoreCreditPage'
import PrivacyPage from './pages/PrivacyPage'
import CookieNoticePage from './pages/CookieNoticePage'
import SellOnMoraraPage from './pages/SellOnMoraraPage'
import VendorHubPage from './pages/VendorHubPage'
import DesignConsultantPage from './pages/DesignConsultantPage'
import AffiliateProgramPage from './pages/AffiliateProgramPage'
import DeliveryZonesPage from './pages/DeliveryZonesPage'
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
              <Route path="/delivery-assembly" element={<DeliveryAssemblyPage />} />
              <Route path="/showroom-locations" element={<ShowroomLocationsPage />} />
              <Route path="/return-policy" element={<ReturnPolicyPage />} />
              <Route path="/how-to-order" element={<HowToOrderPage />} />
              <Route path="/warranty-claims" element={<WarrantyClaimsPage />} />
              <Route path="/bulk-orders" element={<BulkOrdersPage />} />
              <Route path="/interior-design" element={<InteriorDesignPage />} />
              <Route path="/furniture-care" element={<FurnitureCarePage />} />
              <Route path="/flash-sales" element={<FlashSalesPage />} />
              <Route path="/returns-refunds" element={<ReturnsRefundsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/express-delivery" element={<ExpressDeliveryPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/store-credit" element={<StoreCreditPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookie-notice" element={<CookieNoticePage />} />
              <Route path="/sell-on-morara" element={<SellOnMoraraPage />} />
              <Route path="/vendor-hub" element={<VendorHubPage />} />
              <Route path="/design-consultant" element={<DesignConsultantPage />} />
              <Route path="/affiliate-program" element={<AffiliateProgramPage />} />
              <Route path="/delivery-zones" element={<DeliveryZonesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
