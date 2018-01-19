// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace baumkonfig {

    //klasse fuer alle waren
    export class Database {
        baeume: InfoBaum[];
        halterungen: InfoHalterung[];
        schmuck: InfoSchmuck[];


        constructor() {
            //erstellt leere instanzen der warenkategorien
            this.baeume = [];
            this.halterungen = [];
            this.schmuck = [];

        }


        addBaum(b: InfoBaum): void {
            this.baeume.push(b);
        }

        addSchmuck(s: InfoSchmuck): void {
            this.schmuck.push(s);
        }

        addHalterung(h: InfoHalterung): void {
            this.halterungen.push(h);
        }


        getBaum(id: string): InfoBaum {
            for (let b of this.baeume) {
                if (id == b.id) {
                    return b;
                }

            }
            console.log(id);
            return null;
        }


        getAllBaume(): InfoBaum[] {

            return this.baeume;

        }


        getSchmuck(id: string): InfoSchmuck {
            for (let b of this.schmuck) {
                if (id == b.id) {
                    return b;
                }

            }
            console.log("not found");
            return null;
        }

        getAllSchmuck(): InfoSchmuck[] {

            return this.schmuck;

        }

        getHalterung(id: string): InfoHalterung {
            for (let b of this.halterungen) {
                if (id == b.id) {
                    return b;
                }

            }
            console.log("not found");
            return null;
        }

        getAllHalterungen(): InfoHalterung[] {

            return this.halterungen;

        }

    }




    export class Warenkorb {


        warenList: Ware[] = [];
        li: HTMLLIElement[] = [];

        addWare(w: Ware): void {
            //aktuelle ware wird dem warenkorb hinzugefuegt
            this.warenList.push(w);
            console.log(this.warenList);

            //listenelement zum anzeigen des warenkorbs
            let li: HTMLLIElement = document.createElement("li");
            li.className = "list-group-item";
            li.id = w.id;
            li.innerHTML = w.nKorb.toString() + "&emsp;";
            li.innerHTML += w.name;
            if (w.farbe != null)
                li.innerHTML += ", " + w.farbe;
            li.innerHTML += "&emsp;" + w.preis.toString() + "0€";

            this.li.push(li);

            products = this.li;
            //neuer preis wird berechnet
            console.log(this.calcPrice());
        }


        //funktion zum aendern der anzahl
        updateWare(w: Ware): void {
            for (let i: number = 0; i < this.warenList.length; i++) {

                if (this.warenList[i].id == w.id) {
                    this.warenList[i].nKorb = w.nKorb;


                    this.li[i].innerHTML = this.warenList[i].nKorb.toString() + "&emsp;";
                    this.li[i].innerHTML += this.warenList[i].name;
                    if (this.warenList[i].farbe != null)
                        this.li[i].innerHTML += ", " + this.warenList[i].farbe;
                    this.li[i].innerHTML += "&emsp;" + this.calcIndividualPrice(i).toString() + "0€";

                    products[i] = this.li[i];

                    console.log(this.warenList);
                    console.log(this.calcPrice());
                }
            }
        }

        //funktionen zum entfernen der ware
        removeWare(id: string): boolean {
            for (let i: number = 0; i < this.warenList.length; i++) {
                if (this.warenList[i].id == id) {
                    products[i].parentNode.removeChild(products[i]);

                    this.warenList.splice(i);
                    this.li.splice(i);

                    return true;

                }
            }

        }

        //funktion zur preisberechnung
        calcPrice(): number {

            let result: number = 0;


            for (let i: number = 0; i < this.warenList.length; i++) {
                result += this.warenList[i].preis * this.warenList[i].nKorb;
                result = result * 100 / 100;
            }

            liprice.innerHTML = "Gesamtpreis: ";
            liprice.innerHTML += "&emsp;" + result + "0€";

            return result;

        }

        //funktion zum anzeigen der jeweiligen warenpreise im warenkorb
        calcIndividualPrice(i: number): number {

            let result: number = 0;

            result = this.warenList[i].preis * this.warenList[i].nKorb;

            return result;
        }


    }

}