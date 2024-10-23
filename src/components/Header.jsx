/* eslint-disable react/prop-types */
import { GiBookmarklet } from "react-icons/gi";
import { FaList, FaHeart } from "react-icons/fa";
import { MdFolderDelete } from "react-icons/md";
// import { IoMoonOutline } from "react-icons/io5";
import { FiGrid, FiSun, FiPlusCircle } from "react-icons/fi";

const Header = ({
  handleView,
  listView,
  open,
  isfilterdbyfav,
  showFavouriteBooks,
  searchquery,
  handleChange,
}) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white/50 backdrop-blur-md shadow-md fixed top-0 w-full z-40">
      {/* Logo */}
      <div className="flex items-center">
        <GiBookmarklet className="text-4xl text-green-500" />
      </div>

      {/* Search bar */}
      <div className=" mx-4 w-1/2">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-green-100 rounded-md focus:outline-none focus:ring ring-green-500"
          value={searchquery}
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button onClick={handleView}>
          {listView ? (
            <FiGrid className="text-2xl text-gray-700" />
          ) : (
            <FaList className="text-2xl text-gray-700" />
          )}
        </button>
        <button onClick={showFavouriteBooks} id="favourite">
          <FaHeart
            className={`text-2xl ${
              isfilterdbyfav ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        </button>
        <button>
          <MdFolderDelete className="text-3xl text-red-500" />
        </button>
        <button>
          <FiSun className="text-2xl text-gray-700" />
        </button>
        {/* <button>
          <IoMoonOutline className="text-2xl dark:text-white text-gray-700" />
        </button> */}
        <button
          onClick={open}
          className="flex items-center  md:px-4 md:py-2 text-sm font-medium text-green-600 md:border border-green-600 rounded-md hover:bg-green-100"
        >
          <FiPlusCircle className="mr-2 text-2xl" />
          <span className="hidden md:block">Add Book</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
