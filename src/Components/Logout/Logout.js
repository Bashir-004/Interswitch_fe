import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const Logout = () => {
  const { setAuthTokens } = useContext(AuthContext);

  const handleLogout = () => {
    // Perform logout actions, such as clearing tokens, user data, etc.
    setAuthTokens(null); // Assuming setAuthTokens is a function provided by AuthContext to update authentication tokens

    // You may also want to redirect the user to the login page or perform other actions after logout.
  };

  return (
    <button onClick={handleLogout} className="text-white px-3 py-1 ml-2 rounded-lg bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">
      Logout
    </button>
  );
};

export default Logout;
