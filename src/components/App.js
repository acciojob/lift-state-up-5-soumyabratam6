import React, { useState } from 'react';
import './../styles/App.css';
import LoginForm from './LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1 className="app-header">{isLoggedIn ? 'Welcome You are logged in!!' : 'Parent Component'}</h1>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
    </div>
  );
}

export default App
