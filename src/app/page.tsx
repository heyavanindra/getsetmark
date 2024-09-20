import Image from "next/image";
import { BackgroundLines } from "./components/BackgroundLines";
import OurServices from "./components/OurServices";
import Footer from "./components/Footer";

export default function Home() {
  return <>
  <BackgroundLines></BackgroundLines>
  <OurServices></OurServices>
  <Footer></Footer>
  
  </>;
}
