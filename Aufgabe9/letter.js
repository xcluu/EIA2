/**
 * Created by Claudia on 15.12.2017.
 */
/*
Aufgabe 9: Erpresserbrief
Name: Claudia Wegen
Matrikel: 256214
Datum: 16.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
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
var erpresserbrief;
(function (erpresserbrief) {
    var Letter = /** @class */ (function (_super) {
        __extends(Letter, _super);
        function Letter(asciicode, event, manager) {
            var _this = _super.call(this, asciicode, manager) || this;
            _this.htmlElement.className = "letter";
            _this.htmlElement.style.width = "40px";
            _this.htmlElement.style.height = "50px";
            _this.htmlElement.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
            _this.htmlElement.style.marginTop = (event.pageY - document.getElementById("letter-section").offsetTop - (parseInt(_this.htmlElement.style.height) / 2)) + "px";
            _this.htmlElement.style.marginLeft = event.pageX - (parseInt(_this.htmlElement.style.width) / 2) + "px";
            //element wird dem html code hinzugefuegt
            document.getElementById("letter-section").appendChild(_this.htmlElement);
            //bei mousedown auf einem der buchstaben wird die funktion delete aufgerufen
            _this.htmlElement.addEventListener("mousedown", _this.delete.bind(_this));
            return _this;
        }
        Letter.prototype.delete = function () {
            //uebergibt den ausgewaehlten buchstaben der managerclass
            this.manager.selectedCharr = this;
        };
        return Letter;
    }(erpresserbrief.LetterObject));
    erpresserbrief.Letter = Letter;
})(erpresserbrief || (erpresserbrief = {}));
//# sourceMappingURL=letter.js.map