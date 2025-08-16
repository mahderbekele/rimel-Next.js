import Image from "next/image";
import Header from "./components/header";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Main from "./pages/home";
import SignIn from "./pages/sign-in";
import Signup from "./pages/sign-up";
import ProductCarousel from "./pages";
import HomePage from "./pages/category";

export default function Home() {
  return (
    <div>
<Header />
<Navbar />
<Main />
{/* <ProductCarousel /> */}
<HomePage />

{/* <Signup /> */}
{/* <SignIn /> */}
      <Footer/>

     
    </div>
  );
}
