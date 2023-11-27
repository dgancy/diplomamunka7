import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "react-bootstrap";
import recfa from "./Photos/Slider/recfa.png";
import masterfea from "./Photos/Slider/masterfea.png";
import rbtree from "./Photos/Slider/rbtree.png";
import binarytfea from "./Photos/Slider/binarytfea.png";
import backfea from "./Photos/Slider/backfea.PNG";
import hashfea from "./Photos/Slider/hashfea.jpg";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function goToRekurzios() {
  navigate("/recursion-tree-assignment");
}
function goToMester() {
  navigate("/master-theorem-assignment");
}
function goToHash() {
  navigate("/hash-table-assignment");
}
function goToPffa() {
  navigate("/red-black-tree-assignment");
}
function goToVissza() {
  navigate("/backtracking-assignment");
}
function goToBfa() {
  navigate("/binary-tree-assignment");
}

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const containerStyle = {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  };

  const textContainerStyle = {
    position: "absolute",
    bottom: 0,
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
  };

  const imgStyle = {
    filter: "blur(7px)",
  };

  const contentStyle = {
    textAlign: "left",
    paddingTop: "2%",
    paddingLeft: "35%",
    paddingRight: "25%",
  };

  return (
    <form style={{ paddingTop: "1%" }}>
      <section
        style={{
          border: "1px solid black",
          width: "1000px",
          height: "400px",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider {...settings}>
          <section>
            <div style={containerStyle}>
              <div style={textContainerStyle}>
                <h3>Rekurziós fa</h3>
                <p>Próbáld ki a Rekurziós fa módszert!</p>
                <Button onClick={goToRekurzios}>Irány a feladat</Button>
              </div>
              <img src={recfa} style={imgStyle} alt="Rekurziós fa" />
            </div>
          </section>
          <section>
            <div style={containerStyle}>
              <div style={textContainerStyle}>
                <h3>Mester tétel</h3>
                <p>Próbáld ki a Mester módszert!</p>
                <Button onClick={goToMester}>Irány a feladat</Button>
              </div>
              <img src={masterfea} style={imgStyle} alt="Rekurziós fa" />
            </div>
          </section>
          <section>
            <div style={containerStyle}>
              <div style={textContainerStyle}>
                <h3>Bfa</h3>
                <p>Próbáld ki a Bfa feladatot!</p>
                <Button onClick={goToBfa}>Irány a feladat</Button>
              </div>
              <img src={binarytfea} style={imgStyle} alt="Rekurziós fa" />
            </div>
          </section>
          <section>
            <div style={containerStyle}>
              <div style={textContainerStyle}>
                <h3>Hash tábla</h3>
                <p>Próbáld ki a Hash tábla feladatot!</p>
                <Button onClick={goToHash}>Irány a feladat</Button>
              </div>
              <img src={hashfea} style={imgStyle} alt="Rekurziós fa" />
            </div>
          </section>
          <section>
            <div style={containerStyle}>
              <div style={textContainerStyle}>
                <h3>Piros-fekete fa</h3>
                <p>Próbáld ki a Piros-fekete fa feladatot!</p>
                <Button onClick={goToPffa}>Irány a feladat</Button>
              </div>
              <img src={rbtree} style={imgStyle} alt="Rekurziós fa" />
            </div>
          </section>
          <section>
            <div style={containerStyle}>
              <div style={textContainerStyle}>
                <h3>Visszalépéses keresés</h3>
                <p>Próbáld ki a Visszalépéses keresést!</p>
                <Button onClick={goToVissza}>Irány a feladat</Button>
              </div>
              <img src={backfea} style={imgStyle} alt="Rekurziós fa" />
            </div>
          </section>
        </Slider>
      </section>
      <div style={contentStyle}>
        <h2>Tanulás segítő</h2>
        <p>
          {" "}
          Maga az oldal azt a célt szolgálja, hogy bizonyos tárgyakra a
          felkészülés hatékonyságát javítsa a hallgatók számára. Tartalmaz egy
          fogalomtárat, ami a jegyzetek menüpont alatt található bejelentkezést
          követően. Itt fellelhető az eddig feldolgozott tárgyak elméleti
          anyaga. A feladatok menüpont alatt találhatóak a tárgyakra vonatkozó
          feladatok. ahol felaatonként található egy menüpont, amely generál egy
          feladatot és a megoldást követően kiértékel a feladatra adott
          válaszokat. A Teszt menüponton a hallgató elindíthat egy tesztet,
          amely tartamazza a tárgy feladatait. A teszten vétett hibákat pedig a
          Chatbot segítségével lehetséges lekérdezni, amire egy rövid leírást
          fog kapni a felhasználó.
        </p>
        <p>Jelenleg feldolgozott tárgyak: Adatstruktúrák és Algoritmusok II.</p>
      </div>
    </form>
  );
};

export default Home;
