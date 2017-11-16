/**
 * Created by Claudia on 16.11.2017.
 */
namespace nr5 {

    interface IntTree {
        x: number;
        y: number;
        size: number;
    }


    export class Tree implements IntTree {

        constructor() {
            this.x = Math.random() * 400;
            this.y = 200 + Math.random() * 600;
            this.size = 0.8 + Math.random() * 1.5;
            this.draw();
        }

        constructor(x: number, y: number, size: number) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.draw();
        }

        draw(): void {
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