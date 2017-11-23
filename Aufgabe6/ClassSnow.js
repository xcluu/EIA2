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
    var Snow = /** @class */ (function (_super) {
        __extends(Snow, _super);
        function Snow() {
            var _this = this;
            _this.x = Math.random() * 800;
            _this.y = Math.random() * 200;
            _this.xSmall = Math.random() * 800;
            _this.ySmall = Math.random() * 200;
            return _this;
        }
        Snow.prototype.draw = function (size) {
            nr5.crc2d.strokeStyle = "#ffffff";
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.x - (5 * size), this.y);
            nr5.crc2d.lineTo(this.x + (5 * size), this.y);
            nr5.crc2d.stroke();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.x, this.y - (5 * size));
            nr5.crc2d.lineTo(this.x, this.y + (5 * size));
            nr5.crc2d.stroke();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.x - (2.5 * size), this.y - (2.5 * size));
            nr5.crc2d.lineTo(this.x + (2.5 * size), this.y + (2.5 * size));
            nr5.crc2d.stroke();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.x + (2.5 * size), this.y - (2.5 * size));
            nr5.crc2d.lineTo(this.x - (2.5 * size), this.y + (2.5 * size));
            nr5.crc2d.stroke();
        };
        Snow.prototype.drawSmall = function (size) {
            nr5.crc2d.strokeStyle = "#ffffff";
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xSmall - (5 * size), this.ySmall);
            nr5.crc2d.lineTo(this.xSmall + (5 * size), this.ySmall);
            nr5.crc2d.stroke();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xSmall, this.ySmall - (5 * size));
            nr5.crc2d.lineTo(this.xSmall, this.ySmall + (5 * size));
            nr5.crc2d.stroke();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xSmall - (2.5 * size), this.ySmall - (2.5 * size));
            nr5.crc2d.lineTo(this.xSmall + (2.5 * size), this.ySmall + (2.5 * size));
            nr5.crc2d.stroke();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xSmall + (2.5 * size), this.ySmall - (2.5 * size));
            nr5.crc2d.lineTo(this.xSmall - (2.5 * size), this.ySmall + (2.5 * size));
            nr5.crc2d.stroke();
        };
        return Snow;
    }(MovingObjects));
    nr5.Snow = Snow;
})(nr5 || (nr5 = {}));
//# sourceMappingURL=ClassSnow.js.map