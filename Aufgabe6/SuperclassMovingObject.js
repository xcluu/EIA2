/**
 * Created by Claudia on 22.11.2017.
 */
var nr6;
(function (nr6) {
    var MovingObject = /** @class */ (function () {
        function MovingObject() {
            this.heartbeat = true;
        }
        MovingObject.prototype.draw = function () {
            //abstract
        };
        MovingObject.prototype.animate = function () {
            //abstract
        };
        return MovingObject;
    }());
    nr6.MovingObject = MovingObject;
})(nr6 || (nr6 = {}));
//# sourceMappingURL=SuperclassMovingObject.js.map