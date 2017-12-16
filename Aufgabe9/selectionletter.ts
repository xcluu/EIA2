/*
Aufgabe 9: Erpresserbrief
Name: Claudia Wegen
Matrikel: 256214
Datum: 16.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace erpresserbrief {

    interface IntSelectionLetter {
        ascii: number;
    }

    export class SelectionLetter extends LetterObject implements IntSelectionLetter {
        htmlElement: HTMLDivElement;
        manager: SelectionManager;
        ascii: number;

        constructor(asciicode: number, manager: SelectionManager) {
            super(asciicode, manager);
            this.ascii = asciicode;
            this.htmlElement.className = "selection-letter";
            this.htmlElement.id = asciicode.toString();
            document.getElementById("selection-section").appendChild(this.htmlElement);

            //bei mousedown auf einem der buchstaben wird die funktion select() aufgerufen
            this.htmlElement.addEventListener("mousedown", this.select.bind(this));
        }

        select(): void {
            //ruft zum selektieren die funktion des managers auf
            this.manager.newSelected(this);
        }
    }
}