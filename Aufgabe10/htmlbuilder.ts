namespace baumkonfig {
    let frag: DocumentFragment = document.createDocumentFragment(),
        opt: HTMLOptionElement, col1: HTMLTableColElement, col2: HTMLTableColElement;

    export function addSelects(): void {
        addBaumSelect();
        addHalterungSelect();
        addSchmuckSelect();
    }
    function addBaumSelect(): void {
        let baumSelect: HTMLSelectElement = document.getElementsByName("baeume") as HTMLSelectElement;

        for (let i: number = 0; i < baeume.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = baeume[i].sorte;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&nbsp&nbsp" + baeume[i].preis.toString() + "0€";
        }

        baumSelect[0].appendChild(frag);
    }

    function addHalterungSelect(): void {
        let halterungSelect: HTMLSelectElement = document.getElementsByName("halterungen") as HTMLSelectElement;

        for (let i: number = 0; i < halterungen.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = "Halterung, " + halterungen[i].farbe;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&nbsp&nbsp" + halterungen[i].preis.toString() + "0€";
        }

        halterungSelect[0].appendChild(frag);
    }

    function addSchmuckSelect(): void {
        let schmuckSelect: HTMLSelectElement = document.createElement("select");
        schmuckSelect.name = "schmuck";
        document.getElementById("schmuck").appendChild(schmuckSelect);

        let defaultOpt: HTMLOptionElement = document.createElement("option");
        defaultOpt.disabled = true;
        defaultOpt.defaultSelected = true;
        defaultOpt.innerHTML = " -- select an option -- ";

        frag.appendChild(defaultOpt);

        for (let i: number = 0; i < schmuck.length; i++) {
            opt = frag.appendChild(document.createElement("option"));
            opt.value = i.toString();
            col1 = opt.appendChild(document.createElement("col"));
            col1.innerHTML = schmuck[i].unterkat;
            //abfrage ob Eigenschaft Farbe vorhanden; ggf anpassung des textes
            if (schmuck[i].farbe != null)
                col1.innerHTML = schmuck[i].unterkat + ", " + schmuck[i].farbe;
            col2 = opt.appendChild(document.createElement("col"));
            col2.innerHTML = "&nbsp&nbsp" + schmuck[i].preis.toString() + "0€";
        }
        schmuckSelect.appendChild(frag);
        let nInput: HTMLInputElement = addQuantityInput();

        //once: true wird als fehler angezeigt... -_- funktioniert ueber js trotzdem.
        //"Argument of type '{ once: boolean; } is not assignable to parameter of type 'boolean'." ja. genau. xD
        schmuckSelect.addEventListener("change", addSchmuckSelect, {once: true});

        schmuckSelect.addEventListener("change", function (): void {
            changeSchmuckSelect(nInput);
        });
    }

    function changeSchmuckSelect(nInput: HTMLInputElement): void {
        nInput.value = "1";
    }


    function addQuantityInput(): HTMLInputElement {
        let nInput: HTMLInputElement = document.createElement("input");
        nInput.type = "number";
        document.getElementById("schmuck").appendChild(nInput);
        return nInput;
    }
}
