/*
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var nr5;
(function (nr5) {
    var Skifahrer = /** @class */ (function () {
        function Skifahrer() {
            this.xPos = 50;
            this.yPos = 150;
            this.yAdd = 0;
            this.angle = Math.random() * 3;
            this.color = "hsl(" + Math.random() * 360 + ", " + Math.random() * 100 + "%, " + Math.random() * 100 + "%)";
            this.skicolor = "hsl(" + Math.random() * 360 + ", " + Math.random() * 100 + "%, " + Math.random() * 100 + "%)";
        }
        Skifahrer.prototype.draw = function () {
            //skifahrer zeichnen
            nr5.crc2d.fillStyle = "#d6c2bb";
            nr5.crc2d.beginPath();
            nr5.crc2d.arc(this.xPos, this.yPos, 4, 0, 2 * Math.PI);
            nr5.crc2d.fill();
            nr5.crc2d.fillStyle = this.color;
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xPos - 5, this.yPos + 5);
            nr5.crc2d.lineTo(this.xPos + 1, this.yPos + 7);
            nr5.crc2d.lineTo(this.xPos - 3, this.yPos + 16);
            nr5.crc2d.lineTo(this.xPos - 9, this.yPos + 14);
            nr5.crc2d.fill();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xPos - 9, this.yPos + 14);
            nr5.crc2d.lineTo(this.xPos - 11, this.yPos + 25);
            nr5.crc2d.lineTo(this.xPos - 9, this.yPos + 25);
            nr5.crc2d.lineTo(this.xPos - 6, this.yPos + 14);
            nr5.crc2d.fill();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xPos - 6, this.yPos + 15);
            nr5.crc2d.lineTo(this.xPos - 2, this.yPos + 25);
            nr5.crc2d.lineTo(this.xPos, this.yPos + 25);
            nr5.crc2d.lineTo(this.xPos - 3, this.yPos + 15);
            nr5.crc2d.fill();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xPos + 1, this.yPos + 7);
            nr5.crc2d.lineTo(this.xPos + 4, this.yPos + 15);
            nr5.crc2d.lineTo(this.xPos + 2, this.yPos + 16);
            nr5.crc2d.lineTo(this.xPos - 1, this.yPos + 8);
            nr5.crc2d.fill();
            nr5.crc2d.strokeStyle = this.skicolor;
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xPos + 3, this.yPos + 32);
            nr5.crc2d.lineTo(this.xPos - 9, this.yPos + 8);
            nr5.crc2d.stroke();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.xPos - 10, this.yPos + 32);
            nr5.crc2d.lineTo(this.xPos - 11, this.yPos + 7);
            nr5.crc2d.stroke();
        };
        Skifahrer.prototype.animate = function () {
            this.xPos += this.angle;
            this.yAdd += 0.1;
            this.yPos += 1 + this.yAdd;
            this.draw();
        };
        return Skifahrer;
    }());
    nr5.Skifahrer = Skifahrer;
})(nr5 || (nr5 = {}));
//# sourceMappingURL=ClassSkifahrer.js.map