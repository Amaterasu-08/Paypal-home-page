import React from 'react';

{/* <img src="../../images/Paypal-logo.png" alt="Logo" className="h-20 w-auto"/> */}

function Footer() {
    const topLinks = ['Help', 'Contact', 'Fees', 'Security', 'Apps', 'Shop', 'Enterprise', 'Partners'];
    const bottomLinks = ['About', 'Newsroom', 'Jobs', 'Investor Relations', 'Values in Action', 'Public Policy', 'Sitemap'];
    const legalLinks = ['Accessibility', 'Privacy', 'Cookies', 'Legal'];
  
    return (
        <footer className="bg-white p-6 md:p-10 ">
        <img src="../../images/Paypal-logo.png" alt="Logo" className="h-14 w-auto transform scale-500 mb-4 md:h-20"/>
        <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-200 pb-6">
              
          <nav className="flex flex-wrap justify-center md:justify-start   mb-4 md:mb-0 space-x-2">
            {topLinks.map((link, index) => (
              <a key={index} href="#" className="text-blue-900 font-bold ">{link}</a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between items-center pt-6 md:pt-10">
          <nav className="flex flex-wrap justify-center md:justify-start space-x-2">
            {bottomLinks.map((link, index) => (
              <a key={index} href="#" className="text-blue-900 font-bold">{link}</a>
            ))}
          </nav>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-2 mt-4 md:mt-0">
            <span className="text-gray-600">© 1999–2022</span>
            {legalLinks.map((link, index) => (
              <a key={index} href="#" className="text-blue-600 hover:text-blue-800">{link}</a>
            ))}
          </nav>
        </div>
      </footer>
    );
}

export default Footer;

{/* <footer className="bg-white p-6 md:p-10 ">
        <img src="../../images/Paypal-logo.png" alt="Logo" className="h-14 w-auto transform scale-500 mb-4 md:mb-0 md:mr-4"/>
        <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-200 pb-6 md:pb-8">
              
          <nav className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0 space-x-2">
            {topLinks.map((link, index) => (
              <a key={index} href="#" className="text-blue-600 hover:text-blue-800">{link}</a>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between items-center pt-6 md:pt-10">
          <nav className="flex flex-wrap justify-center md:justify-start space-x-2">
            {bottomLinks.map((link, index) => (
              <a key={index} href="#" className="text-gray-600 hover:text-gray-800">{link}</a>
            ))}
          </nav>
          <nav className="flex flex-wrap justify-center md:justify-start space-x-2 mt-4 md:mt-0">
            <span className="text-gray-600">© 1999–2022</span>
            {legalLinks.map((link, index) => (
              <a key={index} href="#" className="text-blue-600 hover:text-blue-800">{link}</a>
            ))}
          </nav>
        </div>
      </footer> */}