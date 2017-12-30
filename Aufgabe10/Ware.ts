namespace baumkonfig {
    interface IntWare {
        nKorb: number;
        nLager: number;
        preis: number;
        titel: string;
    }

    export class Ware implements IntWare {
        nKorb: number;
        nLager: number;
        preis: number;
        titel: string;

        constructor() {
            //abstract
        }

    }
}