/* eslint-disable react/prop-types */
import { IoFunnelOutline } from "react-icons/io5";
const FilterTerms = ({ filter, isfilter }) => {
  return (
    <div className="pt-20 mx-4 flex gap-4 text-green-500 bg-white dark:bg-black z-40">
      <IoFunnelOutline className="float-left" size={40} />
      <button
        onClick={filter}
        id="rating"
        className={`px-2 py-1 shadow-md h-fit  border-2 border-green-500 rounded-xl ${
          isfilter.rating && "bg-green-100"
        }`}
      >
        Filter by Rating
      </button>
      <button
        onClick={filter}
        id="price"
        className={`px-2 py-1 shadow-md h-fit  border-2 border-green-500 rounded-xl ${
          isfilter.price && "bg-green-100"
        }`}
      >
        Filter by Price
      </button>
      <button
        onClick={filter}
        id="name"
        className={`px-2 py-1 shadow-md h-fit  border-2 border-green-500 rounded-xl ${
          isfilter.name && "bg-green-100"
        }`}
      >
        Filter by Name
      </button>
    </div>
  );
};

export default FilterTerms;
