import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRegister: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('Login button clicked');
    
    try {
      const response = await fetch('http://localhost:8000/main/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ password, username })
      });
  
      if (!response.ok) {
        const errorData = await response.text(); // Read error response
        console.error('Login failed:', response.statusText, errorData);
        return;
      }
  
      const data = await response.json();
      console.log('Login successful:', data);
      navigate('/');
      
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleRegister = async () => {
    try {
      console.log('Register data:', { first_name: firstName, password, role, second_name: secondName, username });
      const response = await fetch('http://localhost:8000/main/account/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          first_name: firstName,
          password,
          role,
          second_name: secondName,
          username
        })
      });

      // Проверка успешности ответа
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration failed:', response.statusText, errorData);
        return; // Завершаем выполнение функции при ошибке
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      navigate('/');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

const testFunc = () => {
  console.log("rabotaet")
  navigate('/')
}

  return (
    <div className="login-register-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Second Name"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              required
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </>
        )}
        <button onClick={(event) => {
          event.preventDefault();
          isLogin ? handleLogin() : handleRegister();
        }}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need to register?' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default LoginRegister;