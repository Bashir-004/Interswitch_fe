import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext'


const CreateBlacklist = () => {
  
    const { authTokens, user } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleBlacklistSubmit = async (e) => {
      e.preventDefault();
  
      const itemName = e.target.item.value;
      // const category = e.target.category.value;
      const reason = e.target.reasons.value;
  
      try {
        // Post the new form value to the blacklist database
        const response = await fetch('https://safegate-backend-a63df812f989.herokuapp.com/blacklist/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authTokens}`,
          },
          body: JSON.stringify({ itemName, reason }), 
        });

        const data = await response.json()
  
        if (response.status === 201 || response.status === 200) {
          navigate('/admin')
          alert(data.message);
        }
        else {
          setError(data.error)
        }
      } catch (error) {
        console.error('Error blacklisting item:', error);
        // setError(error.message);
        // Display error message to the user
      }
    };
  
  return (
    <div className="container md:flex">
      <section className="left-panel">
        <aside className="relative bg-sidebar bg-black h-full min-h-screen w-64 hidden sm:block shadow-xl" x-show="isOpen()">
          <div className="p-6 inline-flex">
            <a href="#" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
              <img src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '150px' }} alt="interswitch Logo" />
            </a>
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
           
            </div>
          </nav>
        </aside>
      </section>
          <div class="w-full my-[32%] justify-center flex-col flex-wrap md:ml-44 mt-44 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
       {error && <div className="text-red-500 text-sm mt-3">Error: {error}</div>}
       <form onSubmit={handleBlacklistSubmit} className="max-w-sm mx-auto">
            <div className="text-2xl text-center">
              Create Blacklist
            </div>
           
            <div className="mb-5">
              <label htmlFor="itemName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of item</label>
              <input type="text" id="itemName" name="item" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name of item" required />
            </div>
            
            <div className="mb-5">
              <label htmlFor="reason" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason</label>
              <textarea id="reason" name="reasons" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Reason" required></textarea>
            </div>
           
            <div className="mt-5">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit
              </button>
            </div>
          </form>
          </div>
    </div>
  )
};

export default CreateBlacklist;
