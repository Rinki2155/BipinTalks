import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footers  = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          
          {/* Social Media Section */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <p className="text-sm mb-4">Explore the world of engineering and technology here.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-white transition-colors duration-200">
                <FaFacebookF size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-white transition-colors duration-200">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-white transition-colors duration-200">
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label="TikTok" className="text-white  hover:text-white transition-colors duration-200">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
          
          {/* Contact Information Section */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm mb-2">Phone: <a href="tel:+919811091794" className="hover:underline">+91-9811091794</a></p>
            <p className="text-sm">Email: <a href="mailto:admin@bpintalks.com" className="hover:underline">admin@bpintalks.com</a></p>
          </div>
          
          {/* Newsletter Subscription Section */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Write to Us</h2>
            <form className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-auto flex-1 py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-yellow-300 py-2 px-4 rounded-md text-white -800 font-medium hover:bg-yellow-400 transition-colors duration-200"
              >
                We'll Write to You!
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Bipin Talks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footers ;
