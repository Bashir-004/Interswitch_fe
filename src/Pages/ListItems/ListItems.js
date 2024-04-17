import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const ItemList = () => {
  const { authTokens, user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [reasons, setReasons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://safegate-backend-a63df812f989.herokuapp.com/items/all_items', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authTokens}`,
            'Content-Type': 'application/json'
          },
        });
        const responseData = await response.json();
    // console.log('Received data:', responseData);

      if (responseData.status === 0) {
        const { content } = responseData.data; // Access the content array from the data object
        setItems(content);
      } else {
        setError(responseData.message);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
    fetchData();
  }, [authTokens]);

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleReasonChange = (itemId, reason) => {
    setReasons({ ...reasons, [itemId]: reason });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex">
    <div className="flex">
      {/* Sidebar */}
      <section className="left-panel">
        <aside className="relative bg-sidebar bg-black h-screen w-64 hidden sm:block shadow-xl">
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
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" strokeWidth="1">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Add New User</span>
              </a>
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/create-blacklist">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#798BB4" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>Create BlackList</span>
              </a>
              
              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/items">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#798BB4" strokeWidth="1">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>List of Items</span>
              </a>

              <a className="inline-flex items-center w-full px-6 py-3 block capitalize font-medium text-sm tracking-wide  transform hover:translate-x-2 transition-transform ease-in duration-200 " href="/blacklisted-items">
              <svg xmlns="http://www.w3.org/2000/svg" className=" mr-3" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#798BB4" strokeWidth="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
                <span className="text-dash text-xl" style={{ color: "#798BB4" }}>BlackListed Items</span>
              </a>
           
            </div>
          </nav>
        </aside>
      </section>
</div>

      {/* Main content */}
      <div className="flex-1 my-32">
        {/* Table */}
        {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="flex justify-center">
          <table className="w-full text-sm text-left border text-gray-500 dark:text-gray-400">
            <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="capitalize">
                <th scope="col" className="p-2 px-4">
                  {/* Checkbox header */}
                </th>
                <th scope="col" className="py-2 px-6 inline-flex items-center">
                  Name of items
                </th>
                <th scope="col" className="py-3 px-6">
                  Category of items
                </th>
                
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-500 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {/* Table row content */}
                  <td className="p-2 px-4">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(item.id)}
                      checked={selectedItems.includes(item.id)}
                    />
                  </td>
                  <td className="py-2 px-6">{item.name}</td>
                  <td className="py-3 px-6">{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Next Button */}
      <div className="flex justify-center mt-6">
        {/* <button
          onClick={handleNextPage}
          disabled={loading || items.length < 5} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded"
        >
          Next
        </button> */}
      </div>
    </div>
  </div>
)};

export default ItemList;
