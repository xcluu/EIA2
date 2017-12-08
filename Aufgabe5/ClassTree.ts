/*
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace nr5 {

    interface IntTree {
        x: number;
        y: number;
        size: number;
    }


    export class Tree implements IntTree {

/*        constructor() {
            this.x = Math.random() * 400;
            this.y = 200 + Math.random() * 600;
            this.size = 0.8 + Math.random() * 1.5;
            this.draw();
        }*/

        constructor(_x?: number = Math.random() * 400, _y?: number = 200 + Math.random() * 600, _size?: number = 0.8 + Math.random() * 1.5) {
            this.x = _x;
            this.y = _y;
            this.size = _size;
            this.draw();
        }

        draw(): void {
            console.log(this.x + "," + this.y + "," + this.size);
            crc2d.fillStyle = "#53826a";
            crc2d.beginPath();
            crc2d.moveTo(this.x, this.y);
            crc2d.lineTo(this.x + (20 * this.size), this.y);
            crc2d.lineTo(this.x, this.y - (30 * this.size));
            crc2d.lineTo(this.x - (20 * this.size), this.y);
            crc2d.fill();

            crc2d.beginPath();
            crc2d.moveTo(this.x, this.y - (15 * this.size));
            crc2d.lineTo(this.x + (15 * this.size), this.y - (15 * this.size));
            crc2d.lineTo(this.x, this.y - (45 * this.size));
            crc2d.lineTo(this.x - (15 * this.size), this.y - (15 * this.size));
            crc2d.fill();

            crc2d.beginPath();
            crc2d.moveTo(this.x, this.y - (30 * this.size));
            crc2d.lineTo(this.x + (10 * this.size), this.y - (30 * this.size));
            crc2d.lineTo(this.x, this.y - (60 * this.size));
            crc2d.lineTo(this.x - (10 * this.size), this.y - (30 * this.size));
            crc2d.fill();
        }
    }
}