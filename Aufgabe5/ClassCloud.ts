/*
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace nr5 {

    interface IntCloud {
        x: number;
    }

    export class Cloud implements IntCloud {

        constructor(x: number) {
            this.x = x;
        }

        drawCloud1(): void {
            crc2d.fillStyle = "#a6a1b0";
            crc2d.beginPath();
            crc2d.arc(this.x, 53, 18, 0, 2 * Math.PI);
            crc2d.fill();
            crc2d.fillStyle = "#a6a1b0";
            crc2d.beginPath();
            crc2d.arc(this.x - 30, 55, 30, 0, 2 * Math.PI);
            crc2d.fill();
            crc2d.fillStyle = "#a6a1b0";
            crc2d.beginPath();
            crc2d.arc(this.x - 60, 48, 18, 0, 2 * Math.PI);
            crc2d.fill();
            crc2d.fillStyle = "#a6a1b0";
            crc2d.beginPath();
            crc2d.arc(this.x - 60, 65, 14, 0, 2 * Math.PI);
            crc2d.fill();
        }

        drawCloud2(): void {
            crc2d.fillStyle = "#a6a1b0";
            crc2d.beginPath();
            crc2d.arc(this.x, 10, 50, 0, 2 * Math.PI);
            crc2d.fill();
            crc2d.fillStyle = "#a6a1b0";
            crc2d.beginPath();
            crc2d.arc(this.x - 50, 10, 30, 0, 2 * Math.PI);
            crc2d.fill();
            crc2d.fillStyle = "#a6a1b0";
            crc2d.beginPath();
            crc2d.arc(this.x + 50, 8, 25, 0, 2 * Math.PI);
            crc2d.fill();
        }
    }
}