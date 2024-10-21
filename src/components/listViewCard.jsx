/* eslint-disable react/prop-types */

import { FaEdit, FaStar, FaHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const ListViewCard = ({ book, handleDetails }) => {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto bg-[#FAF7F0] rounded-lg shadow-lg p-6 flex items-center space-x-4 h-40">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            className="h-32 w-24 object-cover"
            src={book.image_url}
            alt={book.bookname}
          />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800">{book.bookname}</h3>
          <p className="text-sm text-gray-500">{book.writer}</p>

          {/* Rating and Publisher */}
          <div className="flex items-center mt-2">
            <span className="flex items-center text-yellow-500">
              {book.rating} <FaStar className="ml-1" />
            </span>
            <span className="mx-2">|</span>
            <span className="text-sm text-yellow-600">{book.publication}</span>
          </div>

          {/* Price */}
          <h2 className="text-xl font-bold text-indigo-700">
            {book.price}
            <span className="font-extrabold text-xl -space-x-4">৳</span>
          </h2>
        </div>
        {/* right side content  */}
        <div className="flex flex-col h-full justify-between">
          {/* Icons */}
          <div className="flex flex-col items-center md:flex-row md:space-x-4 space-y-3 md:space-y-0 text-xl md:text-3xl">
            <FaEdit className="text-yellow-500  cursor-pointer" />
            <FaHeart color="gray" className=" cursor-pointer" />
            <MdDeleteForever className="text-red-500  cursor-pointer" />
          </div>

          {/* Button */}
          <button onClick={()=>handleDetails(book)} className="bg-green-600 text-white px-2 md:px-6 py-2 rounded-lg text-lg font-semibold flex">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default ListViewCard;
