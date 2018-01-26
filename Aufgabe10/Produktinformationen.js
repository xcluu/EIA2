// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufg11;
(function (aufg11) {
    //klasse fuer baeume
    var InfoBaum = /** @class */ (function () {
        function InfoBaum(name, preis) {
            //abstract
            Ware.counter++;
            this.id = "Baum " + Ware.counter; //eigene id
            this.name = name;
            this.preis = preis;
            this.nKorb = 1; //standardmaessig 1 im warenkorb
        }
        return InfoBaum;
    }());
    aufg11.InfoBaum = InfoBaum;
    //klasse fuer schmuck
    var InfoSchmuck = /** @class */ (function () {
        function InfoSchmuck(name, preis, farbe) {
            Ware.counter++;
            this.id = "Schmuck " + Ware.counter;
            this.name = name;
            this.preis = preis;
            this.farbe = farbe;
            this.nKorb = 1; //standardmaessig 1 im warenkorb
        }
        return InfoSchmuck;
    }());
    aufg11.InfoSchmuck = InfoSchmuck;
    //klasse fuer halterungen
    var InfoHalterung = /** @class */ (function () {
        function InfoHalterung(farbe, preis) {
            Ware.counter++;
            this.id = "Halterung " + Ware.counter;
            this.name = "Halterung";
            this.farbe = farbe;
            this.preis = preis;
            this.nKorb = 1; //standardmaessig 1 im warenkorb
        }
        return InfoHalterung;
    }());
    aufg11.InfoHalterung = InfoHalterung;
    function loadInfo() {
        aufg11.data.addBaum(new InfoBaum("Nordmanntanne", 24.90));
        aufg11.data.addBaum(new InfoBaum("Fichte", 24.90));
        aufg11.data.addBaum(new InfoBaum("Edeltanne", 99.90));
        aufg11.data.addBaum(new InfoBaum("Kiefer", 24.90));
        aufg11.data.addHalterung(new InfoHalterung("grün", 14.90));
        aufg11.data.addHalterung(new InfoHalterung("schwarz", 14.90));
        aufg11.data.addHalterung(new InfoHalterung("keine", 0.00));
        aufg11.data.addSchmuck(new InfoSchmuck("Kerze", 0.90));
        aufg11.data.addSchmuck(new InfoSchmuck("Lichterkette", 9.90));
        aufg11.data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "rot"));
        aufg11.data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "gold"));
        aufg11.data.addSchmuck(new InfoSchmuck("Kugel", 4.90, "silber"));
        aufg11.data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "blau"));
        aufg11.data.addSchmuck(new InfoSchmuck("Kugel", 0.90, "grün"));
        aufg11.data.addSchmuck(new InfoSchmuck("Anhänger", 0.90));
        aufg11.data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "rot"));
        aufg11.data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "gold"));
        aufg11.data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "silber"));
        aufg11.data.addSchmuck(new InfoSchmuck("Lametta", 4.90, "blau"));
    }
    aufg11.loadInfo = loadInfo;
})(aufg11 || (aufg11 = {}));
//# sourceMappingURL=Produktinformationen.js.map