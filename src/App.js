import React from 'react'
import LandingPage from './LandingPage';
import DataProvider from './Context/DataCOntext';

function App() {
  return (
    <div>
      <DataProvider>
       <LandingPage/>
      </DataProvider>
     
    </div>
  );
}

export default App;
