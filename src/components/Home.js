import React from 'react';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';
import FinalCTA from './FinalCTA';

const Home = ({ setPage }) => {
  return (
    <main>
      <Hero setPage={setPage} />
      <Problem />
      <Solution />
      <Testimonials />
      <HowItWorks />
      <FinalCTA setPage={setPage} />
    </main>
  );
};

export default Home;