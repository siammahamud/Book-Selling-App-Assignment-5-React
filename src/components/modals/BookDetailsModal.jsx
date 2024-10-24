/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const BookDetailsModal = ({ book, closeModal,handleFavourite}) => {
  return (
    // outer div
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      {/* modal container  */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-8 w-full max-w-4xl h-auto relative dark:bg-gray-400"
      >
        {/* top content  */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold mb-6 text-green-500">
            Book Details
          </h2>
          <span className="space-x-6">
          <button onClick={() => handleFavourite(book.id)} className="text-2xl">
             {book.isfavourite? <FaHeart color="orange"/>: <FaHeart color="gray"/>}
            </button>
            <button className=" text-red-500" onClick={closeModal}>
              <AiOutlineClose size={24} />
            </button>
          </span>
        </div>
        {/* content  */}
        <div className="flex space-x-6">
          {/* image  */}
          <div className="p-5 h-[90%]  bg-[#F2FAF1] rounded-lg">
            <img
              src={book.image_url}
              alt={book.bookname}
              className="mx-auto rounded h-80 w-44"
            />
          </div>
          {/* description */}
          <div className="w-2/3  flex flex-col justify-between">
            <span>
              <h3 className="text-2xl font-bold">{book.bookname}</h3>
              <h4 className="text-lg text-gray-500">{book.writer}</h4>
            </span>
            <div className="flex items-center mt-2">
              <span className="flex items-center text-yellow-500">
                {book.rating} <FaStar className="ml-1" />
              </span>
              <span className="mx-2">|</span>
              <span className="text-sm text-yellow-600">
                {book.publication}
              </span>
            </div>
            <span>
              <h4 className="text-lg font-semibold">Book Review:</h4>
              <p className="text-gray-700">{book.details}</p>
            </span>

            <div className="flex justify-between">
              <p className="text-2xl font-semibold text-yellow-500">
                Price: {book.price} ৳
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsModal;
