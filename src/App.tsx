import React, { useEffect } from 'react';
import Router from './router/router';
import { useLocation } from 'react-router-dom';

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0)
  }, [pathname])

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
