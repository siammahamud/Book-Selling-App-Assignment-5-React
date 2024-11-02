/* eslint-disable react/prop-types */
import NoBook from "../components/NoBook";
import ListViewCard from "./listViewCard";
import BookCard from "./BookCard";

export const BooksContainer = ({
  books,
  listView,
  handleDlt,
  handleDetails,
  handleFavourite,
  handleEditBook
}) => {
  return (
    <>
      {books.length < 1 && <NoBook />}
      <div
        className={`dark:bg-dark  w-[95vw] md:w-[90vw] mx-auto py-10 min-h-[70vh] ${
          !listView
            ? "flex flex-wrap gap-4 md:gap-8 justify-center"
            : "space-y-8"
        } `}
      >
        {/* // book gallary container */}
        {books.map((book) => {
          return (
            <div className="h-fit" key={book.id}>
              {listView ? (
                <ListViewCard
                  book={book}
                  handleDetails={handleDetails}
                  handleDlt={handleDlt}
                  handleFavourite={handleFavourite}
                  handleEditBook={handleEditBook}
                />
              ) : (
                <BookCard
                  book={book}
                  handleDetails={handleDetails}
                  handleDlt={handleDlt}
                  handleFavourite={handleFavourite}
                  handleEditBook={handleEditBook}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
