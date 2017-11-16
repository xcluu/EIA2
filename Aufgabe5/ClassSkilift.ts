/**
 * Created by Claudia on 16.11.2017.
 */
namespace nr5 {
    interface IntSkilift {
        xPos: number;
        yPos: number;
        changePath: boolean;
        stay: boolean;
        fahrer: Skifahrer;
    }

    export class Skilift implements IntSkilift {

        constructor() {
            this.xPos = 766.666;
            this.yPos = 600;
            this.changePath = false;
            this.stay = true;
            this.fahrer = new Skifahrer;
            skifahrer.push (this.fahrer);
            console.log(this.fahrer);
        }

        draw(): void {
            //lift zeichnen
            crc2d.fillStyle = "#000000";
            crc2d.beginPath();
            crc2d.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI);
            crc2d.fill();

            crc2d.strokeStyle = "#000000";
            crc2d.beginPath();
            crc2d.moveTo(this.xPos, this.yPos);
            crc2d.lineTo(this.xPos, this.yPos + 18);
            crc2d.stroke();

            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 15, this.yPos + 18);
            crc2d.lineTo(this.xPos + 15, this.yPos + 18);
            crc2d.quadraticCurveTo(this.xPos + 20, this.yPos + 18, this.xPos + 20, this.yPos + 23);
            crc2d.lineTo(this.xPos + 20, this.yPos + 43);
            crc2d.lineTo(this.xPos - 20, this.yPos + 43);
            crc2d.lineTo(this.xPos - 20, this.yPos + 23);
            crc2d.quadraticCurveTo(this.xPos - 20, this.yPos + 18, this.xPos - 15, this.yPos + 18);
            crc2d.stroke();

            crc2d.strokeStyle = "#c80000";
            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 25, this.yPos + 43);
            crc2d.lineTo(this.xPos + 25, this.yPos + 43);
            crc2d.lineWidth = 2;
            crc2d.stroke();
            crc2d.lineWidth = 1;

            //skifahrer sitzend hoch
            if (this.changePath == false) {
                crc2d.fillStyle = "#d6c2bb";
                crc2d.beginPath();
                crc2d.arc(this.xPos, this.yPos + 25, 4, 0, 2 * Math.PI);
                crc2d.fill();

                crc2d.fillStyle = this.fahrer.color;
                crc2d.beginPath();
                crc2d.moveTo(this.xPos - 3, this.yPos + 31);
                crc2d.lineTo(this.xPos - 3, this.yPos + 42);
                crc2d.lineTo(this.xPos + 4, this.yPos + 42);
                crc2d.lineTo(this.xPos + 4, this.yPos + 31);
                crc2d.fill();

                crc2d.beginPath();
                crc2d.moveTo(this.xPos - 3, this.yPos + 38);
                crc2d.lineTo(this.xPos - 8, this.yPos + 38);
                crc2d.lineTo(this.xPos - 8, this.yPos + 42);
                crc2d.lineTo(this.xPos - 3, this.yPos + 42);
                crc2d.fill();

                crc2d.beginPath();
                crc2d.moveTo(this.xPos - 8, this.yPos + 42);
                crc2d.lineTo(this.xPos - 8, this.yPos + 48);
                crc2d.lineTo(this.xPos - 5, this.yPos + 38);
                crc2d.lineTo(this.xPos - 5, this.yPos + 42);
                crc2d.fill();
            }
            else if (this.changePath == true && this.stay == true) {
                //skifahrer sitzend runter
                crc2d.fillStyle = "#d6c2bb";
                crc2d.beginPath();
                crc2d.arc(this.xPos, this.yPos + 25, 4, 0, 2 * Math.PI);
                crc2d.fill();

                crc2d.fillStyle = this.fahrer.color;
                crc2d.beginPath();
                crc2d.moveTo(this.xPos - 4, this.yPos + 31);
                crc2d.lineTo(this.xPos - 4, this.yPos + 42);
                crc2d.lineTo(this.xPos + 3, this.yPos + 42);
                crc2d.lineTo(this.xPos + 3, this.yPos + 31);
                crc2d.fill();

                crc2d.beginPath();
                crc2d.moveTo(this.xPos + 3, this.yPos + 38);
                crc2d.lineTo(this.xPos + 8, this.yPos + 38);
                crc2d.lineTo(this.xPos + 8, this.yPos + 42);
                crc2d.lineTo(this.xPos + 3, this.yPos + 42);
                crc2d.fill();

                crc2d.beginPath();
                crc2d.moveTo(this.xPos + 8, this.yPos + 42);
                crc2d.lineTo(this.xPos + 8, this.yPos + 48);
                crc2d.lineTo(this.xPos + 5, this.yPos + 48);
                crc2d.lineTo(this.xPos + 5, this.yPos + 42);
                crc2d.fill();

            }
        }

        animate(): void {

            if (this.xPos <= 50) {
                this.changePath = true;
                //... manche trauen sich nicht runter :D
                if (Math.random() > 0.3) {
                    this.stay = false;

                }
            }

            if (this.stay == false) {this.fahrer.animate(); }
            if (this.changePath == false) {this.moveUp(); }
            else if (this.changePath == true) {this.moveDown(); }
            this.draw();
        }

        moveUp(): void {
            this.xPos -= 3;
            this.yPos -= 2.1;
        }

        moveDown(): void {
            this.xPos += +3;
            this.yPos += 1.92;
        }
    }

}