/* eslint-disable react/prop-types */
import { GiBookmarklet } from "react-icons/gi";
import { FaList } from "react-icons/fa";
import {
  FiGrid,
  FiHeart,
  FiShoppingCart,
  FiSun,
  FiPlusCircle,
} from "react-icons/fi"; // Replace with correct icons

const Header = ({ handleView,listView }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white/50 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <GiBookmarklet className="text-4xl text-green-500" />
      </div>

      {/* Search bar */}
      <div className=" mx-4 w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-green-100 rounded-md focus:outline-none focus:ring ring-green-500"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button onClick={handleView}>
          {listView
          ? <FiGrid className="text-2xl text-gray-700"/>
          : <FaList className="text-2xl text-gray-700"/>
        }
        </button>
        <button>
          <FiHeart className="text-2xl text-yellow-500" />
        </button>
        <button>
          <FiShoppingCart className="text-2xl text-red-500" />
        </button>
        <button>
          <FiSun className="text-2xl text-gray-700" />
        </button>
        <button className="flex items-center  md:px-4 md:py-2 text-sm font-medium text-green-600 md:border border-green-600 rounded-md hover:bg-green-100">
          <FiPlusCircle className="mr-2 text-2xl" />
          <span className="hidden md:block">Add Book</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
