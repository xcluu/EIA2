/*
 Aufgabe 7: StudiVZ
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 03.12.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */

namespace StudiVZ {
    interface StudentData {
        matrikel: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                console.log("test");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let tempSave: string[] = _input.split(", ", 6) ;

        if (tempSave.length == 6) {
            let matrikel: number = Number.parseInt(tempSave[0]);
            if (Number.isNaN(matrikel))
                return "Fehler: Falsche Matrikelnummer";

            let name: string = tempSave[1];
            let vorname: string = tempSave[2];

            let alter: number = Number.parseInt(tempSave[3]);
            console.log(tempSave[3]);
            console.log(alter);
            if (Number.isNaN(alter))
                return "Fehler: Falsches Alter";

            let geschlechtInt: number = Number.parseInt(tempSave[4]);
            let geschlecht: boolean;
            if (Number.isNaN(geschlechtInt)) {
                return "Fehler: Falsche Geschlechtsangabe";
            }
            if (geschlechtInt == 0)
                geschlecht = false;
            else if (geschlechtInt == 1)
                geschlecht = true;
            else
                return "Fehler: Falsche Geschlechtsangabe";

            let kommentar: string = tempSave[5];

            let tempStudent: StudentData = {
                matrikel: matrikel,
                name: name,
                vorname: vorname,
                alter: alter,
                geschlecht: geschlecht,
                kommentar: kommentar
            };

            students.push(tempStudent);
            console.log(tempStudent);

            return "Student wurde erfolgreich hinzugefügt.";
        }
        else
            return "Fehler: Falsche Eingabe";
    }

    function queryData(_matrikel: number): string {
        let dataQuery: boolean = false;
        //students[0].matrikel = 123;
        for (let i: number = 0; i < students.length; i++) {
            console.log(students[i].matrikel);
            if (students[i].matrikel == _matrikel) {
                dataQuery = true;
                return "Matrikel: " + students[i].matrikel.toString() + "\n" +
                "Name: " + students[i].name + "\n" +
                "Vorname:" + students[i].vorname + "\n" +
                "Alter: " + students[i].alter.toString() + "\n" +
                "Geschlecht: " + students[i].geschlecht.toString() + "\n" +
                "Kommentar: " + students[i].kommentar + "\n";
            }
        }
        if (dataQuery == false) {
            return "Die Matrikelnummer " + _matrikel.toString() + " wurde in der Datenbank nicht gefunden.";
        }
    }
}