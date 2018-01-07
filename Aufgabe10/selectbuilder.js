// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var baumkonfig;
(function (baumkonfig) {
    //optionenfragment fuer select
    var frag = document.createDocumentFragment(), opt, col1, col2;
    var schmuckSelectList = [];
    //counter damit jedes schmuck-select eine eigene id hat
    var idCounter = 0;
    //die zuletzt ausgewaehlte ware
    var previousTree;
    var previousHalterung;
    var previousSchmuck = [];
    function addSelects() {
        addBaumSelect();
        addHalterungSelect();
        addSchmuckSelect();
    }
    baumkonfig.addSelects = addSelects;
    function addBaumSelect() {
        var baumSelect;
        //erstellen der options
        baumSelect = document.getElementById("baeumeAuswahl");
        var baeume = baumkonfig.data.getAllBaume();
        for (var i = 0; i < baeume.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            opt.id = baeume[i].id;
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = baeume[i].name;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&emsp;" + baeume[i].preis.toString() + "0€";
            opt.addEventListener("select", this.toggleOption);
        }
        console.log(baumSelect);
        baumSelect.addEventListener("change", function () {
            BaumOptions();
            baumkonfig.appendListChild();
        });
        baumSelect.appendChild(frag);
    }
    //wenn ein baum ausgewaehlt wird, wird er dem warenkorb hinzugefuegt und der vorherige baum wird vom warenkorb entfernt
    function BaumOptions() {
        var baumSelect = document.getElementById("baeumeAuswahl");
        if (previousTree != null)
            baumkonfig.warenkorb.removeWare(previousTree.id);
        previousTree = (baumSelect[baumSelect.selectedIndex]);
        baumkonfig.warenkorb.addWare(baumkonfig.data.getBaum(previousTree.id));
    }
    //optionen fuer halterungen werden erstellt
    function addHalterungSelect() {
        var halterungSelect = document.getElementById("halterungenAuswahl");
        var halterungen = baumkonfig.data.getAllHalterungen();
        for (var i = 0; i < halterungen.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            opt.id = halterungen[i].id;
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = halterungen[i].name + ", " + halterungen[i].farbe;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&emsp;" + halterungen[i].preis.toString() + "0€";
        }
        halterungSelect.addEventListener("change", function () {
            HalterungOptions();
            baumkonfig.appendListChild();
        });
        halterungSelect.appendChild(frag);
    }
    //wenn eine halterung ausgewaehlt wird, wird er dem warenkorb hinzugefuegt und der vorherige baum wird dem warenkorb entfernt
    function HalterungOptions() {
        var halterungSelect = document.getElementById("halterungenAuswahl");
        if (previousHalterung != null)
            baumkonfig.warenkorb.removeWare(previousHalterung.id);
        previousHalterung = (halterungSelect[halterungSelect.selectedIndex]);
        baumkonfig.warenkorb.addWare(baumkonfig.data.getHalterung(previousHalterung.id));
    }
    //hinzufuegen der schmuckoptionen
    function addSchmuckSelect() {
        //push da zu jedem select ein previosSchmuck gehoert
        previousSchmuck.push(null);
        var schmuckSelect = document.createElement("select");
        schmuckSelect.id = "schmuckAuswahl " + idCounter;
        schmuckSelect.className = "form-control";
        document.getElementById("schmuck").appendChild(schmuckSelect);
        var defaultOpt = document.createElement("option");
        defaultOpt.disabled = true;
        defaultOpt.defaultSelected = true;
        defaultOpt.innerHTML = " -- select an option -- ";
        frag.appendChild(defaultOpt);
        var schmuck = baumkonfig.data.getAllSchmuck();
        for (var i = 0; i < schmuck.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            opt.id = schmuck[i].id;
            col1 = opt.appendChild(document.createElement("col"));
            col1.className = "info";
            col1.innerHTML = schmuck[i].name;
            //abfrage ob Eigenschaft Farbe vorhanden; ggf anpassung des textes
            if (schmuck[i].farbe != null)
                col1.innerHTML = schmuck[i].name + ", " + schmuck[i].farbe;
            col2 = opt.appendChild(document.createElement("col"));
            col2.className = "preis";
            col2.innerHTML = "&emsp;" + schmuck[i].preis.toString() + "0€";
            opt.addEventListener("select ", this.toggleOption);
        }
        schmuckSelect.appendChild(frag);
        schmuckSelectList.push(schmuckSelect);
        //input zum select wird hinzugefuegt
        var input = addQuantityInput();
        input.addEventListener("change", function () {
            changeQuantity(input);
        });
        //
        // let linebreak: HTMLBRElement = document.createElement("br");
        // document.getElementById("schmuck").appendChild(linebreak);
        //once: true wird als fehler angezeigt... -_- funktioniert aber ueber js..
        //"Argument of type '{ once: boolean; }' is not assignable to parameter of type 'boolean'." ja. genau. xD
        schmuckSelect.addEventListener("change", addSchmuckSelect, { once: true });
        schmuckSelect.addEventListener("change", function () {
            changeSchmuckSelect(input);
            SchmuckOptions(schmuckSelect);
            baumkonfig.appendListChild();
        });
    }
    //neues input element zum aendern der anzahl wird erstellt
    function addQuantityInput() {
        var nInput = document.createElement("input");
        nInput.type = "number";
        nInput.className = "form-control";
        nInput.id = "input " + idCounter;
        idCounter++;
        document.getElementById("schmuck").appendChild(nInput);
        return nInput;
    }
    //wenn ein schmuckteil ausgewaehlt wird, wird er dem warenkorb hinzugefuegt und der vorherige baum wird dem warenkorb entfernt
    function SchmuckOptions(target) {
        var i = parseInt(target.id.split(" ").pop());
        if (previousSchmuck[i] != null)
            baumkonfig.warenkorb.removeWare(previousSchmuck[i].id);
        previousSchmuck[i] = (target[target.selectedIndex]);
        baumkonfig.warenkorb.addWare(baumkonfig.data.getSchmuck(previousSchmuck[i].id));
    }
    function changeQuantity(target) {
        //i bekommt die das letzte element des splits, in dem fall die nummer der input-id
        var i = parseInt(target.id.split(" ").pop());
        //sucht das select mit der gleichen id nummer
        var relatedSelect = document.getElementById("schmuckAuswahl " + i);
        //dem ausgewaehlten option...
        var selOpt = (relatedSelect[relatedSelect.selectedIndex]);
        //...wird die neue anzahl uebergeben
        selOpt.nKorb = parseInt(target.value);
        baumkonfig.warenkorb.updateWare(selOpt);
    }
    function changeSchmuckSelect(target) {
        //standard-wert des inputs wird auf 1 gesetzt
        target.value = "1";
    }
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=selectbuilder.js.map