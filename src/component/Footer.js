import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold">Our Company</h3>
            <p className="mt-4 text-gray-300">
              We are dedicated to providing top-notch services and creating lasting relationships with our customers.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-300 hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h4 className="text-lg font-semibold">Contact</h4>
              <ul className="mt-4 space-y-2">
                <li>Email: info@company.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 1234 Street Name, City, Country</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Our Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
