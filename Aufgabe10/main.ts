// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace baumkonfig {


    window.addEventListener("load", init);

    export let data: Database;
    export let warenkorb: Warenkorb;

    function init(): void {


        data = new Database();
        warenkorb = new Warenkorb();


        loadInfo();

        addSelects();

        createDisplayElements();

    }


}