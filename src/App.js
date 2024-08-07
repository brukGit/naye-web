import React, {useEffect} from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import AppProvider from './components/AppContext';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import Home from './components/Home';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import UpsellPage from './components/UpsellPage';
import ShippingPage from './components/ShippingPage';
import PaymentPage from './components/PaymentPage';
import OrderConfirmationPage from './components/OrderConfirmationPage';
import CreatePage from './components/CreatePage';
import './App.css';



const Router = process.env.REACT_APP_USE_HASH_ROUTER ? HashRouter : BrowserRouter;
const basename = process.env.REACT_APP_BASE_PATH || '/';



const App = () => {

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      console.log(window.Telegram.WebApp.initData);
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.onEvent('viewportChanged', function() {
      console.log('Viewport changed');
    });
    }
  }, []);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

  return (
    <AppProvider basename={basename}>
      <Router>
        <div className="app">
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/*" element={<ProductPage />} />
            <Route path="/productDetail/*" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/upsell" element={<UpsellPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/orderConfirmation" element={<OrderConfirmationPage />} />
            <Route path='/create' element={<CreatePage />} />


          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;