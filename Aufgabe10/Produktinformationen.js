// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var baumkonfig;
(function (baumkonfig) {
    //klasse fuer baeume
    var InfoBaum = /** @class */ (function () {
        function InfoBaum(name, preis) {
            //abstract
            baumkonfig.Ware.counter++;
            this.id = "Baum " + baumkonfig.Ware.counter; //eigene id
            this.name = name;
            this.preis = preis;
            this.nKorb = 1; //standardmaessig 1 im warenkorb
        }
        return InfoBaum;
    }());
    baumkonfig.InfoBaum = InfoBaum;
    //klasse fuer schmuck
    var InfoSchmuck = /** @class */ (function () {
        function InfoSchmuck(name, preis, farbe) {
            baumkonfig.Ware.counter++;
            this.id = "Schmuck " + baumkonfig.Ware.counter;
            this.name = name;
            this.preis = preis;
            this.farbe = farbe;
            this.nKorb = 1; //standardmaessig 1 im warenkorb
        }
        return InfoSchmuck;
    }());
    baumkonfig.InfoSchmuck = InfoSchmuck;
    //klasse fuer halterungen
    var InfoHalterung = /** @class */ (function () {
        function InfoHalterung(farbe, preis) {
            baumkonfig.Ware.counter++;
            this.id = "Halterung " + baumkonfig.Ware.counter;
            this.name = "Halterung";
            this.farbe = farbe;
            this.preis = preis;
            this.nKorb = 1; //standardmaessig 1 im warenkorb
        }
        return InfoHalterung;
    }());
    baumkonfig.InfoHalterung = InfoHalterung;
    function loadInfo() {
        baumkonfig.data.addBaum(new InfoBaum("Nordmanntanne", 24.90));
        baumkonfig.data.addBaum(new InfoBaum("Fichte", 24.90));
        baumkonfig.data.addBaum(new InfoBaum("Edeltanne", 99.90));
        baumkonfig.data.addBaum(new InfoBaum("Kiefer", 24.90));
        baumkonfig.data.addHalterung(new InfoHalterung("grün", 14.90));
        baumkonfig.data.addHalterung(new InfoHalterung("schwarz", 14.90));
        baumkonfig.data.addHalterung(new InfoHalterung("keine", 0.00));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Kerze", 0.90));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Lichterkette", 9.90));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "rot"));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "gold"));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Kugel", 4.90, "silber"));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "blau"));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "grün"));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Anhänger", 0.90));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "rot"));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "gold"));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "silber"));
        baumkonfig.data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "blau"));
    }
    baumkonfig.loadInfo = loadInfo;
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=Produktinformationen.js.map