/*
 Aufgabe 6: Polymorphe Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 26.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace nr6 {
    interface IntSkifahrer {
        yAdd: number;
        angle: number;
        color: string;
        skicolor: string;
    }

    export class Skifahrer extends MovingObject implements IntSkifahrer {

        constructor() {
            super();
            this.x = 50;
            this.y = 150;
            this.yAdd = 0;
            this.angle = Math.random() * 3;
            this.color = "hsl(" + Math.random() * 360 + ", " + Math.random() * 100 + "%, " + Math.random() * 100 + "%)";
            this.skicolor = "hsl(" + Math.random() * 360 + ", " + Math.random() * 100 + "%, " + Math.random() * 100 + "%)";
        }

        draw(): void {
            //skifahrer zeichnen
            crc2d.fillStyle = "#d6c2bb";
            crc2d.beginPath();
            crc2d.arc(this.x, this.y, 4, 0, 2 * Math.PI);
            crc2d.fill();

            crc2d.fillStyle = this.color;
            crc2d.beginPath();
            crc2d.moveTo(this.x - 5, this.y + 5);
            crc2d.lineTo(this.x + 1, this.y + 7);
            crc2d.lineTo(this.x - 3, this.y + 16);
            crc2d.lineTo(this.x - 9, this.y + 14);
            crc2d.fill();

            crc2d.beginPath();
            crc2d.moveTo(this.x - 9, this.y + 14);
            crc2d.lineTo(this.x - 11, this.y + 25);
            crc2d.lineTo(this.x - 9, this.y + 25);
            crc2d.lineTo(this.x - 6, this.y + 14);
            crc2d.fill();

            crc2d.beginPath();
            crc2d.moveTo(this.x - 6, this.y + 15);
            crc2d.lineTo(this.x - 2, this.y + 25);
            crc2d.lineTo(this.x, this.y + 25);
            crc2d.lineTo(this.x - 3, this.y + 15);
            crc2d.fill();

            crc2d.beginPath();
            crc2d.moveTo(this.x + 1, this.y + 7);
            crc2d.lineTo(this.x + 4, this.y + 15);
            crc2d.lineTo(this.x + 2, this.y + 16);
            crc2d.lineTo(this.x - 1, this.y + 8);
            crc2d.fill();

            crc2d.strokeStyle = this.skicolor;
            crc2d.beginPath();
            crc2d.moveTo(this.x + 3, this.y + 32);
            crc2d.lineTo(this.x - 9, this.y + 8);
            crc2d.stroke();

            crc2d.beginPath();
            crc2d.moveTo(this.x - 10, this.y + 32);
            crc2d.lineTo(this.x - 11, this.y + 7);
            crc2d.stroke();
        }

        animate(): void {
            this.draw();

            this.x += this.angle;
            this.yAdd += 0.1;
            this.y += 1 + this.yAdd;
        }

        checkHeartbeat(): boolean {
                if (this.y > 600 || this.x > 800) {
                    this.heartbeat = false;
                }
                return this.heartbeat;
        }
    }
}