import React, { useState } from 'react';
import LinkList from './components/LinkList';
import SphereComponent from './components/threejs/SphereModel';

function App() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', textAlign: 'center' }}>
      {!showLinks && <SphereComponent onClick={() => setShowLinks(true)} />}
      {showLinks && <LinkList />}
    </div>
  );
}

export default App;






