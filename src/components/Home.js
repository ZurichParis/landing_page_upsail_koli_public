import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';
import FinalCTA from './FinalCTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Testimonials />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
};

export default Home;