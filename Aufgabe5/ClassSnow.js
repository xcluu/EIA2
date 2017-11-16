/**
 * Created by Claudia on 16.11.2017.
 */
var nr5;
(function (nr5) {
    var Snow = /** @class */ (function () {
        function Snow() {
            this.x = Math.random() * 800;
            this.y = Math.random() * 200;
            this.xSmall = Math.random() * 800;
            this.ySmall = Math.random() * 200;
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
    }());
    nr5.Snow = Snow;
})(nr5 || (nr5 = {}));
//# sourceMappingURL=ClassSnow.js.map