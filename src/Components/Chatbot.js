import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

let userName = "";
let qNumber = "";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const userMistakes = localStorage.getItem("usermistakes");
  console.log(userMistakes);

  const jsonObject = JSON.parse(userMistakes);

  const mistakesArray = [];
  mistakesArray.push(jsonObject);
  console.log(mistakesArray);

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
    } else {
      response = response || 'Nem értem a kérésedet, kérlek fogalmazd meg másképpen.';

      if (
        messageText.toLowerCase().includes("tárgy") ||
        messageText.toLowerCase().includes("tárgyról") ||
        messageText.toLowerCase().includes("téma") ||
        messageText.toLowerCase().includes("témában")
      ) {
        response =
          "Adatstruktúrák és Algoritmusok 2 tárggyal kapcsolatban tudlak informálni, kérlek válassz feladatot.";
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
        qNumber = 2;
      }
      if (
        (messageText.toLowerCase().includes("általános") ||
          messageText.toLowerCase().includes("magyarázata") ||
          messageText.toLowerCase().includes("magyarázat")) &&
        qNumber === 2
      ) {
        response =
          "Mester tétel általános magyarázata a következő: A mester tétel egy rekurzív egyenlet megoldására ad korlátot." +
          "Az egyenletnél az A nagyobb egyenlő, mint 1 a B nagyobb mint 1 és f(n) pedig egy adott függvény. " +
          " Példának ajánlom a következő egyenleteteket kipróbálni a webesfelületen: T(n)= 4T(n/3)+n , T(n)= 3T(n/5)+n , T(n)= 4T(n/4)+n. ";
      }
      if (
        messageText.toLowerCase().includes("rekurzió") ||
        messageText.toLowerCase().includes("rekurziós")
      ) {
        response =
          "Rekurziós módszer általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        qNumber = 1;
      }
      if (
        (messageText.toLowerCase().includes("általános") ||
          messageText.toLowerCase().includes("magyarázata") ||
          messageText.toLowerCase().includes("magyarázat")) &&
        qNumber === 1
      ) {
        response =
          "A helyettesítő módszer használtához, ad segítséget a rekurziós fa módszer." +
          "A helyettesítő módszer, egy kétlépésből álló megoldás sejtést teljes indukcióval igazoló módszer," +
          " melynek célja megtalálni egy adott függvény esetében megtalálni az aszimptotikus korlátokat egy adott megoldásra. " +
          " A módszer használata a következő: " +
          "A rekurziós képletből felépítunk egy fát, melynek szintjein elhelyezkedő csúcsok felelnek meg az adott szint költségének." +
          "A kapott sejtést, helyettesítő módszer használatával ellenőrizzük." +
          " Példának ajánlom a következő egyenleteteket kipróbálni a weboldalon: T(n)= 4T(n/3)+n . ";
      }
      if (
        messageText.toLowerCase().includes("bináris") ||
        messageText.toLowerCase().includes("bfa")
      ) {
        response =
          "Bináris keresőfa általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        qNumber = 3;
      }
      if (
        (messageText.toLowerCase().includes("általános") ||
          messageText.toLowerCase().includes("magyarázata") ||
          messageText.toLowerCase().includes("magyarázat")) &&
        qNumber === 3
      ) {
        response =
          "A bináris keresofák, ahogy azt a nevük is sugallja, bináris faként szervezett objektumok." +
          "A keresofákat láncolt struktúraként ábrázolhatjuk, ahol minden csúcs egy önálló objektum." +
          " Ez a feladat megoldás a bináris keresőfán végzett beszúrás és törlés műveleteinek végrehajtását" +
          "hajtja végre, amely megváltoztatja a bináris keresőfával ábrázolt dinamikus halmazt. ";
      }
      if (messageText.toLowerCase().includes("hash")) {
        response =
          "Hash tábla általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        qNumber = 4;
      }
      if (
        (messageText.toLowerCase().includes("általános") ||
          messageText.toLowerCase().includes("magyarázata") ||
          messageText.toLowerCase().includes("magyarázat")) &&
        qNumber === 4
      ) {
        response =
          "A hash táblát általában olyan adatszerkezet, amely a hasítófüggvények használatával állapítja meg, hogy melyik kulcshoz milyen érték tartozik." +
          "4 darab hash függvénnyel találkoztál az oktatáson, amelyek a követezőek:" +
          "Szimpla , Lineális , Dupla vagy Négyzetes." +
          "Ezekre a függvényekre megnézheted, hogy hogyan is működik a weboldalon a következőkre: ";
      }
      if (
        messageText.toLowerCase().includes("piros") &&
        messageText.toLowerCase().includes("fekete")
      ) {
        response =
          "Piros fekete fa általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        qNumber = 5;
      }
      if (
        (messageText.toLowerCase().includes("általános") ||
          messageText.toLowerCase().includes("magyarázata") ||
          messageText.toLowerCase().includes("magyarázat")) &&
        qNumber === 5
      ) {
        response =
          "A piros-fekete fa olyan bináris keresofa, melynek minden csúcsa egy extra bit információt " +
          "tartalmaz, ez a csúcs színe, amelynek értékei: piros vagy fekete. A csúcsok színezésének " +
          " korlátozásával biztosítható, hogy piros-fekete fában bármely, a gyökért ol levélig vezető út " +
          "hossza nem lehet nagyobb, mint a legrövidebb ilyen út hosszának kétszerese. Tehát az ilyen" +
          "fák megközelítőleg kiegyensúlyozottak." +
          " A feladatot akár az alábbi példára is megnézheti a weboldalon." +
          " A példa: 29,39,44,9,77,82,60,98,7,11,33,49";
      }
      if (messageText.toLowerCase().includes("visszalépéses")) {
        response =
          "Visszalépéses keresés általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
        qNumber = 6;
      }
      if (
        (messageText.toLowerCase().includes("általános") ||
          messageText.toLowerCase().includes("magyarázata") ||
          messageText.toLowerCase().includes("magyarázat")) &&
        qNumber === 6
      ) {
        response =
          "A visszalépéses keresés egy általános algoritmus ami, bizonyos számítási problémák megoldására." +
          " A feladat megoldás érme problémára is kiterjed amit szemléltet a weboldal adott pontja. " +
          " Példa feladat: <2,4,5,6> Apa, ElsőFiú, Testvér esetekre.";
      }
      if (
        messageText.toLowerCase().includes("legutóbbi") &&
        (messageText.toLowerCase().includes("érdekel") ||
          messageText.toLowerCase().includes("feladatmegoldás") ||
          messageText.toLowerCase().includes("feladatmegoldást"))
      ) {
        if (qNumber === 1) {
          if (mistakesArray.some((item) => item.rekurzios === "1000")) {
            response =
              "A feladat értékeit nem sikerült helyesen leolvasnod." +
              "Ennek módja a következő példa szerint: " +
              "T(n) = 3T(n/4) + n esetében az A elem lesz: 3, a B elem lesz: 4 és az f(n) elem lesz: n." +
              "Ez a szabály minden ilyen rekurziós módszer feladatra." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rekurzios === "1001")) {
            response =
              "A feladatmegoldásod közben rosszul számoltad ki, hogy mennyi is egy csúcs költsége." +
              "Ennek az értéknek a megadása úgy történik, hogy például egy T(n) = 3T(n/4)+n esetében" +
              "az n/4-et az i-edik hatványra kell emelni és a továbbiakban ezzel tovább dolgozni. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rekurzios === "1002")) {
            response =
              "A feladatmegoldásod közben rosszul számoltad ki az i-edik szinten elhelyezkedő a csúcsok számát." +
              "Ennek az értéknek a megadása úgy történik, hogy például egy T(n) = 3T(n/4)+n esetében" +
              "a 3T-ből a 3-ast i-edik hatványra kell emelni és azzal tovább dolgozni." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rekurzios === "1003")) {
            response =
              "A feladatmegoldásod közben rosszul számoltad ki az i-edik szint összköltségét." +
              "Ennek az értéknek a megadása úgy történik, hogy például egy T(n) = 3T(n/4)+n esetében" +
              "Egy csúcs költségét és az i-edik szinten elhelyezkedő csúcsok számát kell összeszorozni, vagyis 3^i * n/4^i. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rekurzios === "1004")) {
            response =
              "A feladatmegoldásodnál rosszul számoltad ki a fa magasságát." +
              "A famagasságát úgy tudod kiszámolni, hogy logaritmizálod T(n) = 3T(n/4)+n esetében az (n/4)-es elemet " +
              "vagyis jelen esetben a helyes eredmény log4n lesz. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rekurzios === "1005")) {
            response =
              "A feladatmegoldásodnál rosszul számoltad ki a levelek számát." +
              "A levelek számát úgy tudod kiszámolni, hogy A^log˘Bn. Ez T(n) = 3T(n/4)+n esetében a következőképpen néz ki" +
              "Először is ki kell számolni a 3-t a 4-es alapú logaritmus n-t, ami nlogˇ4^3. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rekurzios === "1006")) {
            response =
              "A feladatmegoldásodnál rosszul számoltad ki a Rekurzió nagyságrendjét." +
              "A Rekurzió nagyságrendje T(n) = 3T(n/4)+n esetében az egyenlet levezetést követően Θ(n) lesz." +
              "Ennek levezetését célravezetőbb tanulmányoznod a rekurziós fa oldalon." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
        }
        if (qNumber === 2) {
          if (mistakesArray.some((item) => item.mester === "2000")) {
            response =
              "A feladat értékeit nem sikerült helyesen leolvasnod." +
              "Ennek módja a következő példa szerint: " +
              "T(n) = 3T(n/4) + n esetében az A elem lesz: 3, a B elem lesz: 4, valamint az f(n) elem lesz: n." +
              "Ez a szabály minden ilyen mester módszer feladatra." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.mester === "2001")) {
            response =
              "A feladatmegoldásod közben rossz esetet választottál." +
              "Ennek szemléltetését a jegyzetek menüponton belül találod meg ahol szabály szinten" +
              "részletesebben le van írva, hogy nlogˇa ^b képlet elvégzését követően" +
              "összekell hasonlítani az értéket az n hatvány kitevőjének az értékével." +
              "Ha ez az érték nagyobb mint a kitevő akkor 1-es eset, ha egyenlő vele akkor 2-es, ha kisebb akkor pedig 3-as." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.mester === "2002")) {
            response =
              "A feladatmegoldásod közben rosszul választottad meg az Epsilon értékét." +
              "Epsilonnak értéket úgy választunk," +
              " hogy az adott eset függvényében kiegészítse az nlogˇa ^b képlet által kapott értéket." +
              "A korábbi példából kiindulva: T(n) = 3T(n/4) + n , ez 3-as eset és nlogˇa ^b képlet értéke" +
              "0.792, amihez az epsilon értéke:0.208, mivel így 0.792+0.208 = 1 vagyis megegyezik az n kitevőjével" +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.mester === "2003")) {
            response =
              "A feladatmegoldásod közben rosszul használtad az adott esetet." +
              "Ha 2.-es az adott feladat akkor nem kell alkalmaznunk rá az 1-es vagy 3-as eset műveleteit." +
              "Ha 1-es esetet választottál és hozzáadtál, akkor nem jól használtad az esetet," +
              "mivel 1-es eset esetében kivonni kell az nlogˇa ^b képlet eredményéből, mivel alapból nagyobb mint az n kitevője." +
              "0.792, amihez az epsilon értéke:0.208, mivel így 0.792+0.208 = 1 vagyis megegyezik az n kitevőjével" +
              ", így ez 3-as eset lesz. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.mester === "2004")) {
            response =
              "A feladatmegoldásodnál rosszul számoltad a Regularitási feltétel." +
              "Ennek számolása az eset alkalmazást követően történik és a Jegyzetek fül alatt található " +
              "adott esetre vonatkozóan kell megadni." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
        }
        if (qNumber === 3) {
          if (mistakesArray.some((item) => item.bfa === "3000")) {
            response =
              "Az adott feladatnál kevesebb mint, 4 elemet sem sikerült megoldanod. " +
              "Az adott feladat 2-es fokszámmal volt megadva tehát a gyökér elemenek maximum 3 eleme lehet" +
              " amíg a gyerek elemeknek pedig 4 a maximum száma az adott csúcsban. " +
              "A feladat számsorának mindig az első eleme kerül a gyökér csúcsba, majd a tőle kisebbek balra és a tőle nagyobbak jobbra. " +
              "Akár a feszítőfák esetében. Ezt követően pedig a számsor többi elemét is hasonló módon kell elhelyezni a korábbi szabályoknak megfelelően. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.bfa === "3001")) {
            response =
              "Az adott feladatnál a feladat nagyjából a felét sikerült megoldanod. " +
              "Az adott feladat 2-es fokszámmal volt megadva tehát a gyökér elemenek maximum 3 eleme lehet" +
              " amíg a gyerek elemeknek pedig 4 a maximum száma az adott csúcsban. " +
              "A feladat számsorának mindig az első eleme kerül a gyökér csúcsba, majd a tőle kisebbek balra és a tőle nagyobbak jobbra. " +
              "Akár a feszítőfák esetében. Ezt követően pedig a számsor többi elemét is hasonló módon kell elhelyezni a korábbi szabályoknak megfelelően. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.bfa === "3002")) {
            response =
              "Az adott feladatnál a feladat majdnem egészét sikerült megoldanod. " +
              "Az adott feladat 2-es fokszámmal volt megadva tehát a gyökér elemenek maximum 3 eleme lehet" +
              " amíg a gyerek elemeknek pedig 4 a maximum száma az adott csúcsban. " +
              "A feladat számsorának mindig az első eleme kerül a gyökér csúcsba, majd a tőle kisebbek balra és a tőle nagyobbak jobbra. " +
              "Akár a feszítőfák esetében. Ezt követően pedig a számsor többi elemét is hasonló módon kell elhelyezni a korábbi szabályoknak megfelelően. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
        }
        if (qNumber === 4) {
          if (mistakesArray.some((item) => item.hash === "4000")) {
            response =
              "Az adott feladatnál az adott elemeket lineális hash függvénny szerint kellett rendezni. " +
              "A Lineális hashelésnél az elemek értkékét leosztjuk a hashtábla hosszával, " +
              "majd az osztás maradéka alapján helyezzük el az elemeket a hash táblában. " +
              "Lineális hash esetében ha az adott mező már telített, akkor az adott mezőtől " +
              "jobbra haladunk addig ameddig nem találunk egy üres mezőt, majd azt feltöltjük az elemmel. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.hash === "4001")) {
            response =
              "Az adott feladatnál az adott elemeket Dupla hash függvénny szerint kellett rendezni. " +
              "A Dupla hashelésnél az elemek értkékét leosztjuk a hashtábla hosszával " +
              "majd az osztás maradéka alapján helyezzük el az elemeket a hash táblában. " +
              "Dupla hash esetében ha az adott mező már telített, akkor az adott elemhez tartozó 'h2'-es " +
              "értéket vesszük alapul és ugyanúgy kezeljük, mint az alapértéket. " +
              "Leosztunk és a maradék szerint helyezzük el az értéket." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.hash === "4002")) {
            response =
              "Az adott feladatnál az adott elemeket Négyzetes hash függvénny szerint kellett rendezni. " +
              "A Négyzetes hashelésnél az elemek értkékét leosztjuk a hashtábla hosszával " +
              "majd az osztás maradéka alapján helyezzük el az elemeket a hash táblában. " +
              "Négyzetes hash esetében ha az adott mező már telített, akkor a c0 és c1 elemeket használjuk fel. " +
              "Ezt tesszük, oly módon, hogy először a c0 0.ik kitevőjét adjuk hozzá az értékhez, majd a c1 első kitevőjét " +
              "és így tovább, amíg nem találunk egy üres cellát az értéknek. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
        }
        if (qNumber === 5) {
          if (
            mistakesArray.some(
              (item) =>
                item.rbtree === "5000" ||
                mistakesArray.some((item) => item.rbtree === "5100")
            )
          ) {
            response =
              "Az adott Piros fekete fa feladatnál az adott elemekből 4-nél kevesebb helyeztél el helyesen, és helyes színnel." +
              " A piros fekete fáknak 5 szabálya van. - Minden csúcsnak van színe ami piros vagy fekete lehet." +
              " - A gyökércsúcs színe mindig fekete. Amit helyesen is szineztél." +
              " - Minden levél vagyis NIL elem színe mindig fekete. Ez a feladat szempontjából nem releváns, mivel a felület alapból kezeli, ha nincs kitöltve." +
              " - A piros csúcsoknak mindkét gyereke mindig fekete. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " - Bármely csúcsból bármely levélig vezető úton ugyanannyi fekete csúcs van. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " Ezeket a szabályokat betartva kell megalkotni a piros fekete fát. " +
              " Ezenkívül pedig a balra és jobbra forgatást kell szem elött tartani, " +
              "mely feladata egyensúlyba hozni a fát, ha a jobb vagy bal oldalon 2-vel több elem lenne" +
              " az adott szülő csúcshoz képest." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rbtree === "5010")) {
            response =
              "Az adott Piros fekete fa feladatnál az adott elemek felét helyeztél el helyesen, és 4 elemnél kevesebbet helyes színnel." +
              " A piros fekete fáknak 5 szabálya van. Amelyből a következőket érdemes átnézned." +
              " - A piros csúcsoknak mindkét gyereke mindig fekete. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " - Bármely csúcsból bármely levélig vezető úton ugyanannyi fekete csúcs van. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " Ezenkívül pedig a balra és jobbra forgatást kell szem elött tartani, " +
              "mely feladata egyensúlyba hozni a fát, ha a jobb vagy bal oldalon 2-vel több elem lenne" +
              " az adott szülő csúcshoz képest." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rbtree === "5020")) {
            response =
              "Az adott Piros fekete fa feladatnál az adott elemek majdnem mindegyikét sikerült helyesen elhelyezned, szép munka, de 4 elemnél kevesebbet helyes színnel." +
              " A piros fekete fáknak 5 szabálya van. Amelyből a következőket érdemes átnézned." +
              " - A piros csúcsoknak mindkét gyereke mindig fekete. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " - Bármely csúcsból bármely levélig vezető úton ugyanannyi fekete csúcs van. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " Ezenkívül pedig a balra és jobbra forgatást kell szem elött tartani, " +
              "mely feladata egyensúlyba hozni a fát, ha a jobb vagy bal oldalon 2-vel több elem lenne" +
              " az adott szülő csúcshoz képest." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rbtree === "5001")) {
            response =
              "Az adott Piros fekete fa feladatnál az adott elemek felét sikerült helyesen elhelyezned helyes színnel." +
              " A piros fekete fáknak 5 szabálya van. Amelyből a következőket érdemes átnézned." +
              " - A piros csúcsoknak mindkét gyereke mindig fekete. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " - Bármely csúcsból bármely levélig vezető úton ugyanannyi fekete csúcs van. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " Ezenkívül pedig a balra és jobbra forgatást kell szem elött tartani, " +
              "mely feladata egyensúlyba hozni a fát, ha a jobb vagy bal oldalon 2-vel több elem lenne" +
              " az adott szülő csúcshoz képest." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rbtree === "5002")) {
            response =
              "Az adott Piros fekete fa feladatnál az adott elemek majdnem mindegyikét sikerült helyesen elhelyezned helyes színnel." +
              " Szép munka! Némi gyakorlással és a megoldásod ellenőrzésével, nem lesz hibád." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rbtree === "5110")) {
            response =
              "Az adott Piros fekete fa feladatnál az adott elemek felét helyeztél el helyesen, és 4 elemnél kevesebbet helyes színnel." +
              " A piros fekete fáknak 5 szabálya van. Amelyből a következőket érdemes átnézned." +
              " - A gyökércsúcs színe mindig fekete. Amit elvétettél." +
              " - A piros csúcsoknak mindkét gyereke mindig fekete. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " - Bármely csúcsból bármely levélig vezető úton ugyanannyi fekete csúcs van. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " Ezenkívül pedig a balra és jobbra forgatást kell szem elött tartani, " +
              "mely feladata egyensúlyba hozni a fát, ha a jobb vagy bal oldalon 2-vel több elem lenne" +
              " az adott szülő csúcshoz képest." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rbtree === "5020")) {
            response =
              "Az adott Piros fekete fa feladatnál az adott elemek majdnem mindegyikét sikerült helyesen elhelyezned, szép munka, de 4 elemnél kevesebbet helyes színnel." +
              " A piros fekete fáknak 5 szabálya van. Amelyből a következőket érdemes átnézned." +
              " - A gyökércsúcs színe mindig fekete. Amit elvétettél." +
              " - A piros csúcsoknak mindkét gyereke mindig fekete. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " - Bármely csúcsból bármely levélig vezető úton ugyanannyi fekete csúcs van. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " Ezenkívül pedig a balra és jobbra forgatást kell szem elött tartani, " +
              "mely feladata egyensúlyba hozni a fát, ha a jobb vagy bal oldalon 2-vel több elem lenne" +
              " az adott szülő csúcshoz képest." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rbtree === "5001")) {
            response =
              "Az adott Piros fekete fa feladatnál az adott elemek felét sikerült helyesen elhelyezned helyes színnel." +
              " A piros fekete fáknak 5 szabálya van. Amelyből a következőket érdemes átnézned." +
              " - A gyökércsúcs színe mindig fekete. Amit elvétettél." +
              " - A piros csúcsoknak mindkét gyereke mindig fekete. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " - Bármely csúcsból bármely levélig vezető úton ugyanannyi fekete csúcs van. Ezt a szabályt érdemes jobban áttanulmányoznod. " +
              " Ezenkívül pedig a balra és jobbra forgatást kell szem elött tartani, " +
              "mely feladata egyensúlyba hozni a fát, ha a jobb vagy bal oldalon 2-vel több elem lenne" +
              " az adott szülő csúcshoz képest." +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.rbtree === "5001")) {
            response =
              "Az adott Piros fekete fa feladatnál az adott elemek majdnem mindegyikét sikerült helyesen elhelyezned helyes színnel." +
              " Szép munka! Némi gyakorlással és a megoldásod ellenőrzésével, nem lesz hibád." +
              " De viszont a gyökércsúcs szinét elvétetted, mivel annak színe mindig fekete. " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
        }

        if (qNumber === 6) {
          if (mistakesArray.some((item) => item.mester === "6000")) {
            response =
              "Az adott Visszalépéses keresés feladatnál elrontotta az Elsőgyerek feladatot. " +
              " Ebben a feladatban, ha a megoldás kezdeményed például <1,4,5>, " +
              " akkor abban az esetben az Elsőgyerek feladat megoldása <1,4,5,6> vagyis " +
              " maga a <megoldáskezdemény> + <megoldáskezdemény utolsó elemének értéke + 1> " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.mester === "6001")) {
            response =
              "Az adott Visszalépéses keresés feladatnál elrontotta az Apa feladatot. " +
              " Ebben a feladatban, ha a megoldás kezdeményed például <1,4,5>, " +
              " akkor abban az esetben az Apa feladat megoldása <1,4> vagyis " +
              " maga a <megoldáskezdemény> - <megoldáskezdemény utolsó elemének értéke> " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
          if (mistakesArray.some((item) => item.mester === "6002")) {
            response =
              "Az adott Visszalépéses keresés feladatnál elrontotta a Testvér feladatot. " +
              " Ebben a feladatban, ha a megoldás kezdeményed például <1,4,6>, " +
              " akkor abban az esetben a Testvér feladat megoldása <1,4,5> vagyis " +
              " maga a <megoldáskezdemény utolsó elemének értéke - 1> " +
              "Ha van még kérdésed kérlek írd le egész mondtaban.";
          }
        }
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "system", content: response },
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
