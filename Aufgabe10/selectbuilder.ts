// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace aufg11 {
    //optionenfragment fuer select
    let frag: DocumentFragment = document.createDocumentFragment(),
        opt: HTMLOptionElement, col1: HTMLTableColElement, col2: HTMLTableColElement;


    let schmuckSelectList: HTMLSelectElement [] = [];
    //counter damit jedes schmuck-select eine eigene id hat
    let idCounter: number = 0;

    //die zuletzt ausgewaehlte ware
    let previousTree: InfoBaum;
    let previousHalterung: InfoHalterung;
    let previousSchmuck: InfoSchmuck[] = [];

    export function addSelects(): void {
        addBaumSelect();
        addHalterungSelect();
        addSchmuckSelect();
    }


    function addBaumSelect(): void {
        let baumSelect: HTMLSelectElement;
        //erstellen der options
        baumSelect = document.getElementById("baeumeAuswahl") as HTMLSelectElement;


        let baeume: InfoBaum[] = data.getAllBaume();


        for (let i: number = 0; i < baeume.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            opt.id = baeume[i].id;
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = baeume[i].name;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&emsp;" + baeume[i].preis.toString() + "0€";
            opt.addEventListener("select", this.toggleOption);

        }
        baumSelect.name = "Baumart";
        console.log(baumSelect);

        baumSelect.addEventListener("change", () => {
            BaumOptions();
            appendListChild();
        });
        baumSelect.appendChild(frag);
    }

    //wenn ein baum ausgewaehlt wird, wird er dem warenkorb hinzugefuegt und der vorherige baum wird vom warenkorb entfernt
    function BaumOptions(): void {

        let baumSelect: HTMLSelectElement = document.getElementById("baeumeAuswahl") as HTMLSelectElement;

        if (previousTree != null)
            warenkorb.removeWare(previousTree.id);
        previousTree = (baumSelect[baumSelect.selectedIndex]);

        warenkorb.addWare(data.getBaum(previousTree.id));

    }



    //optionen fuer halterungen werden erstellt
    function addHalterungSelect(): void {
        let halterungSelect: HTMLSelectElement = document.getElementById("halterungenAuswahl") as HTMLSelectElement;

        let halterungen: InfoHalterung[] = data.getAllHalterungen();

        for (let i: number = 0; i < halterungen.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            opt.id = halterungen[i].id;
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = halterungen[i].name + ", " + halterungen[i].farbe;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&emsp;" + halterungen[i].preis.toString() + "0€";
        }

        halterungSelect.name = "Halterung";

        halterungSelect.addEventListener("change", () => {
            HalterungOptions();
            appendListChild();
        });
        halterungSelect.appendChild(frag);
    }


    //wenn eine halterung ausgewaehlt wird, wird er dem warenkorb hinzugefuegt und der vorherige baum wird dem warenkorb entfernt
    function HalterungOptions(): void {

        let halterungSelect: HTMLSelectElement = document.getElementById("halterungenAuswahl") as HTMLSelectElement;

        if (previousHalterung != null)
            warenkorb.removeWare(previousHalterung.id);
        previousHalterung = (halterungSelect[halterungSelect.selectedIndex]);

        warenkorb.addWare(data.getHalterung(previousHalterung.id));
    }



    //hinzufuegen der schmuckoptionen
    function addSchmuckSelect(): void {
        //push da zu jedem select ein previosSchmuck gehoert
        previousSchmuck.push(null);

        let schmuckSelect: HTMLSelectElement = document.createElement("select");
        schmuckSelect.id = "schmuckAuswahl " + idCounter;
        schmuckSelect.className = "form-control";
        document.getElementById("schmuck").appendChild(schmuckSelect);

        let defaultOpt: HTMLOptionElement = document.createElement("option");
        defaultOpt.disabled = true;
        defaultOpt.defaultSelected = true;
        defaultOpt.innerHTML = " -- select an option -- ";

        frag.appendChild(defaultOpt);

        let schmuck: InfoSchmuck[] = data.getAllSchmuck();

        for (let i: number = 0; i < schmuck.length; i++) {
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

        schmuckSelect.name = "Schmuck";

        schmuckSelect.appendChild(frag);


        schmuckSelectList.push(schmuckSelect);


        //input zum select wird hinzugefuegt
        let input: HTMLInputElement = addQuantityInput();




        input.addEventListener("change", function(): void {
            changeQuantity(input);
        });
        //
        // let linebreak: HTMLBRElement = document.createElement("br");
        // document.getElementById("schmuck").appendChild(linebreak);

        //once: true wird als fehler angezeigt... -_- funktioniert aber ueber js..
        //"Argument of type '{ once: boolean; }' is not assignable to parameter of type 'boolean'." ja. genau. xD
        schmuckSelect.addEventListener("change", addSchmuckSelect, {once: true});

        schmuckSelect.addEventListener("change", function(): void {
            changeSchmuckSelect(input);
            SchmuckOptions(schmuckSelect);
            appendListChild();
        });
    }

    //neues input element zum aendern der anzahl wird erstellt
    function addQuantityInput(): HTMLInputElement {
        let nInput: HTMLInputElement = document.createElement("input");
        nInput.type = "number";
        nInput.name = "schmuckAnzahl";
        nInput.className = "form-control";
        nInput.id = "input " + idCounter;
        idCounter++;
        document.getElementById("schmuck").appendChild(nInput);
        return nInput;
    }


    //wenn ein schmuckteil ausgewaehlt wird, wird er dem warenkorb hinzugefuegt und der vorherige baum wird dem warenkorb entfernt
    function SchmuckOptions(target: HTMLSelectElement): void {

        let i: number = parseInt(target.id.split(" ").pop());

        if (previousSchmuck[i] != null)
            warenkorb.removeWare(previousSchmuck[i].id);

        previousSchmuck[i] = (target[target.selectedIndex]);


        warenkorb.addWare(data.getSchmuck(previousSchmuck[i].id));

    }



    function changeQuantity(target: HTMLInputElement): void {
        //i bekommt die das letzte element des splits, in dem fall die nummer der input-id
        let i: number = parseInt(target.id.split(" ").pop());
        //sucht das select mit der gleichen id nummer
        let relatedSelect: HTMLSelectElement = document.getElementById("schmuckAuswahl " + i) as HTMLSelectElement;

        //dem ausgewaehlten option...
        let selOpt: InfoSchmuck = (relatedSelect[relatedSelect.selectedIndex]);
        //...wird die neue anzahl uebergeben
        selOpt.nKorb = parseInt(target.value);

        warenkorb.updateWare(selOpt);

    }


    function changeSchmuckSelect(target: HTMLInputElement): void {
        //standard-wert des inputs wird auf 1 gesetzt
        target.value = "1";
    }


}
