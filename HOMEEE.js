import React from 'react'
// import Navbar from './Navbar';
import Sidebar from './Slidebar/Sidebarrr';
import PromoSection from './DiscountBanner/Promosection';
import Services from './Sevices/Services';
import Category from './Category/Category';
import Sellerr from './BestSeller/Sellerr';
import DiscountBanner from './SummerOffer/DiscountBanner'
import Onsale from './Onsale/Onsale'
import Brands from './TopBrand/Brands';
import Newarrival from './Arrival/Newarrival'
import Footer from './Footer/Footer';


const HOMEEE = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Sidebar />
            <PromoSection />
            <Services />
            <Sellerr />
            <Category />
            <DiscountBanner />
            <Onsale />
            <Brands />
            <Newarrival />
            <Footer />
        </div>
    )
}

export default HOMEEE
