/**
 * Created by Claudia on 29.11.2017.
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
        let studentInfo: StudentData = _input.split(", ", 6);
        students.push(_input.split(", ", 6));
        console.log(student[0]);

        return students;
    }

    function queryData(_matrikel: number): string {
        let dataQuery: boolean = false;
        for (let i: number = 0; i < students.length; i++) {
            console.log(students[i].matrikel);
            console.log(students.length);
            if (students[i].matrikel == _matrikel) {
                dataQuery = true;
                return students[i];
            }
        }
        if (dataQuery == false) {
            return "Die Matrikelnummer " + _matrikel.toString() + " wurde in der Datenbank nicht gefunden.";
        }
    }
}