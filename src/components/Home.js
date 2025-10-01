import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';
import FinalCTA from './FinalCTA';
import Interview from './Interview';

const Home = () => {
  return (
    <main>
      <Hero />
      <Problem />
      <Interview />
      <Solution />
      <Testimonials />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
};

export default Home;