/*
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace nr5 {
    interface IntSkifahrer {
        color: string;
        skicolor: string;
        xPos: number;
        yPos: number;
        yAdd: number;
        angle: number;
    }

    export class Skifahrer implements IntSkifahrer {

        constructor() {
            this.xPos = 50;
            this.yPos = 150;
            this.yAdd = 0;
            this.angle = Math.random() * 3;
            this.color = "hsl(" + Math.random() * 360 + ", " + Math.random() * 100 + "%, " + Math.random() * 100 + "%)";
            this.skicolor = "hsl(" + Math.random() * 360 + ", " + Math.random() * 100 + "%, " + Math.random() * 100 + "%)";
        }

        draw(): void {
            //skifahrer zeichnen
            crc2d.fillStyle = "#d6c2bb";
            crc2d.beginPath();
            crc2d.arc(this.xPos, this.yPos, 4, 0, 2 * Math.PI);
            crc2d.fill();

            crc2d.fillStyle = this.color;
            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 5, this.yPos + 5);
            crc2d.lineTo(this.xPos + 1, this.yPos + 7);
            crc2d.lineTo(this.xPos - 3, this.yPos + 16);
            crc2d.lineTo(this.xPos - 9, this.yPos + 14);
            crc2d.fill();

            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 9, this.yPos + 14);
            crc2d.lineTo(this.xPos - 11, this.yPos + 25);
            crc2d.lineTo(this.xPos - 9, this.yPos + 25);
            crc2d.lineTo(this.xPos - 6, this.yPos + 14);
            crc2d.fill();

            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 6, this.yPos + 15);
            crc2d.lineTo(this.xPos - 2, this.yPos + 25);
            crc2d.lineTo(this.xPos, this.yPos + 25);
            crc2d.lineTo(this.xPos - 3, this.yPos + 15);
            crc2d.fill();

            crc2d.beginPath();
            crc2d.moveTo(this.xPos + 1, this.yPos + 7);
            crc2d.lineTo(this.xPos + 4, this.yPos + 15);
            crc2d.lineTo(this.xPos + 2, this.yPos + 16);
            crc2d.lineTo(this.xPos - 1, this.yPos + 8);
            crc2d.fill();

            crc2d.strokeStyle = this.skicolor;
            crc2d.beginPath();
            crc2d.moveTo(this.xPos + 3, this.yPos + 32);
            crc2d.lineTo(this.xPos - 9, this.yPos + 8);
            crc2d.stroke();

            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 10, this.yPos + 32);
            crc2d.lineTo(this.xPos - 11, this.yPos + 7);
            crc2d.stroke();
        }

        animate(): void {
            this.xPos += this.angle;
            this.yAdd += 0.1;
            this.yPos += 1 + this.yAdd;
            this.draw();
        }
    }
}
