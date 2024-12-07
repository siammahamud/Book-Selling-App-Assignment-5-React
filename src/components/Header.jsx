  /* eslint-disable react/prop-types */
import { GiBookmarklet } from "react-icons/gi";
import { FaList, FaHeart } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { FiGrid, FiSun, FiPlusCircle } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";

const Header = ({
  handleView,
  listView,
  open,
  isfilterdbyfav,
  showFavouriteBooks,
  searchquery,
  handleChange,
  toggleTheme,
  theme,
}) => {
  return (
    <header className="dark:bg-dark dark:border-b-2 dark:border-slate-400 flex justify-between items-center p-4 bg-white/50 backdrop-blur-md shadow-md fixed top-0 w-full z-40">
      {/* Logo */}
      <div className="flex items-center">
        <GiBookmarklet className="text-4xl text-green-500" />
      </div>

      {/* Search bar */}
      <div className="dark:text-black mx-4 w-1/2">
        <input
          id="search-bar"
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-green-100 rounded-md focus:outline-none focus:ring ring-green-500"
          value={searchquery}
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 ">
        <button onClick={handleView}>
          {listView ? (
            <FiGrid className=" dark:text-white text-2xl text-gray-700" />
          ) : (
            <FaList className="dark:text-white text-2xl text-gray-700" />
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
        <BsCart4  className="text-2xl  text-red-400"/>
        </button>
        <button onClick={toggleTheme} className="relative w-8 h-6 text-2xl">
          <IoMoonOutline
            className={`absolute top-0 transition-all duration-500 ease-in-out fill-current text-yellow-500 transform ${
              theme === "dark"
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-180 scale-0"
            }`}
          />
          <FiSun className={`absolute top-0 transition-all duration-500 ease-in-out fill-current text-yellow-500 transform ${
              theme === "dark"
                ? "opacity-0 -rotate-180 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }`}/>
        </button>
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
