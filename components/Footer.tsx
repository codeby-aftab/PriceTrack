
import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">PriceTrack</h3>
            <p className="text-gray-400">Your personal deal finder. Never overpay again.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white"><WhatsAppIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon className="w-6 h-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Weekly Best Deals</h4>
            <p className="text-gray-400 mb-4">Get the best price drops delivered to your inbox.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none" />
              <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-r-lg hover:bg-green-600">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} PriceTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
