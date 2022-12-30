import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./views/home/home";
import Cart from "./views/cart/cart";
import { AnimatePresence } from "framer-motion";
import  './app.css';
import { App, Page } from 'konsta/react';
import { Tabs } from "./layout/tabs";
import { Categories } from "./views/categories/categories";
import { Favorites } from "./views/favorites/favorites";
import { Profile } from "./views/profile/profile";
import Notification from "./views/notification/notifications";

function MyApp() {
  const location = useLocation();

  return (
    <App>
      <Page style={{background: '#fff'}}>
       <AnimatePresence exi>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </AnimatePresence>
        <Tabs />
      </Page>        
    </App>
  )
}

export default MyApp;
