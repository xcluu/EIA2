// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufg11;
(function (aufg11) {
    window.addEventListener("load", init);
    function init() {
        aufg11.data = new Database();
        aufg11.warenkorb = new Warenkorb();
        loadInfo();
        addSelects();
        createDisplayElements();
    }
})(aufg11 || (aufg11 = {}));
//# sourceMappingURL=main.js.map