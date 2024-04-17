import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';

const AddNewUser = () => {
  const { user, authTokens } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    role: '', // Add role field to the formData state
  });
  const [error, setError] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setError('Please provide an email for non-admin users');
      return;
    }

    try {
      const response = await fetch('https://safegate-backend-a63df812f989.herokuapp.com/user/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens}`, // Include the JWT token in the request headers
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 200 || response.status === 201) {
        // alert('New user added successfully')
        alert(data.message)
        navigate('/admin');
      } else {
        // alert('This email has already been used!')
        // console.log(data)
        setError(data.error); //backend response
        setError(data.message); //backend response
        setError(data.error); //backend response
        setError(data.message); //backend response
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // setError('An error occured during registration');
    }
  };

  // Check if user is admin
  // const isAdmin = user.role === 'ROLE_USER_ADMIN';
  // Define possible roles
  const roles = ["ROLE_USER_ADMIN", "ROLE_BLACKLIST_ADMIN"];

  // Render the page content only if user is admin
  // if (!isAdmin) {
  //   return <div>You can't see this page because you are not an admin.</div>;
  // }

  return (
    <div className="container md:flex">
    <section className="left-panel">
    <aside className="relative bg-sidebar bg-black h-full min-h-screen w-64 hidden sm:block shadow-xl" x-show="isOpen()">
          <div className="p-6 inline-flex">
            <a href="#" className="text-white text-3xl font-semibold uppercase hover:text-gray-300"><img src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '150px' }} alt="interswitch Logo" /></a>
            <a
              className="ml-auto  flex-1 flex items-center"
              href="#"
            >
              <span className="iconify text-gray-400 text-2xl " data-icon="gg:menu-right"></span>
            </a>
          </div>
          <nav className="text-white text-base font-semibold ">
            <div className="flex flex-col ml-2 ">
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/admin">
                <svg className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20V4" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20V14" stroke="#798BB4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Dashboard</span>
              </a>
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/add-new-user">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Add New User</span>
              </a>
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/create-blacklist">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#798BB4" stroke-width="1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Create BlackList</span>
              </a>
              
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/items">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>List of Items</span>
              </a>

              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/blacklisted-items">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3"  width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#798BB4" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
</svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>BlackListed Items</span>
              </a>
              {/* Other anchor elements */}
            </div>
          </nav>
        </aside>
      </section>
  
      
      <div className="w-full flex justify-center items-center">
      <div className="max-w-md">
        <img
          src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg"
          width="130"
          className="mx-auto mb-4"
          alt="Interswitch Logo"
        />
        <div className="bg-white px-6 py-8 rounded shadow-md text-black">
          <h1 className="mb-8 text-2xl text-center">Add New User</h1>
          {error && <div className="text-red-500 text-sm mt-3">Error: {error}</div>}
          <input 
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email" 
            onChange={handleFormChange}
          />
          
          {/* Dropdown menu for selecting role */}
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={handleFormChange}
          >
            <option value="">Select Role</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>{role}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-blue-400 text-white hover:bg-blue-600 focus:outline-none my-4"
            onClick={handleSubmit}
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the <br /> 
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a> and <br />
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
};

export default AddNewUser;
