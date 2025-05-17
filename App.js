import './App.css';


import AdminPage from "./Admin/AdminPage";

import ScrollToTop from './ScrollToTop';
import { AnimatePresence } from "framer-motion";
import PageTransition from './PageTransition';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./Navbar/Cart/CartContext";


// import Breadcrumbpath from "./B readcrumbpath/Breadcrumbpath";


import Navbar from './Navbar/Navbar';
// import SearchResults from './Navbar/SearchResults';
import SearchResults from './Navbar/SearchResults';


import All from './Navbar/Shop_All/All';
import Orderpage from "./Orderpage/Orderpage";

import Computer from './Navbar/Computer/Computer'
import Dell from './Navbar/Computer/Dell'
import MacMini from './Navbar/Computer/MacMini'
import GalaxyBook5 from './Navbar/Computer/GalaxyBook5'
import Rionix from './Navbar/Computer/Rionix'
import Asus from './Navbar/Computer/Asus'

import Tablets from './Navbar/Tablet/Tablet'
import Ipad from './Navbar/Tablet/Ipad'
import Galaxys9 from './Navbar/Tablet/Galaxys9'
import Galaxys10 from './Navbar/Tablet/Galaxys10'
import LenovoTab from './Navbar/Tablet/LenovoTab'
import OnePlusTab from './Navbar/Tablet/OnePlusTab'

import Drone from './Navbar/Drone/Drone'
import AmitashaDrone from './Navbar/Drone/AmitashaDrone'
import IZIDrone from './Navbar/Drone/IZIDrone'
import Hero11GoPro from './Navbar/Drone/Hero11GoPro'
import Hero12GoPro from './Navbar/Drone/Hero12GoPro'
import Hero13GoPro from './Navbar/Drone/Hero13GoPro'

import Camera from './Navbar/Camera/Camera'
import Canon3000D from './Navbar/Camera/Canon3000D'
import CanonR10 from './Navbar/Camera/CanonR10'
import TapoCctv from './Navbar/Camera/TapoCctv'
import XiaomiCctv from './Navbar/Camera/XiaomiCctv'
import PanasonicCamera from './Navbar/Camera/PanasonicCamera'

import Headphone from './Navbar/Audio/Headphone/Headphone'
import SonyWH from './Navbar/Audio/Headphone/SonyWH'
import OnePlusBullets from './Navbar/Audio/Headphone/OnePlusBullets'
import NoiseAirwave from './Navbar/Audio/Headphone/NoiseAirwave'
import AirPodsPro from './Navbar/Audio/Headphone/AirPodsPro'

import Speaker from './Navbar/Audio/Speaker/Speaker'
import StoneOpus from './Navbar/Audio/Speaker/StoneOpus'
import AavanteBar from './Navbar/Audio/Speaker/AavanteBar'

import Mobile from './Navbar/Mobile/Mobile'
import Galaxys25 from './Navbar/Mobile/Galaxys25'
import Galaxys24ultra from './Navbar/Mobile/Galaxys24ultra'
import Iphone15 from './Navbar/Mobile/Iphone15'
import Vivov50 from './Navbar/Mobile/Vivov50'


import Tv from './Navbar/TV/Tv'
import Crystaltv from './Navbar/TV/Crystaltv'
import Curved from './Navbar/TV/Curved'
import Tcltv from './Navbar/TV/Tcltv'

import Watch from './Navbar/watch/Watch'
import Noisewatch from './Navbar/watch/Noisewatch'
import Boatwatch from './Navbar/watch/Boatwatch'
import Boultwatch from './Navbar/watch/Boultwatch'
import FireBoltt from './Navbar/watch/FireBoltt'
import CMFwatch from './Navbar/watch/CMFwatch'

import Sale from './Navbar/Sale/Sale'

import Cartpage from "./Navbar/Cart/Cartpage";


import HOMEEE from './HOMEEE';
import BestSeller from './BestSeller/SidebarBestSeller/BestSeller';
import LoginPage from './Navbar/Profile/Loginpage';
import Registration from './Navbar/Profile/Registration';
import Placeorder from './Placeorder/Placeorder'
import Bill from './Bill/Bill'


