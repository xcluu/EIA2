/*
Aufgabe 9: Erpresserbrief
Name: Claudia Wegen
Matrikel: 256214
Datum: 16.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace erpresserbrief {
    let manager: SelectionManager;
    window.addEventListener("load", main);

    function main(): void {
        manager = new SelectionManager();
    }
}