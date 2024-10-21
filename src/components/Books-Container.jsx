/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
export const BooksContainer = ({ books }) => {
  return (
    // book gallary container
    <div className="flex flex-wrap my-10 gap-10 mx-10 justify-center">
      {books.map((book) => {
        return (
          //book card
          <div
            key={book.name}
            className="relative shadow-[1px_1px_5px_gray] dark:shadow-[0_0_4px_white] rounded-md group z-0 w-44 h-auto"
          >
            {/* book image  */}
            <div className="w-44 h-60">
              <img
                className="w-full h-60 rounded-md group-hover:opacity-70"
                src={book.image_url}
                alt={book.bookname}
              />
            </div>
            {/* book description  */}
            <div className="absolute bg-white/50 backdrop-blur-sm w-44 h-full opacity-0 group-hover:opacity-100 p-4 flex flex-col justify-between top-0 transition-all duration-500 rounded-md z-10 items-center border-2 border-black ">
              <div>
                <h3 className="font-bold">{book.bookname}</h3>
                <h4 className="text-sm">{book.writer}</h4>
                <h4 className="text-4xl mt-2 mx-10  font-semibol flex items-center text-[#3431fd]">
                  {book.rating}
                  <span className="text-3xl ">
                    <FaStar />
                  </span>
                </h4>
              </div>
              {/* icons  */}
              <div className="text-3xl flex justify-between w-full">
                <button>
                  <FaEdit color="green"/>
                </button>
                <button>
                  <FaRegHeart size={25} />
                </button>
                <button>
                  <MdDeleteForever color="red" />
                </button>
              </div>
              {/* price and button  */}
              <div className="flex justify-between w-full items-center">
                <h2 className="text-2xl font-bold text-indigo-700">
                  {book.price}
                  <span>&#2547;</span>{" "}
                </h2>
                <button className="px-2 py-1 bg-indigo-400 hover:bg-indigo-500 rounded-md ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
