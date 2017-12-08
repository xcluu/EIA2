/*
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var nr5;
(function (nr5) {
    var Cloud = /** @class */ (function () {
        function Cloud(x) {
            this.x = x;
        }
        Cloud.prototype.drawCloud1 = function () {
            nr5.crc2d.fillStyle = "#a6a1b0";
            nr5.crc2d.beginPath();
            nr5.crc2d.arc(this.x, 53, 18, 0, 2 * Math.PI);
            nr5.crc2d.fill();
            nr5.crc2d.fillStyle = "#a6a1b0";
            nr5.crc2d.beginPath();
            nr5.crc2d.arc(this.x - 30, 55, 30, 0, 2 * Math.PI);
            nr5.crc2d.fill();
            nr5.crc2d.fillStyle = "#a6a1b0";
            nr5.crc2d.beginPath();
            nr5.crc2d.arc(this.x - 60, 48, 18, 0, 2 * Math.PI);
            nr5.crc2d.fill();
            nr5.crc2d.fillStyle = "#a6a1b0";
            nr5.crc2d.beginPath();
            nr5.crc2d.arc(this.x - 60, 65, 14, 0, 2 * Math.PI);
            nr5.crc2d.fill();
        };
        Cloud.prototype.drawCloud2 = function () {
            nr5.crc2d.fillStyle = "#a6a1b0";
            nr5.crc2d.beginPath();
            nr5.crc2d.arc(this.x, 10, 50, 0, 2 * Math.PI);
            nr5.crc2d.fill();
            nr5.crc2d.fillStyle = "#a6a1b0";
            nr5.crc2d.beginPath();
            nr5.crc2d.arc(this.x - 50, 10, 30, 0, 2 * Math.PI);
            nr5.crc2d.fill();
            nr5.crc2d.fillStyle = "#a6a1b0";
            nr5.crc2d.beginPath();
            nr5.crc2d.arc(this.x + 50, 8, 25, 0, 2 * Math.PI);
            nr5.crc2d.fill();
        };
        return Cloud;
    }());
    nr5.Cloud = Cloud;
})(nr5 || (nr5 = {}));
//# sourceMappingURL=ClassCloud.js.map