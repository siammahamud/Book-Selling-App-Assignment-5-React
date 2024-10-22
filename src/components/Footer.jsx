import { useState } from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-8 text-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold text-xl mb-2">Services</h4>
          <ul className="space-y-2">
            <li>Branding</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>Advertisement</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold text-xl mb-2">Company</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Contact</li>
            <li>Jobs</li>
            <li>Press kit</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-bold text-xl mb-2">Legal</h4>
          <ul className="space-y-2">
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <div>
          <div className="mb-2">
            <div className="flex items-center ">
              <GiBookmarklet className="text-4xl text-green-500 " />
              <h3 className="text-3xl font-bold text-green-600">BOOK-TOPIA</h3>
            </div>
          </div>
          <div className="text-gray-500">
            Providing reliable tech since 1992
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              <FaTwitter className="w-6 h-6 hover:ring-2 hover:ring-gray-500 transition duration-300 ease-in-out" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              <FaFacebook className="w-6 h-6 hover:ring-2 hover:ring-gray-500 transition duration-300 ease-in-out" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              <FaYoutube className="w-6 h-6 hover:ring-2 hover:ring-gray-500 transition duration-300 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-0 w-full">
        <div className=" text-center mt-10 text-gray-400 w-fit flex mx-auto">
          &copy; {currentYear}<GiBookmarklet className="text-xl text-green-700"/> BOOKTOPIA.  All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
