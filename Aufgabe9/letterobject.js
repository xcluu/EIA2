/*
Aufgabe 9: Erpresserbrief
Name: Claudia Wegen
Matrikel: 256214
Datum: 16.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var erpresserbrief;
(function (erpresserbrief) {
    var LetterObject = /** @class */ (function () {
        function LetterObject(asciicode, manager) {
            //manager wird mit buchstaben verknuepft
            this.manager = manager;
            this.htmlElement = document.createElement("div");
            this.htmlElement.innerHTML = String.fromCharCode(asciicode);
        }
        return LetterObject;
    }());
    erpresserbrief.LetterObject = LetterObject;
})(erpresserbrief || (erpresserbrief = {}));
//# sourceMappingURL=letterobject.js.map