import Feedbackpage from './Footer/Feedbackpage';
import Helpcenter from './Footer/Helpcenter';
import AboutUs from './Footer/AboutUs';
import ReturnRefund from './Footer/ReturnRefund';
import TermCondition from './Footer/TermCondition';
import PaymentMethod from './Footer/PaymentMethod';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route path="/admin" element={<AdminPage />} />


        <Route path='Loginpage' element={<PageTransition><LoginPage /></PageTransition>} />
        <Route path='Registration' element={<PageTransition><Registration /></PageTransition>} />
        <Route path="/search" element={<PageTransition><SearchResults /></PageTransition>} />
        <Route path='/' element={<PageTransition><HOMEEE /></PageTransition>} />
        <Route path='all' element={<PageTransition><All /></PageTransition>} />
        <Route path='Orderpage' element={<PageTransition><Orderpage /></PageTransition>} />


        <Route path='BestSeller' element={<PageTransition><BestSeller /></PageTransition>} />


        <Route path='computer' element={<PageTransition><Computer /></PageTransition>} />
        <Route path='Dell' element={<PageTransition><Dell /></PageTransition>} />
        <Route path='MacMini' element={<PageTransition><MacMini /></PageTransition>} />
        <Route path='GalaxyBook5' element={<PageTransition><GalaxyBook5 /></PageTransition>} />
        <Route path='Rionix' element={<PageTransition><Rionix /></PageTransition>} />
        <Route path='Asus' element={<PageTransition><Asus /></PageTransition>} />



        <Route path='Tablets' element={<PageTransition><Tablets /></PageTransition>} />
        <Route path='Ipad' element={<PageTransition><Ipad /></PageTransition>} />
        <Route path='Galaxys9' element={<PageTransition><Galaxys9 /></PageTransition>} />
        <Route path='Galaxys10' element={<PageTransition><Galaxys10 /></PageTransition>} />
        <Route path='LenovoTab' element={<PageTransition><LenovoTab /></PageTransition>} />
        <Route path='OnePlusTab' element={<PageTransition><OnePlusTab /></PageTransition>} />



        <Route path='Drone' element={<PageTransition><Drone /></PageTransition>} />
        <Route path='AmitashaDrone' element={<PageTransition><AmitashaDrone /></PageTransition>} />
        <Route path='IZIDrone' element={<PageTransition><IZIDrone /></PageTransition>} />
        <Route path='Hero11GoPro' element={<PageTransition><Hero11GoPro /></PageTransition>} />
        <Route path='Hero12GoPro' element={<PageTransition><Hero12GoPro /></PageTransition>} />
        <Route path='Hero13GoPro' element={<PageTransition><Hero13GoPro /></PageTransition>} />



        <Route path='Camera' element={<PageTransition><Camera /></PageTransition>} />
        <Route path='Canon3000D' element={<PageTransition><Canon3000D /></PageTransition>} />
        <Route path='CanonR10' element={<PageTransition><CanonR10 /></PageTransition>} />
        <Route path='TapoCctv' element={<PageTransition><TapoCctv /></PageTransition>} />
        <Route path='XiaomiCctv' element={<PageTransition><XiaomiCctv /></PageTransition>} />
        <Route path='PanasonicCamera' element={<PageTransition><PanasonicCamera /></PageTransition>} />



        <Route path='Headphone' element={<PageTransition><Headphone /></PageTransition>} />
        <Route path='SonyWH' element={<PageTransition><SonyWH /></PageTransition>} />
        <Route path='OnePlusBullets' element={<PageTransition><OnePlusBullets /></PageTransition>} />
        <Route path='NoiseAirwave' element={<PageTransition><NoiseAirwave /></PageTransition>} />
        <Route path='AirPodsPro' element={<PageTransition><AirPodsPro /></PageTransition>} />



        <Route path='Mobile' element={<PageTransition><Mobile /></PageTransition>} />
        <Route path='Galaxys25' element={<PageTransition><Galaxys25 /></PageTransition>} />
        <Route path='Galaxys24ultra' element={<PageTransition><Galaxys24ultra /></PageTransition>} />
        <Route path='Iphone15' element={<PageTransition><Iphone15 /></PageTransition>} />
        <Route path='Vivov50' element={<PageTransition><Vivov50 /></PageTransition>} />


        <Route path='tv' element={<PageTransition><Tv /></PageTransition>} />
        <Route path='Crystaltv' element={<PageTransition><Crystaltv /></PageTransition>} />
        <Route path='Curved' element={<PageTransition><Curved /></PageTransition>} />
        <Route path='Tcltv' element={<PageTransition><Tcltv /></PageTransition>} />



        <Route path='watch' element={<PageTransition><Watch /></PageTransition>} />
        <Route path='Noisewatch' element={<PageTransition><Noisewatch /></PageTransition>} />
        <Route path='Boatwatch' element={<PageTransition><Boatwatch /></PageTransition>} />
        <Route path='Boultwatch' element={<PageTransition><Boultwatch /></PageTransition>} />
        <Route path='FireBoltt' element={<PageTransition><FireBoltt /></PageTransition>} />
        <Route path='CMFwatch' element={<PageTransition><CMFwatch /></PageTransition>} />

        
        <Route path='Sale' element={<PageTransition><Sale /></PageTransition>} />


        <Route path='Speaker' element={<PageTransition><Speaker /></PageTransition>} />
        <Route path='StoneOpus' element={<PageTransition><StoneOpus /></PageTransition>} />
        <Route path='AavanteBar' element={<PageTransition><AavanteBar /></PageTransition>} />



        <Route path="/cartpage" element={<PageTransition><Cartpage /></PageTransition>} />
        <Route path="/Placeorder" element={<PageTransition><Placeorder /></PageTransition>} />
        <Route path="/Bill" element={<PageTransition><Bill /></PageTransition>} />


        <Route path='/Feedbackpage' element={<PageTransition><Feedbackpage /></PageTransition>} />
        <Route path='/Helpcenter' element={<PageTransition><Helpcenter /></PageTransition>} />
        <Route path='/AboutUs' element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path='/ReturnRefund' element={<PageTransition><ReturnRefund /></PageTransition>} />
        <Route path='/TermCondition' element={<PageTransition><TermCondition /></PageTransition>} />
        <Route path='/PaymentMethod' element={<PageTransition><PaymentMethod /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <div className='web'>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <Navbar />
            <AnimatedRoutes />
          </Router>
        </CartProvider>
      </div>

    </>
  );
}

export default App;
