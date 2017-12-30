var baumkonfig;
(function (baumkonfig) {
    var frag = document.createDocumentFragment(), opt, col1, col2;
    function addSelects() {
        addBaumSelect();
        addHalterungSelect();
        addSchmuckSelect();
    }
    baumkonfig.addSelects = addSelects;
    function addBaumSelect() {
        var baumSelect = document.getElementsByName("baeume");
        for (var i = 0; i < baumkonfig.baeume.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = baumkonfig.baeume[i].sorte;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&nbsp&nbsp" + baumkonfig.baeume[i].preis.toString() + "0€";
        }
        baumSelect[0].appendChild(frag);
    }
    function addHalterungSelect() {
        var halterungSelect = document.getElementsByName("halterungen");
        for (var i = 0; i < baumkonfig.halterungen.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = "Halterung, " + baumkonfig.halterungen[i].farbe;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&nbsp&nbsp" + baumkonfig.halterungen[i].preis.toString() + "0€";
        }
        halterungSelect[0].appendChild(frag);
    }
    function addSchmuckSelect() {
        var schmuckSelect = document.createElement("select");
        schmuckSelect.name = "schmuck";
        document.getElementById("schmuck").appendChild(schmuckSelect);
        var defaultOpt = document.createElement("option");
        defaultOpt.disabled = true;
        defaultOpt.defaultSelected = true;
        defaultOpt.innerHTML = " -- select an option -- ";
        frag.appendChild(defaultOpt);
        for (var i = 0; i < baumkonfig.schmuck.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = baumkonfig.schmuck[i].unterkat;
            //abfrage ob Eigenschaft Farbe vorhanden; ggf anpassung des textes
            if (baumkonfig.schmuck[i].farbe != null)
                col1.innerHTML = baumkonfig.schmuck[i].unterkat + ", " + baumkonfig.schmuck[i].farbe;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&nbsp&nbsp" + baumkonfig.schmuck[i].preis.toString() + "0€";
        }
        schmuckSelect.appendChild(frag);
        var nInput = addQuantityInput();
        //once: true wird als fehler angezeigt... -_- funktioniert ueber js trotzdem.
        //"Argument of type '{ once: boolean; } is not assignable to parameter of type 'boolean'." ja. genau. xD
        schmuckSelect.addEventListener("change", addSchmuckSelect, { once: true });
        schmuckSelect.addEventListener("change", function () {
            changeSchmuckSelect(nInput);
        });
    }
    function changeSchmuckSelect(nInput) {
        nInput.value = "1";
    }
    function addQuantityInput() {
        var nInput = document.createElement("input");
        nInput.type = "number";
        document.getElementById("schmuck").appendChild(nInput);
        return nInput;
    }
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=htmlbuilder.js.map