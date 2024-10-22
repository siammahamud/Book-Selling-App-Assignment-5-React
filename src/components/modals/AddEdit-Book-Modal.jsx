/* eslint-disable react/prop-types */
import { useState } from "react";
import { TbXboxXFilled } from "react-icons/tb";
const AddBookModal = ({ close, onSubmit }) => {
  const [book, setBook] = useState({
    bookname: "",
    writer: "",
    image_url: "",
    details: "",
    rating: "",
    price: "",
    isfavourite: false,
  });
  const [error, setError] = useState("");

  //---------func for setting up the input values to book state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };
  //--------func for handle the form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !book.bookname.trim() ||
      !book.details.trim() ||
      !book.image_url.trim() ||
      !book.price.trim() ||
      !book.rating.trim() ||
      !book.writer.trim() ||
      !book.publication.trim()
    ) {
      setError("All input fields must be filled out...");
    } else {
      onSubmit(book);
      close();
    }
  };
 
  return (
    // modal wrapper
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50  ">
      {/* modal body  */}
      <div className="bg-white rounded-lg p-8 w-full max-w-2xl relative">
        {/* form title  and close button  */}
        <button
          className="absolute top-4 right-4 text-red-500 text-3xl"
          onClick={close}
        >
          <TbXboxXFilled />
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-green-500">
          Add a Book
        </h2>
        {/* form  */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-x-10 gap-y-4">
            <div>
              <label className="block font-medium">Book Name</label>
              <input
                type="text"
                name="bookname"
                value={book.bookname}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-medium">Rating</label>
              <input
                type="number"
                name="rating"
                value={book.rating}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-medium">Author Name</label>
              <input
                type="text"
                name="writer"
                value={book.writer}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-medium">Price</label>
              <input
                type="number"
                name="price"
                value={book.price}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-medium">Image URL</label>
              <input
                type="text"
                name="image_url"
                value={book.image_url}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-medium">Publication</label>
              <input
                type="text"
                name="publication"
                value={book.publication}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-lg bg-gray-100"
              />
            </div>
          </div>
          <div>
            {/* textarea  */}
            <label className="block font-medium">Book Details</label>
            <textarea
              name="details"
              value={book.details}
              onChange={handleChange}
              className="w-full px-4 py-1 border rounded-lg  bg-gray-100"
            ></textarea>
          </div>
          {/* error message  */}

          {error && <div className="text-center text-red-400">{error}</div>}

          {/* submit button  */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;
