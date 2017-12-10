/*
 Aufgabe 8: DnyHTML
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 10.12.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var dynHTML;
(function (dynHTML) {
    var stop = false;
    window.addEventListener("load", main);
    function main() {
        while (!stop) {
            var input = prompt("Wie viele Quadrate sollen gezeichnet werden? Eingabe zwischen 10 und 100 moeglich.");
            processInput(input);
        }
    }
    function drawSquare(x, y, size, color) {
        var square = document.createElement("div");
        square.style.width = size + "px";
        square.style.height = size + "px";
        square.style.backgroundColor = "hsl(" + color.toString() + ", 100%, 50%)";
        square.style.marginLeft = x.toString() + "vw";
        square.style.marginTop = y.toString() + "vh";
        document.body.appendChild(square);
    }
    function processInput(input) {
        var count = Number.parseInt(input);
        if (Number.isNaN(count)) {
            alert("Fehler: Falsche Eingabe");
            return;
        }
        if (count < 10 || count > 100) {
            alert("Fehler: Die Zahl muss zwischen 10 und 100 liegen.");
            return;
        }
        for (var i = 0; i < count; i++) {
            drawSquare(Math.random() * 90, Math.random() * 90, 50, Math.random() * 360);
        }
        stop = true;
    }
})(dynHTML || (dynHTML = {}));
//# sourceMappingURL=main.js.map