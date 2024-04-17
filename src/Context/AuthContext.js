import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const AuthContext = createContext();
// const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null
  );
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      // const response = await fetch(`${apiUrl}/auth/login/`, {
      const response = await fetch('https://safegate-backend-a63df812f989.herokuapp.com/auth/login', {
        method: 'POST',
        // mode: 'cors',
        // credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'email': e.target.email.value,
          'password': e.target.password.value,
        }),
      });
      const data = await response.json();
      console.log(data)
      let errorMessage = 'An error occurred during login. You might need to input your details correctly and try again.'

      if (response.status === 200) {
        setAuthTokens(data.data);
        setUser(jwtDecode(data.data));
        localStorage.setItem('authTokens', JSON.stringify(data.data));
        alert(data.message)
        navigate('/admin');
      } else if(response.status === 400) {
        errorMessage = data.message
        setError(errorMessage);
        // console.log(errorMessage)
      } else if(response.status === 401) {
        errorMessage = data.message
        setError(errorMessage);
        // console.log(errorMessage)
      }
      // else {
      //   setError(errorMessage);
      //   // console.log(errorMessage)
      // }
    } catch (error) {
      console.error('Error during login:', error);
      // setError('An error occurred during login. You might need to input your details correctly and try again.');
    }
  };


  const logoutUser = (e) => {
    e.preventDefault()
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/');
  };

  // const updateToken = async (e) => {
  //   let response = await fetch('/auth/update/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         'refresh': authTokens.refresh
  //       }),
  //     });
  //     let data = await response.json();

  //     if(response.status === 200){
  //       setAuthTokens(data);
  //       setUser(jwtDecode(data.access));
  //       localStorage.setItem('authTokens', JSON.stringify(data));

  //     }
  //     else{
  //       logoutUser()
  //     }
  // }

  const isAuthenticated = !!authTokens;

  const contextData = {
    
    user: user,
    error : error,
    authTokens: authTokens,
    isAuthenticated: isAuthenticated,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  // useEffect(() => {

  //       let fourMinutes = 1000 * 60 * 4
  //       let interval = setInterval(()=> {
  //           if(authTokens){
  //               updateToken()
  //           }
  //       }, fourMinutes)
  //       return ()=> clearInterval(interval)
  // }, [authTokens, loading])

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};

export default AuthContext;