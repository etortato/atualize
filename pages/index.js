import Image from "next/image";
import Carousel from "re-carousel";

function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <style jsx global>{`
        body {
            margin: 0px;
        }
      `}</style>
      <Carousel loop auto interval="7000">
        <Image key="1" src="/1.jpg" layout="fill" />
        <Image key="2" src="/2.jpg" layout="fill" />
        <Image key="3" src="/3.jpg" layout="fill" />
        <Image key="4" src="/4.jpg" layout="fill" />
        <Image key="5" src="/5.jpg" layout="fill" />
      </Carousel>
    </div>
  );
}

export default Home;
