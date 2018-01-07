// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var baumkonfig;
(function (baumkonfig) {
    class Ware {
        constructor(name, preis, farbe) {
            Ware.counter++;
            this.id = "Ware " + Ware.counter;
            this.name = name;
            this.preis = preis;
            this.nKorb = 1;
            this.farbe = farbe;
        }
    }
    //counter zum holzaehlen der waren
    Ware.counter = 0;
    baumkonfig.Ware = Ware;
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=Ware.js.map