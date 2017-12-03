/*
 Aufgabe 7: StudiVZ
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 03.12.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var tempSave = _input.split(", ", 6);
        if (tempSave.length == 6) {
            var matrikel_1 = Number.parseInt(tempSave[0]);
            if (Number.isNaN(matrikel_1))
                return "Fehler: Falsche Matrikelnummer";
            var name_1 = tempSave[1];
            var vorname = tempSave[2];
            var alter = Number.parseInt(tempSave[3]);
            console.log(tempSave[3]);
            console.log(alter);
            if (Number.isNaN(alter))
                return "Fehler: Falsches Alter";
            var geschlechtInt = Number.parseInt(tempSave[4]);
            var geschlecht = void 0;
            if (Number.isNaN(geschlechtInt)) {
                return "Fehler: Falsche Geschlechtsangabe";
            }
            if (geschlechtInt == 0)
                geschlecht = false;
            else if (geschlechtInt == 1)
                geschlecht = true;
            else
                return "Fehler: Falsche Geschlechtsangabe";
            var kommentar = tempSave[5];
            var tempStudent = {
                matrikel: matrikel_1,
                name: name_1,
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
    function queryData(_matrikel) {
        var dataQuery = false;
        //students[0].matrikel = 123;
        for (var i = 0; i < students.length; i++) {
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
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=main.js.map