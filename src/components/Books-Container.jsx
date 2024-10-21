/* eslint-disable react/prop-types */

import ListViewCard from "./listViewCard";
import BookCard from "./BookCard";
import { useState } from "react";
import BookDetailsModal from "./modals/BookDetailsModal";
export const BooksContainer = ({ books, listView }) => {
  // state for keep a single book object
  const [book, setBook] = useState({});
  // state for managing the book details modal
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  //-------- func for handling details modal
  const handleDetails = (b) => {
    setBook(b);
    setIsDetailsModalOpen(true);
  };

  return (
    <>
      {isDetailsModalOpen && (
        <BookDetailsModal
          book={book}
          closeModal={() => setIsDetailsModalOpen(false)}
        />
      )}
      <div className={`w-[95vw] md:w-[90vw] mx-auto  py-28 ${!listView?'flex flex-wrap gap-4 md:gap-8 justify-center':'space-y-8'}  `}>
        {/* // book gallary container */}
        {books.map((book) => {
          return (
            <div key={book.id}>
              {listView ? (
                <ListViewCard book={book} handleDetails={handleDetails} />
              ) : (
                <BookCard book={book} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
