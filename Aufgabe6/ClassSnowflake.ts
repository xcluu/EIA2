/*
 Aufgabe 6: Polymorphe Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 26.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace nr6 {

    interface IntSnowflake {
        small: boolean;
    }

    export class Snowflake extends MovingObject implements IntSnowflake {

        constructor() {
            super();
            this.x = Math.random() * 800;
            this.y = Math.random() * 200;
            if (Math.random() >= 0.5) {this.small = true; }
            else {this.small = false; }
        }

        animate(): void {
            this.draw();
            this.x  += 0.5;
            this.y += 2;

            if (this.y > 200) {
                this.y = 0;
            }
            if (this.x > 800) {
                this.x = 0;
            }
        }

        draw(): void {
            if (this.small == false) {this.stroke(0.8 + Math.random() * 1.5); }
            else {this.stroke(0.3 + Math.random() * 0.8); }
        }

        stroke(size: number): void {
            crc2d.strokeStyle = "#ffffff";
            crc2d.beginPath();
            crc2d.moveTo(this.x - (5 * size), this.y);
            crc2d.lineTo(this.x + (5 * size), this.y);
            crc2d.stroke();
            crc2d.beginPath();
            crc2d.moveTo(this.x, this.y - (5 * size));
            crc2d.lineTo(this.x, this.y + (5 * size));
            crc2d.stroke();
            crc2d.beginPath();
            crc2d.moveTo(this.x - (2.5 * size), this.y - (2.5 * size));
            crc2d.lineTo(this.x + (2.5 * size), this.y + (2.5 * size));
            crc2d.stroke();
            crc2d.beginPath();
            crc2d.moveTo(this.x + (2.5 * size), this.y - (2.5 * size));
            crc2d.lineTo(this.x - (2.5 * size), this.y + (2.5 * size));
            crc2d.stroke();
        }
    }
}