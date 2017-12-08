/*
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace nr5 {

    interface IntSnow {
        x: number;
        y: number;
        xSmall: number;
        ySmall: number;
    }

    export class Snowflake implements IntSnow {
        constructor() {
            this.x = Math.random() * 800;
            this.y = Math.random() * 200;
            this.xSmall = Math.random() * 800;
            this.ySmall = Math.random() * 200;
        }

        draw(size: number): void {
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

        drawSmall(size: number): void {
            crc2d.strokeStyle = "#ffffff";
            crc2d.beginPath();
            crc2d.moveTo(this.xSmall - (5 * size), this.ySmall);
            crc2d.lineTo(this.xSmall + (5 * size), this.ySmall);
            crc2d.stroke();
            crc2d.beginPath();
            crc2d.moveTo(this.xSmall, this.ySmall - (5 * size));
            crc2d.lineTo(this.xSmall, this.ySmall + (5 * size));
            crc2d.stroke();
            crc2d.beginPath();
            crc2d.moveTo(this.xSmall - (2.5 * size), this.ySmall - (2.5 * size));
            crc2d.lineTo(this.xSmall + (2.5 * size), this.ySmall + (2.5 * size));
            crc2d.stroke();
            crc2d.beginPath();
            crc2d.moveTo(this.xSmall + (2.5 * size), this.ySmall - (2.5 * size));
            crc2d.lineTo(this.xSmall - (2.5 * size), this.ySmall + (2.5 * size));
            crc2d.stroke();
        }
    }
}