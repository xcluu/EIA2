/*
Aufgabe 9: Erpresserbrief
Name: Claudia Wegen
Matrikel: 256214
Datum: 16.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var erpresserbrief;
(function (erpresserbrief) {
    var SelectionManager = /** @class */ (function () {
        function SelectionManager() {
            //arrays anfangs auf null gesetzt, damit keine fehlermeldung erscheint
            this.letterList = [];
            this.charrList = [];
            this.altDown = false;
            //Selection-Buchstaben werden erstellt
            for (var i = 65; i < 91; i++) {
                this.letterList.push(new erpresserbrief.SelectionLetter(i, this));
            }
            //eventlistener werden erstellt
            //(sprechen mithilfe von .bind(this) die Objekte an)
            document.addEventListener("keydown", this.keyDown.bind(this));
            document.addEventListener("keyup", this.keyUp.bind(this));
            document.getElementById("letter-section").addEventListener("mousedown", this.placeCharr.bind(this));
        }
        SelectionManager.prototype.placeCharr = function (event) {
            //platziert nach abfrage neuen Buchstaben
            if (this.selectedLetter != undefined && this.altDown == false)
                this.charrList.push(new erpresserbrief.Letter(this.selectedLetter.ascii, event, this));
        };
        SelectionManager.prototype.deleteCharr = function (charr) {
            //sucht im Array nach dem ausgewaehlten char und entfernt ihn im array und im html code
            for (var i = 0; i < this.charrList.length; i++) {
                if (charr == this.charrList[i]) {
                    document.getElementById("letter-section").removeChild(this.charrList[i].htmlElement);
                    this.charrList.splice(i, 1);
                    console.log("delete");
                }
            }
        };
        SelectionManager.prototype.keyDown = function (event) {
            //abfrage sucht nach im keyboard eingegebenen buchstaben und waehlt ihn aus
            for (var i = 0; i < this.letterList.length; i++) {
                if (event.keyCode == this.letterList[i].ascii) {
                    this.newSelected(this.letterList[i]);
                }
            }
            //bei drucken von alt -> ruft delete funktion auf und setzt boolean auf true, damit nicht ein neuer char platziert wird
            if (event.keyCode == 18) {
                if (this.selectedCharr != undefined)
                    this.deleteCharr(this.selectedCharr);
                this.altDown = true;
            }
        };
        SelectionManager.prototype.keyUp = function (event) {
            //wenn alt losgelassen wird -> setzt boolean wieder zurueck damit wieder neue chars platziert werden koennen
            if (event.keyCode == 18) {
                this.altDown = false;
            }
        };
        SelectionManager.prototype.newSelected = function (letter) {
            //aufrufe der funktionen, buchstabe wird ausgewaehlt
            this.resetSelColor();
            this.selectedLetter = letter;
            this.setSelColor();
        };
        SelectionManager.prototype.resetSelColor = function () {
            if (this.selectedLetter != undefined)
                this.selectedLetter.htmlElement.style.backgroundColor = "#ffffff";
        };
        SelectionManager.prototype.setSelColor = function () {
            this.selectedLetter.htmlElement.style.backgroundColor = "#b2ff0c";
        };
        return SelectionManager;
    }());
    erpresserbrief.SelectionManager = SelectionManager;
})(erpresserbrief || (erpresserbrief = {}));
//# sourceMappingURL=selectionmanager.js.map