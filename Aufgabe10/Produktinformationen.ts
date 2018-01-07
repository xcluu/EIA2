// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace baumkonfig {

    //klasse fuer baeume
    export class InfoBaum implements Ware {
        id: string;
        nKorb: number;
        name: string;
        preis: number;

        constructor(name: string, preis: number) {
            //abstract
            Ware.counter++;
            this.id = "Baum " + Ware.counter; //eigene id
            this.name = name;
            this.preis = preis;
            this.nKorb = 1; //standardmaessig 1 im warenkorb

        }
    }

    //klasse fuer schmuck
    export class InfoSchmuck implements Ware {
        id: string;
        nKorb: number;
        name: string;
        preis: number;
        farbe?: string; //optionaler parameter farbe

        constructor(name: string, preis: number, farbe?: string) {
            Ware.counter++;
            this.id = "Schmuck " + Ware.counter;
            this.name = name;
            this.preis = preis;
            this.farbe = farbe;
            this.nKorb = 1; //standardmaessig 1 im warenkorb
        }
    }

    //klasse fuer halterungen
    export class InfoHalterung implements Ware {
        id: string;
        nKorb: number;
        name: string;
        preis: number;
        farbe: string;

        constructor(farbe: string, preis: number) {
            Ware.counter++;
            this.id = "Halterung " + Ware.counter;
            this.name = "Halterung";
            this.farbe = farbe;
            this.preis = preis;
            this.nKorb = 1; //standardmaessig 1 im warenkorb
        }
    }

    export function loadInfo(): void {


        data.addBaum(new InfoBaum("Nordmanntanne", 24.90));
        data.addBaum(new InfoBaum("Fichte", 24.90));
        data.addBaum(new InfoBaum("Edeltanne", 99.90));
        data.addBaum(new InfoBaum("Kiefer", 24.90));


        data.addHalterung(new InfoHalterung("grün", 14.90));
        data.addHalterung(new InfoHalterung("schwarz", 14.90));
        data.addHalterung(new InfoHalterung("keine", 0.00));

        data.addSchmuck(new InfoSchmuck("Kerze", 0.90));
        data.addSchmuck(new InfoSchmuck("Lichterkette", 9.90));
        data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "rot"));
        data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "gold"));
        data.addSchmuck(new InfoSchmuck("Kugel", 4.90, "silber"));
        data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "blau"));
        data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "grün"));
        data.addSchmuck(new InfoSchmuck("Anhänger", 0.90));
        data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "rot"));
        data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "gold"));
        data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "silber"));
        data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "blau"));
    }
}