/* eslint-disable react/prop-types */


const BookDetailsModal = ({book,closeModal}) => {
  return (
    <div onClick={closeModal} className="fixed h-full  w-full  bg-black z-50 p-10 ">
       <div onClick={(e)=>e.stopPropagation()} className="bg-white w-2/3 p-10">
         {/* image  */}
         <div>
            <img src={book.image_url} alt={book.bookname} />
        </div>
        {/* content  */}
        <h1>{book.bookname}</h1>
        <p>{book.publication}</p>
        <h3></h3>
        <p>{book.details}</p>
        {/* button and price  */}
        <div>
           <button>Buy Now</button>
           <p>{book.price}৳</p>
        </div>
       </div>
    </div>
  )

}

export default BookDetailsModal