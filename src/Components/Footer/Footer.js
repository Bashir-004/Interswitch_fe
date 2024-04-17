import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-powderblue text-rgb(69, 121, 167) fixed bottom-0 left-0 right-0 text-center">
      <div className='bg-blue-400 overflow-auto' style={{ maxHeight: '100px' }}>
      <a href="#" className="flex items-center">
            {/* <img src="http://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '150px' }} alt="interswitch Logo" /> */}
          <span className='flex flex-col justify-center mx-auto text-xl mr-auto'>
            <h4 className="text-center" style={{fontWeight: 'bold'}}>About Us</h4>
            <p style={{fontSize: '15px'}}>At Safe Gate, our mission is to provide innovative solutions for managing blacklisted 
              items, ensuring security and efficiency for businesses worldwide. 
              With a dedicated team of experts, we strive to deliver cutting-edge technologies that streamline the process of identifying and handling blacklisted items.</p>
        <a href='#' className="text-center">Terms & Condition</a><br />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a class="hover:underline"> Interswitch Group 2.™</a>. All Rights Reserved.</span>
        </span>
          </a>
      </div>
    </footer>
  );
};


export default Footer;
