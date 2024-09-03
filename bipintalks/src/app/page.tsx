import Image from "next/image";
import Headers from "./Components/Headers";
import Homepages from "./Pages/Homepages";
import Footers from "./Components/Footers";

export default function Home() {
  return (
    <>
      <Headers />
      <Homepages/>
      <Footers/>
    </>
  );
}
