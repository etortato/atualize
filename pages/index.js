import Image from "next/image";
import Carousel from "re-carousel";

function Texto(props) {
  return (
    <div
      style={{
        left: "50%",
        background: "rgba(255, 255, 255, 0.85)",
        zIndex: 2000,
        position: "absolute",
        bottom: "10%",
        transform: "translate(-50%)",
        padding: 20,
        borderRadius: 8,
        fontFamily: "sans-serif",
        fontSize: "x-large",
        fontWeight: "bold",
        width: "70%"
      }}
    >
      {props.text}
    </div>
  );
}

function Menu(props) {
  return (
    <div
      style={{
        float: "right",
        marginRight: "2%",
        color: "white",
        fontSize: 18,
        fontWeight: 800,
        fontFamily: "monospace",
        textTransform: "uppercase",
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
        <Image src="/Logo.png" width="190" height="80" />
      </div>
      <Menu text="ENTRE EM CONTATO"></Menu>
      <Menu text="ÁREAS DE ATUAÇÃO"></Menu>
      <Menu text="NOSSO TIME"></Menu>
      <Menu text="QUEM SOMOS"></Menu>
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
      <Texto text="Prestadora de serviços que atua na área da construção civil, reformas e manutenção. Uma empresa que do início de sua história até hoje viveu inúmeros desafios e aprendizados. Experiências que nos ensinaram a construir sonhos firmados em princípios de confiança, transparência, respeito, qualidade, eficiência, segurança e inovação." />
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
