/**
 * Created by Claudia on 08.10.2017.
 */


function dialogFeld(): void {
    let eingabe: string = prompt("Bitte geben Sie Ihren Namen ein.", "");
    if (eingabe != null) {
        document.getElementById("hi").innerHTML =
            "Hallo " + eingabe + "! Dies ist eine persoenliche Begruessung...";
    }
}