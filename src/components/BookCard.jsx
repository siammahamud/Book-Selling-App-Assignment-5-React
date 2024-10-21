/* eslint-disable react/prop-types */
import { FaEdit, FaStar, FaHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const BookCard = ({ book }) => {
  return (
    <div
    key={book.id}
    className="relative shadow-md dark:shadow-md rounded-lg group z-0 w-40 md:w-44 h-60 overflow-hidden"
  >
    {/* Book Image */}
    <div className="w-full h-full">
      <img
        className="w-full h-full rounded-lg group-hover:opacity-70 transition duration-300"
        src={book.image_url}
        alt={book.bookname}
      />
    </div>
  
    {/* Book Description */}
    <div className="absolute bg-[#FAF7F0]/60 backdrop-blur-sm w-44 h-full opacity-0 group-hover:opacity-100 p-2 flex flex-col justify-between top-0 transition-all duration-500 rounded-lg z-10 items-center border-2 border-gray-300">
      <div className="flex flex-col justify-between h-full">
        {/* Book Info */}
        <div className="text-center">
          <h3 className="font-bold  text-gray-800">{book.bookname}</h3>
          <h4 className="text-xs text-gray-600 mt-1">{book.writer}</h4>
          <div className="flex items-center mt-2">
          <span className="flex items-center text-yellow-500">
          {book.rating} <FaStar className="ml-1" />
          </span>
          <span className="mx-2">|</span>
          <span className="text-xs text-yellow-600">{book.publication}</span>
        </div>
        </div>
      <div>
        
        {/* Action Icons */}
        <div className="text-2xl flex justify-center w-full  space-x-6">
          <button className="text-green-600 hover:text-green-700">
            <FaEdit />
          </button>
          <button className="">
            <FaHeart color="gray" size={25} />
          </button>
          <button className="text-red-600 hover:text-red-700">
            <MdDeleteForever />
          </button>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between w-full items-center mt-3">
          <h2 className="text-xl font-bold text-indigo-700">
            {book.price}<span className="font-extrabold text-xl -space-x-4">৳</span>
          </h2>
          <button className="px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-600 rounded-md text-sm">
            Buy Now
          </button>
        </div>
      </div>

      </div>
    </div>
  </div>
  
  );
};

export default BookCard;
