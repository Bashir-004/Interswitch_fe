import React from 'react';

const AdminDashboard = () => {
  return (
<div className="container md:flex">
    <section className="left-panel">
        <aside className="relative bg-sidebar bg-black h-full w-64 hidden sm:block shadow-xl" x-show="isOpen()">
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
      <div class="container md:flex flex-inline flex-wrap mt-6">
      
      {/* <div class="w-full lg:w-2/6 h-52 pr-0 lg:px-2  md:ml-96 mt-24 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
                            <div class="welcome-boxes  p-5 ">               
                <div class="flex flex-row justify-between items-center capitalize">
              
                  <div class="h6 text-gray-700 font-semibold bg-gray">Add New Users</div>
                  <svg width="32" height="32" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="54" height="54" rx="27" fill="#F6F6F6"/>
                      <path d="M35 36V34C35 32.9391 34.5786 31.9217 33.8284 31.1716C33.0783 30.4214 32.0609 30 31 30H23C21.9391 30 20.9217 30.4214 20.1716 31.1716C19.4214 31.9217 19 32.9391 19 34V36" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M27 26C29.2091 26 31 24.2091 31 22C31 19.7909 29.2091 18 27 18C24.7909 18 23 19.7909 23 22C23 24.2091 24.7909 26 27 26Z" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>    
              </div>
              <div class="flex mt-24 justify-center">
                  <div class="">
                      <a>

                      <button type="submit" class=" flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-light font-medium text-sm px-44 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80 mb-24"style={{ color: "#798BB4" }} ><svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>Add</button>
                      </a>
                  </div>
                  
              </div>                
              </div>
              </div>

              <div class="w-full lg:w-2/6 h-52 pr-0 lg:px-2  md:ml-96 mt-12 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
                            <div class="welcome-boxes  p-5 ">               
                <div class="flex flex-row justify-between items-center capitalize">
              
                  <div class="h6 text-gray-700 font-semibold bg-gray">Create Blacklist</div>
                  <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>    
              </div>
              <div class="flex mt-24 justify-center">
                  <div class="">
                      <a>

                      <button type="submit" class=" flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-light font-medium text-sm px-44 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80 mb-24"style={{ color: "#798BB4" }} >
                      <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>Create</button>
                      </a>
                  </div>
                  
              </div>                
              </div>
              </div> */}

<div class="container md:flex flex-inline flex-wrap mt-6">
  <div class="w-full lg:w-full md:w-2/5 h-52 pr-0 lg:px-2 md:ml-2 mt-24 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div class="flex flex-row justify-between items-center capitalize">
              
              <div class="h6 text-gray-700 font-semibold bg-gray">Add New Users</div>
              <svg width="32" height="32" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="54" height="54" rx="27" fill="#F6F6F6"/>
                  <path d="M35 36V34C35 32.9391 34.5786 31.9217 33.8284 31.1716C33.0783 30.4214 32.0609 30 31 30H23C21.9391 30 20.9217 30.4214 20.1716 31.1716C19.4214 31.9217 19 32.9391 19 34V36" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M27 26C29.2091 26 31 24.2091 31 22C31 19.7909 29.2091 18 27 18C24.7909 18 23 19.7909 23 22C23 24.2091 24.7909 26 27 26Z" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>         
          </div>
          <div class="flex mt-24 justify-center">
                  <div class="">
                      <a>

                      <button type="submit" class=" flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-light font-medium text-sm px-44 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80 mb-24"style={{ color: "#798BB4" }} ><svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>Add</button>
                      </a>
                  </div>
                  
              </div>
  </div>
  <div class="w-full lg:w-full md:w-2/5 h-52 pr-0 lg:px-2 md:ml-2 mt-24 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div class="flex flex-row justify-between items-center capitalize">
              
              <div class="h6 text-gray-700 font-semibold bg-gray">Create Blacklist</div>
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>    
          </div>
          <div class="flex mt-24 justify-center">
                  <div class="">
                      <a>

                      <button type="submit" class=" flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-light font-medium text-sm px-44 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-80 mb-24"style={{ color: "#798BB4" }} >
                      <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" stroke-width="1">
  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>Create</button>
                      </a>
                  </div>
                  
              </div>
          
  </div>
  <div class="w-full lg:w-full md:w-2/5 h-52 pr-0 lg:px-2 md:ml-2 mt-24 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    
  </div>
  <div class="w-full lg:w-full md:w-2/5 h-52 pr-0 lg:px-2 md:ml-2 mt-24 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    
  </div>
  <div class="w-full lg:w-full md:w-2/5 h-52 pr-0 lg:px-2 md:ml-2 mt-24 block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    
  </div>
</div>

    </div>
    
    </div>
  );
}

export default AdminDashboard;






