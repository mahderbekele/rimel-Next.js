import Image from "next/image";
import Header from "./components/header";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Main from "./pages/home";

import HomePage from "./pages/category";
import Music from "./pages/music";


export default function Home() {
  return (
    <div>
<Header />
<Navbar />
<Main />
{/* <ProductCarousel /> */}
<HomePage />
<Music />
{/* <ExploreProducts /> */}

{/* <Signup /> */}
{/* <SignIn /> */}
      <Footer/>

     
    </div>
  );
}
