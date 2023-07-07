import React, { Component } from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import BaseModal from 'app/components/BaseModal.jsx';
import HelpButtons from 'app/components/footer/HelpButtons.tsx';
const App = ({ children }) => (
  <>
    <Header />
    {/*<BaseModal className="base-modal" />*/}
    <HelpButtons />
    <main>{children}</main>
    <Footer />
  </>
);

export default App;
