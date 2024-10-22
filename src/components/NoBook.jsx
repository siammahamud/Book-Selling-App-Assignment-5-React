import { MdErrorOutline } from "react-icons/md";
const NoBook = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <MdErrorOutline size={60}/>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">No Books Found.....</h1>
        <p className="text-gray-600 mb-4">
          Sorry, we couldn't find any books matching your search criteria.
        </p>
      </div>
    </div>
  );
};

export default NoBook;
