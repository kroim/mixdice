import React, { Component } from 'react';

import Header from 'app/components/header/Header.jsx';
import Footer from 'app/components/footer/Footer.jsx';
import BaseModal from 'app/components/BaseModal.jsx';
import HelpButtons from 'app/components/footer/HelpButtons.tsx';
import { useState } from 'react';
import Mobile from '../../components/mobile/mobile';

const App = ({ children }) => {
  const [showMobile, setMobile] = useState(false);
  return (
    <>
      {!showMobile && (
        <>
          <Header />
          {/*<BaseModal className="base-modal" />*/}
          <HelpButtons />
          <main>{children}</main>
        </>
      )}
      {showMobile && <Mobile close={() => setMobile(false)} />}
      <Footer show={() => setMobile(true)} />
    </>
  );
};
export default App;
