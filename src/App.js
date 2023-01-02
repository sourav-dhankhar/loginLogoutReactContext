import React, { useContext, useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const authContext = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={authContext.isLoggedIn} onLogout={authContext.onLogout} />
      <main>
        {!authContext.isLoggedIn && <Login/>}
        {authContext.isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App;
