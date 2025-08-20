import React from 'react';
import Hero from './Hero';
import Solution from './Solution';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';
import FinalCTA from './FinalCTA';

const Home = ({ setPage }) => {
  return (
    <main>
      <Hero setPage={setPage} />
      <Solution />
      <Testimonials />
      <HowItWorks />
      <FinalCTA setPage={setPage} />
    </main>
  );
};

export default Home;