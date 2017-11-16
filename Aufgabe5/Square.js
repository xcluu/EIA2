var L05_Class;
(function (L05_Class) {
    var Square = /** @class */ (function () {
        function Square(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Square.prototype.update = function () {
            this.move();
            this.draw();
        };
        Square.prototype.move = function () {
            this.x += Math.random() * 4 - 2; // hier experimentieren um
            this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
        };
        Square.prototype.draw = function () {
            L05_Class.crc2.fillStyle = this.color;
            L05_Class.crc2.fillRect(this.x, this.y, this.size, this.size);
        };
        Square.prototype.setRandomStyle = function () {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return Square;
    }());
    L05_Class.Square = Square;
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=Square.js.map