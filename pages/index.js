import Image from "next/image";
import Carousel from "re-carousel";

function Menu(props) {
  return (
    <div
      style={{
        float: "right",
        marginRight: "3%",
        color: "white",
        fontSize: 20,
        fontWeight: 800,
        fontFamily: "monospace",
        textTransform: "capitalize",
        cursor: "pointer",
        marginTop: "5%",
      }}
    >
      {props.text}
    </div>
  );
}

function Header() {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 2000,
        backgroundImage:
          "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.8))",
        width: "100%",
      }}
    >
      <div style={{ margin: "2%", display: "inline-grid" }}>
        <Image src="/logo.png" width="190" height="80" />
      </div>
      <Menu text="Entre em contato"></Menu>
      <Menu text="áreas de atuação"></Menu>
      <Menu text="quem somos"></Menu>
    </div>
  );
}

function Home() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <style jsx global>{`
        body {
          margin: 0px;
        }
      `}</style>
      <Header></Header>
      <div
        style={{
          top: "50%",
          left: "50%",
          background: "rgba(0,0,0,0.2)",
          position: "absolute",
          zIndex: 2000,
          color: "white"
        }}
      >
        ALGUM TEXTO BEM MANEIRO AQUI
      </div>
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
