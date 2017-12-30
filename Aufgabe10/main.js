var baumkonfig;
(function (baumkonfig) {
    baumkonfig.baeume = [];
    baumkonfig.halterungen = [];
    baumkonfig.schmuck = [];
    window.addEventListener("load", init);
    function init() {
        baumkonfig.loadInfo();
        baumkonfig.addSelects();
    }
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=main.js.map