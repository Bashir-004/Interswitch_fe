import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext  from '../../Context/AuthContext';

const Header = ({ title, showImage }) => {
  const { isAuthenticated, logoutUser } = useContext(AuthContext);
  const isLoginPage = window.location.pathname === '/';
  const isSignUpPage = window.location.pathname === '/signup';

  return (
    <header className="w-full bg-powderblue text-rgb(69, 121, 167) fixed top-0 left-0 right-0 text-center">
      <div className="bg-blue-300">
        <Link to="/" className="flex items-center">
          {showImage && (
            <img
              src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
              style={{ width: '150px' }}
              alt="interswitch Logo"
            />
          )}
          <p className="flex justify-between text-center mx-[32%] text-3xl ">{title}</p>
        </Link>
        {isAuthenticated && !isLoginPage && !isSignUpPage ? (
          <button onClick={logoutUser} style={{color: 'red', background: 'white', fontWeight: 'bold', borderRadius: '5px'}}>Logout</button>
        ) : (
          isLoginPage || isSignUpPage ? (
            null 
          ) : (
            <Link to="/">Login</Link>
          )
        )}
      </div>
    </header>
  );
};

export default Header;