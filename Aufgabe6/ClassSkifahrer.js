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
 Aufgabe 6: Polymorphe Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 26.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var nr6;
(function (nr6) {
    var Skifahrer = /** @class */ (function (_super) {
        __extends(Skifahrer, _super);
        function Skifahrer() {
            var _this = _super.call(this) || this;
            _this.x = 50;
            _this.y = 150;
            _this.yAdd = 0;
            _this.angle = Math.random() * 3;
            _this.color = "hsl(" + Math.random() * 360 + ", " + Math.random() * 100 + "%, " + Math.random() * 100 + "%)";
            _this.skicolor = "hsl(" + Math.random() * 360 + ", " + Math.random() * 100 + "%, " + Math.random() * 100 + "%)";
            return _this;
        }
        Skifahrer.prototype.draw = function () {
            //skifahrer zeichnen
            nr6.crc2d.fillStyle = "#d6c2bb";
            nr6.crc2d.beginPath();
            nr6.crc2d.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            nr6.crc2d.fill();
            nr6.crc2d.fillStyle = this.color;
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x - 5, this.y + 5);
            nr6.crc2d.lineTo(this.x + 1, this.y + 7);
            nr6.crc2d.lineTo(this.x - 3, this.y + 16);
            nr6.crc2d.lineTo(this.x - 9, this.y + 14);
            nr6.crc2d.fill();
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x - 9, this.y + 14);
            nr6.crc2d.lineTo(this.x - 11, this.y + 25);
            nr6.crc2d.lineTo(this.x - 9, this.y + 25);
            nr6.crc2d.lineTo(this.x - 6, this.y + 14);
            nr6.crc2d.fill();
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x - 6, this.y + 15);
            nr6.crc2d.lineTo(this.x - 2, this.y + 25);
            nr6.crc2d.lineTo(this.x, this.y + 25);
            nr6.crc2d.lineTo(this.x - 3, this.y + 15);
            nr6.crc2d.fill();
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x + 1, this.y + 7);
            nr6.crc2d.lineTo(this.x + 4, this.y + 15);
            nr6.crc2d.lineTo(this.x + 2, this.y + 16);
            nr6.crc2d.lineTo(this.x - 1, this.y + 8);
            nr6.crc2d.fill();
            nr6.crc2d.strokeStyle = this.skicolor;
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x + 3, this.y + 32);
            nr6.crc2d.lineTo(this.x - 9, this.y + 8);
            nr6.crc2d.stroke();
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x - 10, this.y + 32);
            nr6.crc2d.lineTo(this.x - 11, this.y + 7);
            nr6.crc2d.stroke();
        };
        Skifahrer.prototype.animate = function () {
            this.draw();
            this.x += this.angle;
            this.yAdd += 0.1;
            this.y += 1 + this.yAdd;
        };
        Skifahrer.prototype.checkHeartbeat = function () {
            if (this.y > 600 || this.x > 800) {
                this.heartbeat = false;
            }
            return this.heartbeat;
        };
        return Skifahrer;
    }(nr6.MovingObject));
    nr6.Skifahrer = Skifahrer;
})(nr6 || (nr6 = {}));
//# sourceMappingURL=ClassSkifahrer.js.map