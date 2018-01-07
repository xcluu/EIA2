// Aufgabe 10: Baumkonfigurator
// Name: Claudia Wegen
// Matrikel: 256214
// Datum: 07.01.2018
//
// Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var baumkonfig;
(function (baumkonfig) {
    var parentNode;
    function createDisplayElements() {
        baumkonfig.productlist = document.createElement("ul");
        baumkonfig.productlist.className = "list-group";
        parentNode = document.getElementById("display");
        baumkonfig.productlist = parentNode.appendChild(baumkonfig.productlist);
        baumkonfig.liprice = document.createElement("li");
        baumkonfig.liprice.className = "list-group-item";
        baumkonfig.liprice.innerHTML = "Gesamtpreis: ";
        baumkonfig.liprice.innerHTML += "&emsp;" + baumkonfig.warenkorb.calcPrice() + "0€";
        baumkonfig.liprice = baumkonfig.productlist.appendChild(baumkonfig.liprice);
        var submit = document.createElement("button");
        submit.className = "btn btn-outline-primary";
        submit.innerHTML = "weiter";
        parentNode.appendChild(submit);
        submit.addEventListener("click", function () {
            //wenn anforderungen erfuellt sind, leitet weiter zur naechsten seite
            if (showAlert() == true) {
                window.location.href = "form.html";
            }
        });
    }
    baumkonfig.createDisplayElements = createDisplayElements;
    function appendListChild() {
        for (var i = 0; i < baumkonfig.products.length; i++) {
            //produkte werden ueber dem gesamtpreis angezeigt
            baumkonfig.products[i] = baumkonfig.productlist.insertBefore(baumkonfig.products[i], baumkonfig.productlist.lastChild);
        }
    }
    baumkonfig.appendListChild = appendListChild;
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
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=displaybuilder.js.map