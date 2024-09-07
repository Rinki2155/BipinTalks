import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Homepages from "../pages/Homepages";

export default function Home() {
  return (
    <>
    <Navbar />
    <Homepages/>
   <Footer/>
    </>
  );
}
