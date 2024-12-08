

const CartCalc = () => {
  return (
    <div>
        <ul className="p-10 shadow-md rounded-md bg-indigo-300 text-lg py-20">
            <li className="text-white text-center font-bold text-2xl"> Checkout Summery</li>
            <li className="flex justify-between border-b p-2 border-black">
                <p>Subtotal</p>
                <p>0$</p>
            </li>
            <li className="flex justify-between border-b p-2 border-black">
                <p>Online Fee</p>
                <p>0$</p>
            </li>
            <li className="flex justify-between border-b p-2 border-black">
                <p>Total</p>
                <p>0$</p>
            </li>
           
            <li className="flex justify-between border-b p-2 border-black">
                <p>PayableTotal</p>
                <p>0$</p>
            </li>
            <button className="w-full rounded-md mt-6 p-2 bg-blue-600 font-semibold text-white">Proceed To Checkout</button>
          
           
        </ul>
    </div>
  )
}

export default CartCalc