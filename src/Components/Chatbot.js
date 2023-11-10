import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

let userName = "";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  let imageSrc;

  const handleUserMessage = (messageText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: messageText },
    ]);

    let response;

    if (userName === "") {
      userName = messageText;
      response = `Üdvözöllek ${messageText}! Milyen témában segíthetek?`;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "system", content: response },
      ]);
      console.log(userName);
    } else {
      if (
        messageText.toLowerCase().includes("tárgy") ||
        messageText.toLowerCase().includes("tárgyról") ||
        messageText.toLowerCase().includes("téma") ||
        messageText.toLowerCase().includes("témában")
      ) {
        response = "Algo2";
      }
      if (
        messageText.toLowerCase().includes("feladatokat") ||
        messageText.toLowerCase().includes("feladatot")
      ) {
        if (
          !messageText.toLowerCase().includes("mester") ||
          !messageText.toLowerCase().includes("rekurzió") ||
          !messageText.toLowerCase().includes("rekurziós") ||
          !messageText.toLowerCase().includes("bináris") ||
          !messageText.toLowerCase().includes("hash") ||
          (!messageText.toLowerCase().includes("piros") &&
            !messageText.toLowerCase().includes("fekete")) ||
          !messageText.toLowerCase().includes("visszalépéses")
        ) {
          response =
            "Kérlek írd le, mely feladatot nem érted a felsorolásból: Rekurziós módszer, Mester tétel, Bináris keresőfa, Hash tábla, Piros fekete fa, Visszalépéses keresés.";
        }
      }
      if (messageText.toLowerCase().includes("mester")) {
        response =
          "Mester tétel általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        if (
          messageText.toLowerCase().includes("általános") &&
          (messageText.toLowerCase().includes("magyarázata") ||
            messageText.toLowerCase().includes("magyarázat"))
        ) {
          imageSrc = "./mestertetel.png";

          response =
            "Mester tétel általános magyarázata a következő: A mester tétel egy rekurzív egyenlet megoldására ad korlátot." +
            "Az egyenletnél az A nagyobb egyenlő, mint 1 a B nagyobb mint 1 és f(n) pedig egy adott függvény. " +
            " Példának ajánlom a következő egyenleteteket kipróbálni a webesfelületen: T(n)= 4T(n/3)+n , T(n)= 3T(n/5)+n , T(n)= 4T(n/4)+n. " +
            "Három esete van ennek a módszernek:";
        }
      }
      if (
        messageText.toLowerCase().includes("rekurzió") ||
        messageText.toLowerCase().includes("rekurziós")
      ) {
        response =
          "Rekurziós módszer általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        if (
          messageText.toLowerCase().includes("általános") &&
          (messageText.toLowerCase().includes("magyarázata") ||
            messageText.toLowerCase().includes("magyarázat"))
        ) {
          imageSrc = "./rekurzios.png";

          response =
            "A helyettesítő módszer használtához, ad segítséget a rekurziós fa módszer." +
            "A helyettesítő módszer, egy kétlépésből álló megoldás sejtést teljes indukcióval igazoló módszer," +
            " melynek célja megtalálni egy adott függvény esetében megtalálni az aszimptotikus korlátokat egy adott megoldásra. " +
            " A módszer használata a következő: " +
            "A rekurziós képletből felépítunk egy fát, melynek szintjein elhelyezkedő csúcsok felelnek meg az adott szint költségének." +
            "A kapott sejtést, helyettesítő módszer használatával ellenőrizzük." +
            " Példának ajánlom a következő egyenleteteket kipróbálni a weboldalon: T(n)= 4T(n/3)+n . ";
        }
      }
      if (messageText.toLowerCase().includes("bináris")) {
        response =
          "Bináris keresőfa általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        if (
          messageText.toLowerCase().includes("általános") &&
          (messageText.toLowerCase().includes("magyarázata") ||
            messageText.toLowerCase().includes("magyarázat"))
        ) {
          imageSrc = "./bfa.png";

          response =
            "A bináris keresofák, ahogy azt a nevük is sugallja, bináris faként szervezett objektumok." +
            "A keresofákat láncolt struktúraként ábrázolhatjuk, ahol minden csúcs egy önálló objektum." +
            " Ez a feladat megoldás a bináris keresőfán végzett beszúrás és törlés műveleteinek végrehajtását hajtja végre, amely megváltoztatja a bináris keresőfával ábrázolt dinamikus halmazt. " +
            " A módszer használata a következő: " +
            " Ezt a feladatot jól szemlélteti a weboldalon kialakított feladatmegoldó.";
        }
      }
      if (messageText.toLowerCase().includes("hash")) {
        response =
          "Hash tábla általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        if (
          messageText.toLowerCase().includes("általános") &&
          (messageText.toLowerCase().includes("magyarázata") ||
            messageText.toLowerCase().includes("magyarázat"))
        ) {
          imageSrc = "./hash.png";

          response =
            "A hash táblát általában olyan adatszerkezet, amely a hasítófüggvények használatával állapítja meg, hogy melyik kulcshoz milyen érték tartozik." +
            "4 darab hash függvénnyel találkoztál az oktatáson, amelyek a követezőek:" +
            "Szimpla , Lineális , Dupla vagy Négyzetes." +
            "Ezekre a függvényekre megnézheted, hogy hogyan is működik a weboldalon a következőkre: ";
        }
      }
      if (
        messageText.toLowerCase().includes("piros") &&
        messageText.toLowerCase().includes("fekete")
      ) {
        response =
          "Piros fekete fa általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        if (
          messageText.toLowerCase().includes("általános") &&
          (messageText.toLowerCase().includes("magyarázata") ||
            messageText.toLowerCase().includes("magyarázat"))
        ) {
          imageSrc = "./pirosfeketeda.png";

          response =
            "A piros-fekete fa olyan bináris keresofa, melynek minden csúcsa egy extra bit információt " +
            "tartalmaz, ez a csúcs színe, amelynek értékei: piros vagy fekete. A csúcsok színezésének " +
            " korlátozásával biztosítható, hogy piros-fekete fában bármely, a gyökért ol levélig vezető út " +
            "hossza nem lehet nagyobb, mint a legrövidebb ilyen út hosszának kétszerese. Tehát az ilyen" +
            "fák megközelítőleg kiegyensúlyozottak." +
            " A feladatot akár az alábbi példára is megnézheti a weboldalon."+
             " A példa: 29,39,44,9,77,82,60,98,7,11,33,49";
        }
      }
      if (messageText.toLowerCase().includes("visszalépéses")) {
        response =
          "Visszalépéses keresés általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        if (
          messageText.toLowerCase().includes("általános") &&
          (messageText.toLowerCase().includes("magyarázata") ||
            messageText.toLowerCase().includes("magyarázat"))
        ) {
          imageSrc = "./visszalepeses.png";

          response =
            "A visszalépéses keresés egy általános algoritmus ami, bizonyos számítási problémák megoldására." +
            " A feladat megoldás érme problémára is kiterjed amit szemléltet a weboldal adott pontja. " +
            " Példa feladat: <2,4,5,6> Apa, ElsőFiú, Testvér esetekre.";
        }
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "system", content: response, imageSrc },
      ]);
    }
  };

  const handleButtonClick = () => {
    handleUserMessage(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    alert("Üdvözöllek! A kezdéshez kérlek gépeld, hogyan is szólíthatlak.");
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "60px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          height: "360px",
          width: "300px",
          border: "2px solid #ccc",
          overflowY: "scroll",
          marginBottom: "0px",
          background: "#000027",
          color: "white",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${message.role}Message`}
            style={{
              textAlign: message.role === "user" ? "right" : "left",
            }}
          >
            {message.content}
            {message.imageSrc && (
              <div>
                <img src={message.imageSrc} alt={message.imageAlt} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", width: "300px" }}>
        <input
          style={{ width: "250px", borderBottomLeftRadius: "10px" }}
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleUserMessage(inputValue);
              setInputValue("");
            }
          }}
        />
        <Button variant="warning" onClick={handleButtonClick}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
