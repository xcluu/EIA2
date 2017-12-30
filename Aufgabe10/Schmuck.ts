namespace baumkonfig {
    interface IntSchmuck {
        unterkat: string;
        farbe: string;
    }

    class Schmuck extends Ware implements IntSchmuck {
        unterkat: string;
        farbe: string;

        constructor(unterkat: string, farbe?: string) {
            super();
            this.unterkat = unterkat;
            this.farbe = farbe;
        }

    }
}