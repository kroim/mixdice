import React, { Component } from 'react';

import Header from 'app/components/header/Header.jsx';

const App = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    {/* <Home/> */}
  </>
);

export default App;
