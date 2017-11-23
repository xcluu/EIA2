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
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var nr5;
(function (nr5) {
    var Skilift = /** @class */ (function (_super) {
        __extends(Skilift, _super);
        function Skilift() {
            var _this = this;
            _this.xPos = 766.666;
            _this.yPos = 600;
            _this.changePath = false;
            _this.stay = true;
            _this.fahrer = new nr5.Skifahrer;
            nr5.skifahrer.push(_this.fahrer);
            return _this;
        }
        Skilift.prototype.draw = function () {
            //lift zeichnen
            nr5.crc2d.fillStyle = "#000000";
            nr5.crc2d.beginPath();
            nr5.crc2d.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI);
            nr5.crc2d.fill();
            nr5.crc2d.strokeStyle = "#000000";
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xPos, this.yPos);
            nr5.crc2d.lineTo(this.xPos, this.yPos + 18);
            nr5.crc2d.stroke();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xPos - 15, this.yPos + 18);
            nr5.crc2d.lineTo(this.xPos + 15, this.yPos + 18);
            nr5.crc2d.quadraticCurveTo(this.xPos + 20, this.yPos + 18, this.xPos + 20, this.yPos + 23);
            nr5.crc2d.lineTo(this.xPos + 20, this.yPos + 43);
            nr5.crc2d.lineTo(this.xPos - 20, this.yPos + 43);
            nr5.crc2d.lineTo(this.xPos - 20, this.yPos + 23);
            nr5.crc2d.quadraticCurveTo(this.xPos - 20, this.yPos + 18, this.xPos - 15, this.yPos + 18);
            nr5.crc2d.stroke();
            nr5.crc2d.strokeStyle = "#c80000";
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xPos - 25, this.yPos + 43);
            nr5.crc2d.lineTo(this.xPos + 25, this.yPos + 43);
            nr5.crc2d.lineWidth = 2;
            nr5.crc2d.stroke();
            nr5.crc2d.lineWidth = 1;
            //skifahrer sitzend hoch
            if (this.changePath == false) {
                nr5.crc2d.fillStyle = "#d6c2bb";
                nr5.crc2d.beginPath();
                nr5.crc2d.arc(this.xPos, this.yPos + 25, 4, 0, 2 * Math.PI);
                nr5.crc2d.fill();
                nr5.crc2d.fillStyle = this.fahrer.color;
                nr5.crc2d.beginPath();
                nr5.crc2d.moveTo(this.xPos - 3, this.yPos + 31);
                nr5.crc2d.lineTo(this.xPos - 3, this.yPos + 42);
                nr5.crc2d.lineTo(this.xPos + 4, this.yPos + 42);
                nr5.crc2d.lineTo(this.xPos + 4, this.yPos + 31);
                nr5.crc2d.fill();
                nr5.crc2d.beginPath();
                nr5.crc2d.moveTo(this.xPos - 3, this.yPos + 38);
                nr5.crc2d.lineTo(this.xPos - 8, this.yPos + 38);
                nr5.crc2d.lineTo(this.xPos - 8, this.yPos + 42);
                nr5.crc2d.lineTo(this.xPos - 3, this.yPos + 42);
                nr5.crc2d.fill();
                nr5.crc2d.beginPath();
                nr5.crc2d.moveTo(this.xPos - 8, this.yPos + 42);
                nr5.crc2d.lineTo(this.xPos - 8, this.yPos + 48);
                nr5.crc2d.lineTo(this.xPos - 5, this.yPos + 38);
                nr5.crc2d.lineTo(this.xPos - 5, this.yPos + 42);
                nr5.crc2d.fill();
            }
            else if (this.changePath == true && this.stay == true) {
                //skifahrer sitzend runter
                nr5.crc2d.fillStyle = "#d6c2bb";
                nr5.crc2d.beginPath();
                nr5.crc2d.arc(this.xPos, this.yPos + 25, 4, 0, 2 * Math.PI);
                nr5.crc2d.fill();
                nr5.crc2d.fillStyle = this.fahrer.color;
                nr5.crc2d.beginPath();
                nr5.crc2d.moveTo(this.xPos - 4, this.yPos + 31);
                nr5.crc2d.lineTo(this.xPos - 4, this.yPos + 42);
                nr5.crc2d.lineTo(this.xPos + 3, this.yPos + 42);
                nr5.crc2d.lineTo(this.xPos + 3, this.yPos + 31);
                nr5.crc2d.fill();
                nr5.crc2d.beginPath();
                nr5.crc2d.moveTo(this.xPos + 3, this.yPos + 38);
                nr5.crc2d.lineTo(this.xPos + 8, this.yPos + 38);
                nr5.crc2d.lineTo(this.xPos + 8, this.yPos + 42);
                nr5.crc2d.lineTo(this.xPos + 3, this.yPos + 42);
                nr5.crc2d.fill();
                nr5.crc2d.beginPath();
                nr5.crc2d.moveTo(this.xPos + 8, this.yPos + 42);
                nr5.crc2d.lineTo(this.xPos + 8, this.yPos + 48);
                nr5.crc2d.lineTo(this.xPos + 5, this.yPos + 48);
                nr5.crc2d.lineTo(this.xPos + 5, this.yPos + 42);
                nr5.crc2d.fill();
            }
        };
        Skilift.prototype.animate = function () {
            if (this.xPos <= 50) {
                this.changePath = true;
                //... manche trauen sich nicht runter :D
                if (Math.random() > 0.3) {
                    this.stay = false;
                }
            }
            if (this.stay == false) {
                this.fahrer.animate();
            }
            if (this.changePath == false) {
                this.moveUp();
            }
            else if (this.changePath == true) {
                this.moveDown();
            }
            this.draw();
        };
        Skilift.prototype.moveUp = function () {
            this.xPos -= 3;
            this.yPos -= 2.1;
        };
        Skilift.prototype.moveDown = function () {
            this.xPos += +3;
            this.yPos += 1.92;
        };
        return Skilift;
    }(MovingObjects));
    nr5.Skilift = Skilift;
})(nr5 || (nr5 = {}));
//# sourceMappingURL=ClassSkilift.js.map