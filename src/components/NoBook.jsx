import { MdErrorOutline } from "react-icons/md";
const NoBook = () => {
  return (
    <div className="dark:bg-dark -mt-20 flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-lg dark:bg-gray-300">
        <MdErrorOutline size={60} color="red"/>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">No Books Found.....</h1>
        <p className="text-gray-600 mb-4">
          Sorry, we couldn not find any books matching your search criteria.
        </p>
      </div>
    </div>
  );
};

export default NoBook;
