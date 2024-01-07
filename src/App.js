import React from 'react';
import "./App.css";
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Popularproducts from './sections/Popularproducts';
import Superquality from './sections/Superquality';
import Services from './sections/Services';
import Specialoffer from './sections/Specialoffer';
import Customerreviews from './sections/Customerreviews';
import Subscribe from './sections/Subscribe';
import Footer from './sections/Footer';

export default function App() {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <Popularproducts/>
      <Superquality/>
      <Services/>
      <Specialoffer/>
      <Customerreviews/>
      <Subscribe/>
      <Footer/>
    </main>
  )
}
