/* eslint-disable react/prop-types */

import { FaStar, FaHeart, FaPenAlt, FaTrash } from "react-icons/fa";

const ListViewCard = ({book}) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4">
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
        <p className="text-sm text-gray-500">
        {book.writer}
        </p>

        {/* Rating and Publisher */}
        <div className="flex items-center mt-2">
          <span className="flex items-center text-yellow-500">
          {book.rating} <FaStar className="ml-1" />
          </span>
          <span className="mx-2">|</span>
          <span className="text-sm text-yellow-600">{book.publication}</span>
        </div>

        {/* Price */}
        <div className="mt-4 text-2xl font-bold text-green-600">{book.price}&#2547;</div>
      </div>
     {/* right side content  */}
     <div className="flex flex-col h-full justify-between">
         {/* Icons */}
      <div className="flex space-x-2">
        <FaPenAlt className="text-yellow-500 text-xl cursor-pointer" />
        <FaHeart className="text-pink-500 text-xl cursor-pointer" />
        <FaTrash className="text-red-500 text-xl cursor-pointer" />
      </div>

      {/* Button */}
      <button className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg font-semibold">
        Buy Now
      </button>
     </div>
    </div>
  );
};

export default ListViewCard;
