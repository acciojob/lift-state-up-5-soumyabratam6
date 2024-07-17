
import React,{useState} from "react";
import './css/LoginForm.css';
const  LoginForm = ({onLogin})=>{
    const[username,setUsername] = useState('');
    const[password,setpassword] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(username && password){
            onLogin();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Log In</button>
        </form>
      );
};
export default LoginForm;