import React from 'react'
import Filter from './Filter';
import Footer from './Footer';
import Header from './Header';
import PropertyCard from './PropertyCard';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Filter/>
      <PropertyCard/>
      <Footer/>
    </div>
  )
}

export default Layout;
