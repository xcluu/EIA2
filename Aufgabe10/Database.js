// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var baumkonfig;
(function (baumkonfig) {
    //klasse fuer alle waren
    var Database = /** @class */ (function () {
        function Database() {
            //erstellt leere instanzen der warenkategorien
            this.baeume = [];
            this.halterungen = [];
            this.schmuck = [];
        }
        Database.prototype.addBaum = function (b) {
            this.baeume.push(b);
        };
        Database.prototype.addSchmuck = function (s) {
            this.schmuck.push(s);
        };
        Database.prototype.addHalterung = function (h) {
            this.halterungen.push(h);
        };
        Database.prototype.getBaum = function (id) {
            for (var _i = 0, _a = this.baeume; _i < _a.length; _i++) {
                var b = _a[_i];
                if (id == b.id) {
                    return b;
                }
            }
            console.log(id);
            return null;
        };
        Database.prototype.getAllBaume = function () {
            return this.baeume;
        };
        Database.prototype.getSchmuck = function (id) {
            for (var _i = 0, _a = this.schmuck; _i < _a.length; _i++) {
                var b = _a[_i];
                if (id == b.id) {
                    return b;
                }
            }
            console.log("not found");
            return null;
        };
        Database.prototype.getAllSchmuck = function () {
            return this.schmuck;
        };
        Database.prototype.getHalterung = function (id) {
            for (var _i = 0, _a = this.halterungen; _i < _a.length; _i++) {
                var b = _a[_i];
                if (id == b.id) {
                    return b;
                }
            }
            console.log("not found");
            return null;
        };
        Database.prototype.getAllHalterungen = function () {
            return this.halterungen;
        };
        return Database;
    }());
    baumkonfig.Database = Database;
    var Warenkorb = /** @class */ (function () {
        function Warenkorb() {
            this.warenList = [];
            this.li = [];
        }
        Warenkorb.prototype.addWare = function (w) {
            //aktuelle ware wird dem warenkorb hinzugefuegt
            this.warenList.push(w);
            console.log(this.warenList);
            //listenelement zum anzeigen des warenkorbs
            var li = document.createElement("li");
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
        };
        //funktion zum aendern der anzahl
        Warenkorb.prototype.updateWare = function (w) {
            for (var i = 0; i < this.warenList.length; i++) {
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
        };
        //funktionen zum entfernen der ware
        Warenkorb.prototype.removeWare = function (id) {
            for (var i = 0; i < this.warenList.length; i++) {
                if (this.warenList[i].id == id) {
                    baumkonfig.products[i].parentNode.removeChild(baumkonfig.products[i]);
                    this.warenList.splice(i);
                    this.li.splice(i);
                    return true;
                }
            }
        };
        //funktion zur preisberechnung
        Warenkorb.prototype.calcPrice = function () {
            var result = 0;
            for (var i = 0; i < this.warenList.length; i++) {
                result += this.warenList[i].preis * this.warenList[i].nKorb;
                result = result * 100 / 100;
            }
            baumkonfig.liprice.innerHTML = "Gesamtpreis: ";
            baumkonfig.liprice.innerHTML += "&emsp;" + result + "0€";
            return result;
        };
        //funktion zum anzeigen der jeweiligen warenpreise im warenkorb
        Warenkorb.prototype.calcIndividualPrice = function (i) {
            var result = 0;
            result = this.warenList[i].preis * this.warenList[i].nKorb;
            return result;
        };
        return Warenkorb;
    }());
    baumkonfig.Warenkorb = Warenkorb;
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=Database.js.map