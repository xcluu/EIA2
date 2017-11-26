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
var nr6;
(function (nr6) {
    var Snowflake = /** @class */ (function (_super) {
        __extends(Snowflake, _super);
        function Snowflake() {
            var _this = _super.call(this) || this;
            _this.x = Math.random() * 800;
            _this.y = Math.random() * 200;
            if (Math.random() >= 0.5) {
                _this.small = true;
            }
            else {
                _this.small = false;
            }
            return _this;
        }
        Snowflake.prototype.animate = function () {
            this.draw();
            this.x += 0.5;
            this.y += 2;
            if (this.y > 200) {
                this.y = 0;
            }
            if (this.x > 800) {
                this.x = 0;
            }
        };
        Snowflake.prototype.draw = function () {
            if (this.small == false) {
                this.stroke(0.8 + Math.random() * 1.5);
            }
            else {
                this.stroke(0.3 + Math.random() * 0.8);
            }
        };
        Snowflake.prototype.stroke = function (size) {
            nr6.crc2d.strokeStyle = "#ffffff";
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x - (5 * size), this.y);
            nr6.crc2d.lineTo(this.x + (5 * size), this.y);
            nr6.crc2d.stroke();
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x, this.y - (5 * size));
            nr6.crc2d.lineTo(this.x, this.y + (5 * size));
            nr6.crc2d.stroke();
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x - (2.5 * size), this.y - (2.5 * size));
            nr6.crc2d.lineTo(this.x + (2.5 * size), this.y + (2.5 * size));
            nr6.crc2d.stroke();
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x + (2.5 * size), this.y - (2.5 * size));
            nr6.crc2d.lineTo(this.x - (2.5 * size), this.y + (2.5 * size));
            nr6.crc2d.stroke();
        };
        return Snowflake;
    }(nr6.MovingObject));
    nr6.Snowflake = Snowflake;
})(nr6 || (nr6 = {}));
//# sourceMappingURL=ClassSnowflake.js.map