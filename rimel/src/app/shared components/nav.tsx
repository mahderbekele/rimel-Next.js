import Link from "next/link";

const Navbar = () => (
  <nav className="border border-gray-200 flex justify-between items-center p-4 bg-white text-black gap-5 ml-30">
    <div className="font-bold text-[30px]">Exclusive</div>
    <ul className="flex space-x-20 text-[16px]">
      <li>
        <Link href="/" className="hover:underline">Home</Link>
      </li>
      <li>
        <Link href="/category" className="hover:underline">Category</Link>
      </li>
      <li>
        <Link href="/feature" className="hover:underline">Feature</Link>
      </li>
      <li>
        <Link href="/pages/sign-up" className="hover:underline">Sign Up</Link>      </li>
    </ul>
    <div className="relative text-[12px]">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="border border-gray-200 bg-gray-200 p-2 pr-10 rounded"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"></button>
    </div>
  </nav>
);

export default Navbar;
