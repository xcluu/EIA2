// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace aufg11 {
    let parentNode: HTMLDivElement;

    export let productlist: HTMLUListElement;

    export let products: HTMLLIElement[];

    export let liprice: HTMLLIElement;


    export function createDisplayElements(): void {

        productlist = document.createElement("ul");
        productlist.className = "list-group";

        parentNode = document.getElementById("display") as HTMLDivElement;
        productlist = parentNode.appendChild(productlist);

        liprice = document.createElement("li");
        liprice.className = "list-group-item";
        liprice.innerHTML = "Gesamtpreis: ";
        liprice.innerHTML += "&emsp;" + warenkorb.calcPrice() + "0€";
        liprice = productlist.appendChild(liprice);

    }

    export function appendListChild(): void {
        for (let i: number = 0; i < products.length; i++) {
            //produkte werden ueber dem gesamtpreis angezeigt
            products[i] = productlist.insertBefore(products[i], productlist.lastChild);
        }


    }

    // export function updateTotalPrice(): void {
    //     liprice.innerHTML = "Gesamtpreis: ";
    //     liprice.innerHTML += "&emsp;" + warenkorb.calcPrice() + "0€";
    // }

    function showAlert(): boolean {
        let selBaum: HTMLSelectElement = document.getElementById("baeumeAuswahl") as HTMLSelectElement;
        let selHalterung: HTMLSelectElement = document.getElementById("halterungenAuswahl") as HTMLSelectElement;
        if ((selBaum.selectedOptions[0].innerHTML == " -- select an option -- ") && (selHalterung.selectedOptions[0].innerHTML == " -- select an option -- ")) {
            alert("Sie haben noch nichts ausgewaehlt.. :|");
            return false;
        }

        if (selBaum.selectedOptions[0].innerHTML == " -- select an option -- ") {
            alert("Sie haben noch keinen baum ausgewaehlt!!!");
            return false;
        }
        if (selHalterung.selectedOptions[0].innerHTML == " -- select an option -- ") {
            alert("halterung fehlt :3");
            return false;
        }
        return true;
    }

}