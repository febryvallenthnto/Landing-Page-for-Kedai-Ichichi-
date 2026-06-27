/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Toppings from './components/Toppings';
import DimsumMenu from './components/DimsumMenu';
import OtherMenu from './components/OtherMenu';
import Testimonial from './components/Testimonial';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Toppings />
        <DimsumMenu />
        <OtherMenu />
        <Testimonial />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
