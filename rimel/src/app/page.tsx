import Image from "next/image";
import Header from "./shared components/header";
import Navbar from "./shared components/nav";
import Footer from "./shared components/footer";
import Main from "./pages/home/component/intoduction";
import Sales from "./pages/home/component/index";
import HomePage from "./pages/home/component/category";
import Music from "./pages/home/component/music";
import Product from "./pages/home/component/products";
import Featured from "./pages/home/component/feature";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Main />
      <Sales />
      <HomePage />
      <Music />
      <Product />
      <Featured />
      <Footer />


    </div>
  );
}
