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
      <h1 className="app-header parent">Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!!</p>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App
