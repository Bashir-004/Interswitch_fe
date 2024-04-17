import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { loginUser, error } = useContext(AuthContext);

  return (
    <div className="w-full my-[12%] justify-center md:ml-[35%] flex-col flex-wrap block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      {error && <div className="error">{error}</div>}
      <section className="dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center mx-auto min:h-screen lg:py-0">
          <img
            src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
            width="130"
            className="mb-4"
            alt="Interswitch Logo"
          />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-6 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign into Admin DashBoard
              </h1>
              <form onSubmit={loginUser} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <div className="signup-container text-center text-sm text-grey-dark mt-4">
                <p>
              Don't have an account? <Link to="/signup" className="text-blue-400 hover:text-blue-600">Sign Up</Link>
            </p>
            </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
