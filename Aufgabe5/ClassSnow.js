/*
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var nr5;
(function (nr5) {
    var Snowflake = /** @class */ (function () {
        function Snowflake() {
            this.x = Math.random() * 800;
            this.y = Math.random() * 200;
            this.xSmall = Math.random() * 800;
            this.ySmall = Math.random() * 200;
        }
        Snowflake.prototype.draw = function (size) {
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
        Snowflake.prototype.drawSmall = function (size) {
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
        return Snowflake;
    }());
    nr5.Snowflake = Snowflake;
})(nr5 || (nr5 = {}));
//# sourceMappingURL=ClassSnow.js.map