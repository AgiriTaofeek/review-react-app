import React, { useState } from 'react';
import Wrapper from './components/UI/Wrapper';
import Review from './components/Review';

function App() {
  return (
    <main>
      <Wrapper>
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </Wrapper>
    </main>
  );
}

export default App;
