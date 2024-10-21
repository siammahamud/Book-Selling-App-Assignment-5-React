/* eslint-disable react/prop-types */

import ListViewCard from "./listViewCard";
import BookCard from "./BookCard";
export const BooksContainer = ({ books,listView }) => {
  return (
    // book gallary container
    <div className="flex flex-wrap my-28 gap-10 mx-2 md:mx-8 lg:mx-12 justify-center">
      {!listView? books.map((book) => {
       return (
        //book card
        <BookCard key={book.id} book={book} />
      )
      }):books.map((book)=>{
        return (
         <ListViewCard key={book.id} book={book}/>
        )
      })}
    </div>
  );
};
