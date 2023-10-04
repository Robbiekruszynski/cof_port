import React, { useState } from 'react';
import LinkList from './components/LinkList';
import SphereComponent from './components/threejs/SphereModel';
import Header from './components/Header';

function App() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'black', textAlign: 'center' }}>
      {!showLinks && <SphereComponent onClick={() => setShowLinks(true)} />}
      {showLinks && (
        <>
          <Header />
          <LinkList />
        </>
      )}
    </div>
  );
}

export default App;








