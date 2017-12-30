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
var baumkonfig;
(function (baumkonfig) {
    var Schmuck = /** @class */ (function (_super) {
        __extends(Schmuck, _super);
        function Schmuck(unterkat, farbe) {
            var _this = _super.call(this) || this;
            _this.unterkat = unterkat;
            _this.farbe = farbe;
            return _this;
        }
        return Schmuck;
    }(baumkonfig.Ware));
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=Schmuck.js.map