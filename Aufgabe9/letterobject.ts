/*
Aufgabe 9: Erpresserbrief
Name: Claudia Wegen
Matrikel: 256214
Datum: 16.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace erpresserbrief {

    interface IntLetterObject {
        htmlElement: HTMLDivElement;
        manager: SelectionManager;
    }

    export class LetterObject implements IntLetterObject {
        htmlElement: HTMLDivElement;
        manager: SelectionManager;

        constructor(asciicode: number, manager: SelectionManager) {
            //manager wird mit buchstaben verknuepft
            this.manager = manager;
            this.htmlElement = document.createElement("div");
            this.htmlElement.innerHTML = String.fromCharCode(asciicode);
        }
    }
}