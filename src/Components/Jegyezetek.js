import React from "react";
import rekurziosFa from "./Photos/rekurziosfa.png";
import mesterTetelAlt from "./Photos/mesterfeaalt.PNG";
import mesterTetelei from "./Photos/mestertetelekfix2.PNG";
import mesterTetelFeladat from "./Photos/mestertetelpelda.PNG";
import rekurziosFaFeladat from "./Photos/rekurziosfafeladat.PNG";
import pirosFeketeFaFeladat from "./Photos/pirosfeketefafeladat.PNG";
import bfaFeladat from "./Photos/bfafeladat.PNG";
import visszalepesesFeladat from "./Photos/visszalfeladat.PNG";
import hashFeladat from "./Photos/hashfeladat.png";

export default function Jegyezetek() {
  return (
    <form>
      <div className="blog-container">
        <div className="section">
          <h2>Rekurziós fa módszer</h2>
          <p>
            A rekurziós fa minden egyes csúcsa egy részfeladatnak felel meg, a
            függvény kiértékelésekor végrehajtódó minden rekurziós híváshoz
            tartozik egy csúcs. Szintenként összegezzük a csúcsok költségét,
            majd az így kapott szintenkénti költségeket összegezzük, hogy
            megkapjuk a teljes költséget. Oszdmeg-és-uralkodj elvet használó
            algoritmusok elemzésénél a rekurziós fa nagyon kényelmes eszköznek
            bizonyul. A rekurziós fa módszert leginkább egy jó sejtés
            megtalálására érdemes használni, amit aztán a helyettesíto
            módszerrel ellenőrzünk.
          </p>
          <img src={rekurziosFa} alt="Rekurzios fa" />
          <p>Egy példa az adott módszer használatára:</p>
          <img src={rekurziosFaFeladat} alt="Rekurzios fa példa" />
        </div>

        <div className="section">
          <h2>Mester Tétel</h2>
          <p>
            A mester módszer alakú(1) rekurzív egyenletek megoldására, ahol a ≥
            1 és b nagyobb, mint 1 állandók, és az f(n) aszimptotikusan pozitív
            függvény.
          </p>
          <img src={mesterTetelAlt} alt="Mester tétel általános formája" />
          <p>
            A korábban említett mester módszernek, három esetét különböztetjük
            meg:
          </p>
          <img src={mesterTetelei} alt="Mester tétel esetei" />
          <p>Példa egy mester tétel megoldásra:</p>
          <img src={mesterTetelFeladat} alt="Mester tétel példa feladat" />
        </div>

        <div className="section">
          <h2>Piros fekete fa</h2>
          <p>
            A piros-fekete fa olyan bináris keresőfa, melynek minden csúcsa egy
            extra bit információt tartalmaz, ez a csúcs színe, amelynek értékei:
            piros vagy fekete. A csúcsok színezésének korlátozásával
            biztosítható, hogy piros-fekete fában bármely, a gyökértől levélig
            vezető út hossza nem lehet nagyobb, mint a legrövidebb ilyen út
            hosszának kétszerese. Tehát az ilyen fák megközelítőleg
            kiegyensúlyozottak. A fa minden csúcsa tartalmazza a szín, kulcs,
            bal, jobb és szülő mezőket. Ha egy csúcshoz tartozó gyerek vagy
            szülő nem létezik, akkor a megfelelőmező a "nil" értéket
            tartalmazza. Úgy tekintjük, hogy az ilyen nil mutató értékek a
            bináris keresőfa külső (levél) csúcsaira mutatnak, míg a fa kulcsot
            tartalmazó csúcsai a belső csúcsok. Egy bináris keresőfa
            piros-fekete fa, ha teljesülnek rá a következő tulajdonság:
            <p>1. Minden csúcs színe vagy piros, vagy fekete.</p>
            <p>2. A gyökércsúcs színe fekete.</p>
            <p>3. Minden levél (nil) színe fekete.</p>
            <p>4. Minden piros csúcsnak mindkét gyereke fekete.</p>
            <p>
              5. Bármely csúcsból bármely levélig vezeto úton ugyanannyi fekete
              csúcs van.
            </p>
          </p>
          <p>Példa Piros fekete fára: (43,23,76,98,32,65,10,2,12,34)</p>
          <img src={pirosFeketeFaFeladat} alt="Piros fekete fa példa" />
        </div>

        <div className="section">
          <h2>Bfa</h2>
          <p>
            A bfa, ahogy azt a nevük is sugallja, bináris faként
            szervezett objektumok. A keresofákat láncolt struktúraként
            ábrázolhatjuk, ahol minden csúcs egy önálló objektum. Minden csúcs a
            kulcs mező és a hozzákapcsolódó adatok mellett tartalmaz egy bal,
            egy jobb és egy szülő nevű mezőt is, amelyek rendre a csúcs bal
            oldali és jobb oldali gyerekére, illetve szülőjére mutatnak. Ha
            hiányzik valamelyik gyerek vagy a szülő, akkor a megfelelőmező a nil
            értéket tartalmazza. A gyökér az egyedüli olyan csúcs a fában,
            melynek szülő mutatója nil. A beszúrás és törlés műveleteinek
            végrehajtása megváltoztatja a bináris keresőfával ábrázolt dinamikus
            halmazt. A módosítást természetesen úgy kell végrehajtani, hogy a
            bináriskeresőfa tulajdonság megmaradjon. Egy új elem beszúrása
            viszonylag egyszerű, a törlés kezelése azonban már kissé
            bonyolultabb.
          </p>
          <p>Példa egy bináriskeresőfa megoldásra:</p>
          <img src={bfaFeladat} alt="Bfa példa" />
        </div>

        <div className="section">
          <h2>Visszalépéses keresés</h2>
          <p>
            A visszalépéses (backtracking) keresés egy algoritmus, amelyet
            általában problémák megoldására alkalmaznak, ahol szükség van egy
            döntéshozási fára. Az algoritmus "visszalép", amikor egy adott út
            nem vezet a megoldáshoz, és próbálkozik más útvonalakkal. Itt egy
            egyszerű példa egy visszalépéses keresésre egy mélységi keresési
            módszerrel
          </p>
          <p>Példa egy visszalépéses feladat megoldásra:</p>
          <img src={visszalepesesFeladat} alt="Visszalépéses keresés feladat" />
        </div>

        <div className="section">
          <h2>Hash tábla</h2>
          <p>
            A hashtábla (vagy hashfa) egy olyan adatszerkezet, amely a kulcsokat
            egy hash-függvény segítségével tárolja el. A hashfa alkalmazása
            lehetővé teszi az optimális keresési időt (átlagos esetben O(1)), és
            hatékony kollíziókezelést biztosít. A hashfát gyakran használják
            gyors és hatékony kulcs-érték párok tárolására. Minden típusú hashfa
            saját alkalmazási területekkel rendelkezik, és a választott típus
            attól függ, hogy milyen konkrét problémát szeretnél megoldani az
            alkalmazásodban.
          </p>
          <p>Példa egy mester tétel megoldásra:</p>
          <img src={hashFeladat} alt="Hash tábla példa" />
        </div>
      </div>
    </form>
  );
}
