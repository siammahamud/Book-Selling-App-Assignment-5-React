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
}) => {
  return (
    <>
      {books.length < 1 && <NoBook />}
      <div
        className={`dark:bg-dark  w-[95vw] md:w-[90vw] mx-auto py-10 ${
          !listView
            ? "flex flex-wrap gap-4 md:gap-8 justify-center"
            : "space-y-8"
        } `}
      >
        {/* // book gallary container */}
        {books.map((book) => {
          return (
            <div key={book.id}>
              {listView ? (
                <ListViewCard
                  book={book}
                  handleDetails={handleDetails}
                  handleDlt={handleDlt}
                  handleFavourite={handleFavourite}
                />
              ) : (
                <BookCard
                  book={book}
                  handleDetails={handleDetails}
                  handleDlt={handleDlt}
                  handleFavourite={handleFavourite}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
