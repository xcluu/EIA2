/**
 * Created by Claudia on 15.12.2017.
 */
/*
Aufgabe 9: Erpresserbrief
Name: Claudia Wegen
Matrikel: 256214
Datum: 16.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace erpresserbrief {

    interface IntLetter {
    }

    export class Letter extends LetterObject implements IntLetter {
        htmlElement: HTMLDivElement;
        manager: SelectionManager;

        constructor(asciicode: number, event: MouseEvent, manager: SelectionManager) {
            super(asciicode, manager);
            this.htmlElement.className = "letter";
            this.htmlElement.style.width = "40px";
            this.htmlElement.style.height = "50px";
            this.htmlElement.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
            this.htmlElement.style.marginTop = (event.pageY - document.getElementById("letter-section").offsetTop - (parseInt(this.htmlElement.style.height) / 2)) + "px";
            this.htmlElement.style.marginLeft = event.pageX - (parseInt(this.htmlElement.style.width) / 2) + "px";
            //element wird dem html code hinzugefuegt
            document.getElementById("letter-section").appendChild(this.htmlElement);

            //bei mousedown auf einem der buchstaben wird die funktion delete aufgerufen
            this.htmlElement.addEventListener("mousedown", this.delete.bind(this));
        }

        delete(): void {
            //uebergibt den ausgewaehlten buchstaben der managerclass
            this.manager.selectedCharr = this;
        }

    }
}