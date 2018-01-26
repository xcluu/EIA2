// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var aufg11;
(function (aufg11) {
    var parentNode;
    function createDisplayElements() {
        aufg11.productlist = document.createElement("ul");
        aufg11.productlist.className = "list-group";
        parentNode = document.getElementById("display");
        aufg11.productlist = parentNode.appendChild(aufg11.productlist);
        aufg11.liprice = document.createElement("li");
        aufg11.liprice.className = "list-group-item";
        aufg11.liprice.innerHTML = "Gesamtpreis: ";
        aufg11.liprice.innerHTML += "&emsp;" + aufg11.warenkorb.calcPrice() + "0€";
        aufg11.liprice = aufg11.productlist.appendChild(aufg11.liprice);
    }
    aufg11.createDisplayElements = createDisplayElements;
    function appendListChild() {
        for (var i = 0; i < aufg11.products.length; i++) {
            //produkte werden ueber dem gesamtpreis angezeigt
            aufg11.products[i] = aufg11.productlist.insertBefore(aufg11.products[i], aufg11.productlist.lastChild);
        }
    }
    aufg11.appendListChild = appendListChild;
    // export function updateTotalPrice(): void {
    //     liprice.innerHTML = "Gesamtpreis: ";
    //     liprice.innerHTML += "&emsp;" + warenkorb.calcPrice() + "0€";
    // }
    function showAlert() {
        var selBaum = document.getElementById("baeumeAuswahl");
        var selHalterung = document.getElementById("halterungenAuswahl");
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
})(aufg11 || (aufg11 = {}));
//# sourceMappingURL=displaybuilder.js.map