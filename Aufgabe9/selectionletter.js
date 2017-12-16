var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
Aufgabe 9: Erpresserbrief
Name: Claudia Wegen
Matrikel: 256214
Datum: 16.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var erpresserbrief;
(function (erpresserbrief) {
    var SelectionLetter = /** @class */ (function (_super) {
        __extends(SelectionLetter, _super);
        function SelectionLetter(asciicode, manager) {
            var _this = _super.call(this, asciicode, manager) || this;
            _this.ascii = asciicode;
            _this.htmlElement.className = "selection-letter";
            _this.htmlElement.id = asciicode.toString();
            document.getElementById("selection-section").appendChild(_this.htmlElement);
            //bei mousedown auf einem der buchstaben wird die funktion select() aufgerufen
            _this.htmlElement.addEventListener("mousedown", _this.select.bind(_this));
            return _this;
        }
        SelectionLetter.prototype.select = function () {
            //ruft zum selektieren die funktion des managers auf
            this.manager.newSelected(this);
        };
        return SelectionLetter;
    }(erpresserbrief.LetterObject));
    erpresserbrief.SelectionLetter = SelectionLetter;
})(erpresserbrief || (erpresserbrief = {}));
//# sourceMappingURL=selectionletter.js.map