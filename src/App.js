import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-black pb-20'>
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
