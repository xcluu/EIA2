// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var baumkonfig;
(function (baumkonfig) {
    window.addEventListener("load", init);
    function init() {
        baumkonfig.data = new baumkonfig.Database();
        baumkonfig.warenkorb = new baumkonfig.Warenkorb();
        baumkonfig.loadInfo();
        baumkonfig.addSelects();
        baumkonfig.createDisplayElements();
    }
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=main.js.map