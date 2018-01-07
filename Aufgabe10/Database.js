// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var baumkonfig;
(function (baumkonfig) {
    //klasse fuer alle waren
    class Database {
        constructor() {
            //erstellt leere instanzen der warenkategorien
            this.baeume = [];
            this.halterungen = [];
            this.schmuck = [];
        }
        addBaum(b) {
            this.baeume.push(b);
        }
        addSchmuck(s) {
            this.schmuck.push(s);
        }
        addHalterung(h) {
            this.halterungen.push(h);
        }
        getBaum(id) {
            for (let b of this.baeume) {
                if (id == b.id) {
                    return b;
                }
            }
            console.log(id);
            return null;
        }
        getAllBaume() {
            return this.baeume;
        }
        getSchmuck(id) {
            for (let b of this.schmuck) {
                if (id == b.id) {
                    return b;
                }
            }
            console.log("not found");
            return null;
        }
        getAllSchmuck() {
            return this.schmuck;
        }
        getHalterung(id) {
            for (let b of this.halterungen) {
                if (id == b.id) {
                    return b;
                }
            }
            console.log("not found");
            return null;
        }
        getAllHalterungen() {
            return this.halterungen;
        }
    }
    baumkonfig.Database = Database;
    class Warenkorb {
        constructor() {
            this.warenList = [];
            this.li = [];
        }
        addWare(w) {
            //aktuelle ware wird dem warenkorb hinzugefuegt
            this.warenList.push(w);
            console.log(this.warenList);
            //listenelement zum anzeigen des warenkorbs
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.id = w.id;
            li.innerHTML = w.nKorb.toString() + "&emsp;";
            li.innerHTML += w.name;
            if (w.farbe != null)
                li.innerHTML += ", " + w.farbe;
            li.innerHTML += "&emsp;" + w.preis.toString() + "0€";
            this.li.push(li);
            baumkonfig.products = this.li;
            //neuer preis wird berechnet
            console.log(this.calcPrice());
        }
        //funktion zum aendern der anzahl
        updateWare(w) {
            for (let i = 0; i < this.warenList.length; i++) {
                if (this.warenList[i].id == w.id) {
                    this.warenList[i].nKorb = w.nKorb;
                    this.li[i].innerHTML = this.warenList[i].nKorb.toString() + "&emsp;";
                    this.li[i].innerHTML += this.warenList[i].name;
                    if (this.warenList[i].farbe != null)
                        this.li[i].innerHTML += ", " + this.warenList[i].farbe;
                    this.li[i].innerHTML += "&emsp;" + this.calcIndividualPrice(i).toString() + "0€";
                    baumkonfig.products[i] = this.li[i];
                    console.log(this.warenList);
                    console.log(this.calcPrice());
                }
            }
        }
        //funktionen zum entfernen der ware
        removeWare(id) {
            for (let i = 0; i < this.warenList.length; i++) {
                if (this.warenList[i].id == id) {
                    baumkonfig.products[i].parentNode.removeChild(baumkonfig.products[i]);
                    this.warenList.splice(i);
                    this.li.splice(i);
                    return true;
                }
            }
        }
        //funktion zur preisberechnung
        calcPrice() {
            let result = 0;
            for (let i = 0; i < this.warenList.length; i++) {
                result += this.warenList[i].preis * this.warenList[i].nKorb;
            }
            baumkonfig.liprice.innerHTML = "Gesamtpreis: ";
            baumkonfig.liprice.innerHTML += "&emsp;" + result + "0€";
            return result;
        }
        //funktion zum anzeigen der jeweiligen warenpreise im warenkorb
        calcIndividualPrice(i) {
            let result = 0;
            result = this.warenList[i].preis * this.warenList[i].nKorb;
            return result;
        }
    }
    baumkonfig.Warenkorb = Warenkorb;
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=Database.js.map