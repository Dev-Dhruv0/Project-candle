// import React, { useState } from 'react';
import './App.css';
import AppRouter from './Utils/Router Util/Router';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AuthProvider } from './Context/Auth Context/AuthContext';


function App() {
  // const [isAuthenticated, setIsAutheticated] = useState(false);

  // const handleSignIn = ( status ) => {
  //   setIsAutheticated(status);
  // };

  return (
    <div className="App">
      <AuthProvider>
      <AppRouter/>
      </AuthProvider>
    </div>
  );
}

export default App;
