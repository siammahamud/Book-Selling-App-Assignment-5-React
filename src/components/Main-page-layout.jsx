import { useState } from "react";
import { BooksContainer } from "./Books-Container";
import Header from "./Header";
const ArrayOfbooks = [
  {
    bookname: "মহিমান্বিত কুরআন",
    writer: "অনুবাদক মাওলানা আশরাফ আলী থানভী",
    details: "কুরআনের প্রতিটি সূরার উপর বিশদ আলোচনা এবং ইসলামিক জীবনবিধানকে সহজভাবে উপস্থাপন করা হয়েছে। এ গ্রন্থটি ধর্মীয় দৃষ্টিভঙ্গি ও মানব জীবনের প্রতিটি ক্ষেত্রে ইসলামিক বিধান তুলে ধরে।",
    price: "550",
    rating: 4,
    image_url: "/src/assets/images/book1.svg",
    publication: "ইসলামী ফাউন্ডেশন"
  },
  {
    bookname: "ইসলামী সভ্যতার চিকিৎসা",
    writer: "ড. শফিকুর রহমান",
    details: "ইসলামি সভ্যতার বিকাশ, সংরক্ষণ এবং আধুনিক সভ্যতার মুখোমুখি চ্যালেঞ্জসমূহ নিয়ে রচিত। এই বইটি ইসলামি সংস্কৃতির অবক্ষয় রোধের জন্য দিকনির্দেশনা দেয়।",
    price: 800,
    rating: 4,
    image_url: "/src/assets/images/book2.svg",
    publication: "সালসাবিল পাবলিকেশন্স"
  },
  {
    bookname: "ইমাম নববীর চিল্লিশ হাদিস",
    writer: "ইমাম নববী (রহ.)",
    details: "ইসলামের মৌলিক শিক্ষার উপর ভিত্তি করে ৪০টি হাদিসের ব্যাখ্যা। এই হাদিসগুলো মুসলমানদের জীবন ও আচরণের জন্য অত্যন্ত গুরুত্বপূর্ণ।",
    price: 650,
    rating: 5,
    image_url: "/src/assets/images/book3.svg",
    publication: "ইসলামী ফাউন্ডেশন"
  },
  {
    bookname: "নবীজির দিনলিপি ﷺ",
    writer: "শাইখ মুহাম্মাদ বিন আবদুল ওহাব",
    details: "রাসুলুল্লাহ (ﷺ) এর প্রতিদিনের জীবনচক্র এবং তার কর্মকাণ্ড নিয়ে বিশদ আলোচনা। এটি রাসুলুল্লাহ (ﷺ) এর জীবনবিধানের একটি গুরুত্বপূর্ণ দিক তুলে ধরে।",
    price: 550,
    rating: 3,
    image_url: "/src/assets/images/book5.svg",
    publication: "দারুস সালাম"
  },
  {
    bookname: "আর-রাহিকুল মাখতুম",
    writer: "শাইখ সাফিউর রহমান মোবারকপুরী",
    details: "রাসুলুল্লাহ (ﷺ) এর জীবনী এবং ইসলামের প্রাথমিক যুগের ঘটনাবলী নিয়ে রচিত অন্যতম বিখ্যাত সিরাত গ্রন্থ। এই বইটি একাধিক আন্তর্জাতিক পুরস্কার লাভ করেছে।",
    price: 900,
    rating: 4,
    image_url: "/src/assets/images/book6.svg",
    publication: "দারুস সালাম"
  },
  {
    bookname: "ইসলামের ইতিহাস",
    writer: "মাওলানা আবুল হাসান আলী নদভী",
    details: "ইসলামের প্রাথমিক যুগ থেকে আধুনিক যুগ পর্যন্ত ইতিহাসের গুরুত্বপূর্ণ ঘটনাবলী এবং ইসলামী সভ্যতার উন্নয়ন নিয়ে বিশদ আলোচনা।",
    price: 780,
    rating: 5,
    image_url: "/src/assets/images/book7.svg",
    publication: "মাকতাবাতুল আসার"
  },
  {
    bookname: "রুকইয়াহ",
    writer: "শাইখ সালিহ আল ফাওযান",
    details: "কুরআন ও সুন্নাহর আলোকে বিভিন্ন বিপদাপদ থেকে মুক্তির জন্য রুকইয়াহ প্রক্রিয়ার বিস্তারিত আলোচনা। এটি ইসলামী চিকিৎসার একটি গুরুত্বপূর্ণ অংশ।",
    price: 720,
    rating: 4,
    image_url: "/src/assets/images/book8.svg",
    publication: "সালসাবিল পাবলিকেশন্স"
  },
  {
    bookname: "ইমাম ভক্তের কাকল",
    writer: "ইবনে তাইমিয়া",
    details: "ইসলামের প্রচার ও প্রসারে ইমামদের ভূমিকা এবং তাদের জীবনকাহিনী নিয়ে রচিত। এই বইটি ইমামদের সংগ্রাম ও ত্যাগের গল্প তুলে ধরে।",
    price: 850,
    rating: 4,
    image_url: "/src/assets/images/book9.svg",
    publication: "ইসলামী ফাউন্ডেশন"
  },
  {
    bookname: "ছাহাবী জীবনের করুণ কাহিনী",
    writer: "মাওলানা মুতাফা উদ্দীন",
    details: "ছাহাবীদের জীবন থেকে শিক্ষা নেওয়ার মতো ঘটনাবলী এবং তাদের ইসলাম প্রতিষ্ঠার জন্য কৃত ত্যাগ ও সংগ্রামের উপর ভিত্তি করে লেখা।",
    price: 900,
    rating: 3,
    image_url: "/src/assets/images/book11.svg",
    publication: "দারুস সালাম"
  },
  {
    bookname: "ইসলামের আদর্শ জীবন",
    writer: "মুফতি তাকি উসমানী",
    details: "ইসলামের শিক্ষার আলোকে একটি আদর্শ জীবনের কীভাবে গঠন করা যায় সে বিষয়ে বিশদ আলোচনা। ইসলামিক জীবনব্যবস্থার সকল দিককে সহজভাবে উপস্থাপন করা হয়েছে।",
    price: 1000,
    rating: 5,
    image_url: "/src/assets/images/book10.svg",
    publication: "মাকতাবাতুল আসার"
  },
  {
    bookname: "রুকইয়াহ",
    writer: "শাইখ সালিহ আল ফাওযান",
    details: "কুরআন ও সুন্নাহর আলোকে বিভিন্ন বিপদাপদ থেকে মুক্তির জন্য রুকইয়াহ প্রক্রিয়ার বিস্তারিত আলোচনা। এটি ইসলামী চিকিৎসার একটি গুরুত্বপূর্ণ অংশ।",
    price: 720,
    rating: 4,
    image_url: "/src/assets/images/book4.svg",
    publication: "সালসাবিল পাবলিকেশন্স"
  }
];
 
export const MainPage = () => {
 
 const [books, setBooks] = useState(ArrayOfbooks)

  return (
    <>
    <Header/>
    <BooksContainer books={books}/>
    </>
  )
}
