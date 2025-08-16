

import Link from "next/link";
import Signup from "../pages/sign-up";
const Navbar = () => {
 return (
   <nav className="border border-gray-200 flex justify-between items-center p-4 bg-white text-black gap-5">
     <div className="font-bold text-[30px] ml-65">Exclusive</div>
     <ul className="flex space-x-20 text-[16px]">
       <li><a href="#" className="hover:underline">Home</a></li>
       <li><a href="#" className="hover:underline">Contact</a></li>
       <li><a href="#" className="hover:underline">About</a></li>
      <Link href={"/pages/sign-up"} className="hover:underline">Sign up</Link>
     </ul>
     <div className="relative text-[12px]">
       <input
         type="text"
         placeholder="What are you looking for?"
         className="border border-gray-200 bg-gray-200 p-2 pr-10 rounded"
       />
       <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
    
       </button>
     </div>
   </nav>
 );
};


export default Navbar;