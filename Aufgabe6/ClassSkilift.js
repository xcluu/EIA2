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
    var Skilift = /** @class */ (function (_super) {
        __extends(Skilift, _super);
        function Skilift() {
            var _this = _super.call(this) || this;
            _this.x = 766.666;
            _this.y = 600;
            _this.changePath = false;
            _this.stay = true;
            _this.fahrer = new nr6.Skifahrer;
            nr6.skifahrer.push(_this.fahrer);
            return _this;
        }
        Skilift.prototype.draw = function () {
            //lift zeichnen
            nr6.crc2d.fillStyle = "#000000";
            nr6.crc2d.beginPath();
            nr6.crc2d.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            nr6.crc2d.fill();
            nr6.crc2d.strokeStyle = "#000000";
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x, this.y);
            nr6.crc2d.lineTo(this.x, this.y + 18);
            nr6.crc2d.stroke();
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x - 15, this.y + 18);
            nr6.crc2d.lineTo(this.x + 15, this.y + 18);
            nr6.crc2d.quadraticCurveTo(this.x + 20, this.y + 18, this.x + 20, this.y + 23);
            nr6.crc2d.lineTo(this.x + 20, this.y + 43);
            nr6.crc2d.lineTo(this.x - 20, this.y + 43);
            nr6.crc2d.lineTo(this.x - 20, this.y + 23);
            nr6.crc2d.quadraticCurveTo(this.x - 20, this.y + 18, this.x - 15, this.y + 18);
            nr6.crc2d.stroke();
            nr6.crc2d.strokeStyle = "#c80000";
            nr6.crc2d.beginPath();
            nr6.crc2d.moveTo(this.x - 25, this.y + 43);
            nr6.crc2d.lineTo(this.x + 25, this.y + 43);
            nr6.crc2d.lineWidth = 2;
            nr6.crc2d.stroke();
            nr6.crc2d.lineWidth = 1;
            //skifahrer sitzend hoch
            if (this.changePath == false) {
                nr6.crc2d.fillStyle = "#d6c2bb";
                nr6.crc2d.beginPath();
                nr6.crc2d.arc(this.x, this.y + 25, 4, 0, 2 * Math.PI);
                nr6.crc2d.fill();
                nr6.crc2d.fillStyle = this.fahrer.color;
                nr6.crc2d.beginPath();
                nr6.crc2d.moveTo(this.x - 3, this.y + 31);
                nr6.crc2d.lineTo(this.x - 3, this.y + 42);
                nr6.crc2d.lineTo(this.x + 4, this.y + 42);
                nr6.crc2d.lineTo(this.x + 4, this.y + 31);
                nr6.crc2d.fill();
                nr6.crc2d.beginPath();
                nr6.crc2d.moveTo(this.x - 3, this.y + 38);
                nr6.crc2d.lineTo(this.x - 8, this.y + 38);
                nr6.crc2d.lineTo(this.x - 8, this.y + 42);
                nr6.crc2d.lineTo(this.x - 3, this.y + 42);
                nr6.crc2d.fill();
                nr6.crc2d.beginPath();
                nr6.crc2d.moveTo(this.x - 8, this.y + 42);
                nr6.crc2d.lineTo(this.x - 8, this.y + 48);
                nr6.crc2d.lineTo(this.x - 5, this.y + 38);
                nr6.crc2d.lineTo(this.x - 5, this.y + 42);
                nr6.crc2d.fill();
            }
            else if (this.changePath == true && this.stay == true) {
                //skifahrer sitzend runter
                nr6.crc2d.fillStyle = "#d6c2bb";
                nr6.crc2d.beginPath();
                nr6.crc2d.arc(this.x, this.y + 25, 4, 0, 2 * Math.PI);
                nr6.crc2d.fill();
                nr6.crc2d.fillStyle = this.fahrer.color;
                nr6.crc2d.beginPath();
                nr6.crc2d.moveTo(this.x - 4, this.y + 31);
                nr6.crc2d.lineTo(this.x - 4, this.y + 42);
                nr6.crc2d.lineTo(this.x + 3, this.y + 42);
                nr6.crc2d.lineTo(this.x + 3, this.y + 31);
                nr6.crc2d.fill();
                nr6.crc2d.beginPath();
                nr6.crc2d.moveTo(this.x + 3, this.y + 38);
                nr6.crc2d.lineTo(this.x + 8, this.y + 38);
                nr6.crc2d.lineTo(this.x + 8, this.y + 42);
                nr6.crc2d.lineTo(this.x + 3, this.y + 42);
                nr6.crc2d.fill();
                nr6.crc2d.beginPath();
                nr6.crc2d.moveTo(this.x + 8, this.y + 42);
                nr6.crc2d.lineTo(this.x + 8, this.y + 48);
                nr6.crc2d.lineTo(this.x + 5, this.y + 48);
                nr6.crc2d.lineTo(this.x + 5, this.y + 42);
                nr6.crc2d.fill();
            }
        };
        Skilift.prototype.animate = function () {
            this.draw();
            //change path abfrage
            if (this.x <= 50) {
                this.changePath = true;
                //... manche trauen sich nicht runter :D
                if (Math.random() > 0.3) {
                    this.stay = false;
                }
            }
            if (this.stay == false) {
                this.fahrer.animate();
            }
            if (this.changePath == false) {
                this.moveUp();
            }
            else if (this.changePath == true) {
                this.moveDown();
            }
            //skifahrer.filter(skifahrer.checkHeartbeat());
        };
        Skilift.prototype.moveUp = function () {
            this.x -= 3;
            this.y -= 2.1;
        };
        Skilift.prototype.moveDown = function () {
            this.x += +3;
            this.y += 1.92;
        };
        Skilift.prototype.checkHeartbeat = function () {
            if (this.x > 800) {
                this.heartbeat = false;
            }
            return this.heartbeat;
        };
        return Skilift;
    }(nr6.MovingObject));
    nr6.Skilift = Skilift;
})(nr6 || (nr6 = {}));
//# sourceMappingURL=ClassSkilift.js.map