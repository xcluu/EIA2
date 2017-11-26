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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(x, y, callFunction) {
            var _this = _super.call(this, x, y) || this;
            _this.superSpecialPointer() = callFunction;
            console.log(_this.superSpecialPointer.toString());
            return _this;
        }
        Cloud.prototype.draw = function () {
            this.superSpecialPointer();
        };
        Cloud.prototype.animate = function () {
            this.draw();
            this.x += 0.5;
            if (this.x > 800) {
                this.x = 0;
            }
        };
        Cloud.prototype.drawCloud1 = function () {
            nr6.crc2d.fillStyle = "#a6a1b0";
            nr6.crc2d.beginPath();
            nr6.crc2d.arc(this.x, 53, 18, 0, 2 * Math.PI);
            nr6.crc2d.fill();
            nr6.crc2d.fillStyle = "#a6a1b0";
            nr6.crc2d.beginPath();
            nr6.crc2d.arc(this.x - 30, 55, 30, 0, 2 * Math.PI);
            nr6.crc2d.fill();
            nr6.crc2d.fillStyle = "#a6a1b0";
            nr6.crc2d.beginPath();
            nr6.crc2d.arc(this.x - 60, 48, 18, 0, 2 * Math.PI);
            nr6.crc2d.fill();
            nr6.crc2d.fillStyle = "#a6a1b0";
            nr6.crc2d.beginPath();
            nr6.crc2d.arc(this.x - 60, 65, 14, 0, 2 * Math.PI);
            nr6.crc2d.fill();
        };
        Cloud.prototype.drawCloud2 = function () {
            nr6.crc2d.fillStyle = "#a6a1b0";
            nr6.crc2d.beginPath();
            nr6.crc2d.arc(this.x, 10, 50, 0, 2 * Math.PI);
            nr6.crc2d.fill();
            nr6.crc2d.fillStyle = "#a6a1b0";
            nr6.crc2d.beginPath();
            nr6.crc2d.arc(this.x - 50, 10, 30, 0, 2 * Math.PI);
            nr6.crc2d.fill();
            nr6.crc2d.fillStyle = "#a6a1b0";
            nr6.crc2d.beginPath();
            nr6.crc2d.arc(this.x + 50, 8, 25, 0, 2 * Math.PI);
            nr6.crc2d.fill();
        };
        return Cloud;
    }(nr6.MovingObject));
    nr6.Cloud = Cloud;
})(nr6 || (nr6 = {}));
//# sourceMappingURL=ClassCloud.js.map