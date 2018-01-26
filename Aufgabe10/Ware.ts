// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace aufg11 {
    export interface IntWare {

        id: string;
        nKorb: number;
        preis: number;
        name: string;
        farbe?: string;
    }

    export class Ware implements IntWare {
        //counter zum holzaehlen der waren
        static counter: number = 0;
        id: string;
        nKorb: number;
        preis: number;
        name: string;
        farbe?: string;

        constructor(name: string, preis: number, farbe?: string) {
            Ware.counter++;
            this.id = "Ware " + Ware.counter;
            this.name = name;
            this.preis = preis;
            this.nKorb = 1;
            this.farbe = farbe;
        }

    }


}

