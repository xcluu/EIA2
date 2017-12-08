/*
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var nr5;
(function (nr5) {
    var Tree = /** @class */ (function () {
        /*        constructor() {
                    this.x = Math.random() * 400;
                    this.y = 200 + Math.random() * 600;
                    this.size = 0.8 + Math.random() * 1.5;
                    this.draw();
                }*/
        function Tree(_x, _y, _size) {
            if (_x === void 0) { _x = Math.random() * 400; }
            if (_y === void 0) { _y = 200 + Math.random() * 600; }
            if (_size === void 0) { _size = 0.8 + Math.random() * 1.5; }
            this.x = _x;
            this.y = _y;
            this.size = _size;
            console.log(this.x + "," + this.y + "," + this.size);
            this.draw();
        }
        Tree.prototype.draw = function () {
            console.log(this.x + "," + this.y + "," + this.size);
            console.log("draw");
            nr5.crc2d.fillStyle = "#53826a";
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.x, this.y);
            nr5.crc2d.lineTo(this.x + (20 * this.size), this.y);
            nr5.crc2d.lineTo(this.x, this.y - (30 * this.size));
            nr5.crc2d.lineTo(this.x - (20 * this.size), this.y);
            nr5.crc2d.fill();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.x, this.y - (15 * this.size));
            nr5.crc2d.lineTo(this.x + (15 * this.size), this.y - (15 * this.size));
            nr5.crc2d.lineTo(this.x, this.y - (45 * this.size));
            nr5.crc2d.lineTo(this.x - (15 * this.size), this.y - (15 * this.size));
            nr5.crc2d.fill();
            nr5.crc2d.beginPath();
            nr5.crc2d.moveTo(this.x, this.y - (30 * this.size));
            nr5.crc2d.lineTo(this.x + (10 * this.size), this.y - (30 * this.size));
            nr5.crc2d.lineTo(this.x, this.y - (60 * this.size));
            nr5.crc2d.lineTo(this.x - (10 * this.size), this.y - (30 * this.size));
            nr5.crc2d.fill();
        };
        return Tree;
    }());
    nr5.Tree = Tree;
})(nr5 || (nr5 = {}));
//# sourceMappingURL=ClassTree.js.map