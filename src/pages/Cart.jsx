/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListViewCard from "../components/listViewCard";
import CartCalc from "../components/cartCalc";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

let ArrayOfbooks = [
  {
    id: crypto.randomUUID(),
    bookname: "মহিমান্বিত কুরআন",
    writer: "অনুবাদক মাওলানা আশরাফ আলী থানভী",
    details:
      "কুরআনের প্রতিটি সূরার উপর বিশদ আলোচনা এবং ইসলামিক জীবনবিধানকে সহজভাবে উপস্থাপন করা হয়েছে। এ গ্রন্থটি ধর্মীয় দৃষ্টিভঙ্গি ও মানব জীবনের প্রতিটি ক্ষেত্রে ইসলামিক বিধান তুলে ধরে।",
    price: "550",
    rating: 4,
    image_url: "/images/book1.svg",
    publication: "ইসলামী ফাউন্ডেশন",
    isfavourite: false,
  },
  {
    id: crypto.randomUUID(),
    bookname: "ইসলামী সভ্যতার চিকিৎসা",
    writer: "ড. শফিকুর রহমান",
    details:
      "ইসলামি সভ্যতার বিকাশ, সংরক্ষণ এবং আধুনিক সভ্যতার মুখোমুখি চ্যালেঞ্জসমূহ নিয়ে রচিত। এই বইটি ইসলামি সংস্কৃতির অবক্ষয় রোধের জন্য দিকনির্দেশনা দেয়।",
    price: 800,
    rating: 4,
    image_url: "/images/book2.svg",
    publication: "সালসাবিল পাবলিকেশন্স",
    isfavourite: false,
  },
  {
    id: crypto.randomUUID(),
    bookname: "ইমাম নববীর চিল্লিশ হাদিস",
    writer: "ইমাম নববী (রহ.)",
    details:
      "ইসলামের মৌলিক শিক্ষার উপর ভিত্তি করে ৪০টি হাদিসের ব্যাখ্যা। এই হাদিসগুলো মুসলমানদের জীবন ও আচরণের জন্য অত্যন্ত গুরুত্বপূর্ণ।",
    price: 650,
    rating: 5,
    image_url: "/images/book3.svg",
    publication: "ইসলামী ফাউন্ডেশন",
    isfavourite: false,
  },
  {
    id: crypto.randomUUID(),
    bookname: "নবীজির দিনলিপি ﷺ",
    writer: "শাইখ মুহাম্মাদ বিন আবদুল ওহাব",
    details:
      "রাসুলুল্লাহ (ﷺ) এর প্রতিদিনের জীবনচক্র এবং তার কর্মকাণ্ড নিয়ে বিশদ আলোচনা। এটি রাসুলুল্লাহ (ﷺ) এর জীবনবিধানের একটি গুরুত্বপূর্ণ দিক তুলে ধরে।",
    price: 550,
    rating: 3,
    image_url: "/images/book5.svg",
    publication: "দারুস সালাম",
    isfavourite: false,
  },
];
const Cart = () => {
  const [cartProducts, setCartProducts] = useState(ArrayOfbooks || []);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully", {
        onClose: () => navigate("/login"),
      });
    } catch (error) {
      toast.error("An error occurred while logging out", error);
    }
  };

  return (
    <>
      <Header />
      <div className="p-20 mt-20 grid grid-cols-[2fr,1fr] min-h-[80vh] gap-20 relative">
        {/* product section  */}
        <section className="flex flex-col gap-2">
          <button onClick={handleLogout} className="p-2 rounded-md bg-blue-400 absolute right-5 top-2">
            SignOut
          </button>
          {cartProducts.map((book) => {
            return (
              <div key={book.id}>
                <ListViewCard book={book} />
              </div>
            );
          })}
        </section>
        {/* price calculation section  */}
        <section>
          <CartCalc />
        </section>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
