/**
 * Created by Claudia on 16.11.2017.
 */
var nr5;
(function (nr5) {
    var Tree = /** @class */ (function () {
        function Tree() {
            this.x = Math.random() * 400;
            this.y = 200 + Math.random() * 600;
            this.size = 0.8 + Math.random() * 1.5;
            this.draw();
        }
        Tree.prototype.draw = function () {
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