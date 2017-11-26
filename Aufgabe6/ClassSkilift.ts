/*
 Aufgabe 6: Polymorphe Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 26.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace nr6 {
    interface IntSkilift {
        changePath: boolean;
        stay: boolean;
        fahrer: Skifahrer;
    }

    export class Skilift extends MovingObject implements IntSkilift {

        constructor() {
            super();
            this.x = 766.666;
            this.y = 600;
            this.changePath = false;
            this.stay = true;
            this.fahrer = new Skifahrer;
            skifahrer.push (this.fahrer);
        }

        draw(): void {
            //lift zeichnen
            crc2d.fillStyle = "#000000";
            crc2d.beginPath();
            crc2d.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2d.fill();

            crc2d.strokeStyle = "#000000";
            crc2d.beginPath();
            crc2d.moveTo(this.x, this.y);
            crc2d.lineTo(this.x, this.y + 18);
            crc2d.stroke();

            crc2d.beginPath();
            crc2d.moveTo(this.x - 15, this.y + 18);
            crc2d.lineTo(this.x + 15, this.y + 18);
            crc2d.quadraticCurveTo(this.x + 20, this.y + 18, this.x + 20, this.y + 23);
            crc2d.lineTo(this.x + 20, this.y + 43);
            crc2d.lineTo(this.x - 20, this.y + 43);
            crc2d.lineTo(this.x - 20, this.y + 23);
            crc2d.quadraticCurveTo(this.x - 20, this.y + 18, this.x - 15, this.y + 18);
            crc2d.stroke();

            crc2d.strokeStyle = "#c80000";
            crc2d.beginPath();
            crc2d.moveTo(this.x - 25, this.y + 43);
            crc2d.lineTo(this.x + 25, this.y + 43);
            crc2d.lineWidth = 2;
            crc2d.stroke();
            crc2d.lineWidth = 1;

            //skifahrer sitzend hoch
            if (this.changePath == false) {
                crc2d.fillStyle = "#d6c2bb";
                crc2d.beginPath();
                crc2d.arc(this.x, this.y + 25, 4, 0, 2 * Math.PI);
                crc2d.fill();

                crc2d.fillStyle = this.fahrer.color;
                crc2d.beginPath();
                crc2d.moveTo(this.x - 3, this.y + 31);
                crc2d.lineTo(this.x - 3, this.y + 42);
                crc2d.lineTo(this.x + 4, this.y + 42);
                crc2d.lineTo(this.x + 4, this.y + 31);
                crc2d.fill();

                crc2d.beginPath();
                crc2d.moveTo(this.x - 3, this.y + 38);
                crc2d.lineTo(this.x - 8, this.y + 38);
                crc2d.lineTo(this.x - 8, this.y + 42);
                crc2d.lineTo(this.x - 3, this.y + 42);
                crc2d.fill();

                crc2d.beginPath();
                crc2d.moveTo(this.x - 8, this.y + 42);
                crc2d.lineTo(this.x - 8, this.y + 48);
                crc2d.lineTo(this.x - 5, this.y + 38);
                crc2d.lineTo(this.x - 5, this.y + 42);
                crc2d.fill();
            }
            else if (this.changePath == true && this.stay == true) {
                //skifahrer sitzend runter
                crc2d.fillStyle = "#d6c2bb";
                crc2d.beginPath();
                crc2d.arc(this.x, this.y + 25, 4, 0, 2 * Math.PI);
                crc2d.fill();

                crc2d.fillStyle = this.fahrer.color;
                crc2d.beginPath();
                crc2d.moveTo(this.x - 4, this.y + 31);
                crc2d.lineTo(this.x - 4, this.y + 42);
                crc2d.lineTo(this.x + 3, this.y + 42);
                crc2d.lineTo(this.x + 3, this.y + 31);
                crc2d.fill();

                crc2d.beginPath();
                crc2d.moveTo(this.x + 3, this.y + 38);
                crc2d.lineTo(this.x + 8, this.y + 38);
                crc2d.lineTo(this.x + 8, this.y + 42);
                crc2d.lineTo(this.x + 3, this.y + 42);
                crc2d.fill();

                crc2d.beginPath();
                crc2d.moveTo(this.x + 8, this.y + 42);
                crc2d.lineTo(this.x + 8, this.y + 48);
                crc2d.lineTo(this.x + 5, this.y + 48);
                crc2d.lineTo(this.x + 5, this.y + 42);
                crc2d.fill();

            }
        }

        animate(): void {
            this.draw();
            //change path abfrage
            if (this.x <= 50) {
                this.changePath = true;
                //... manche trauen sich nicht runter :D
                if (Math.random() > 0.3) {
                    this.stay = false;
                }
            }
            if (this.stay == false) {this.fahrer.animate(); }
            if (this.changePath == false) {this.moveUp(); }
            else if (this.changePath == true) {this.moveDown(); }
            //skifahrer.filter(skifahrer.checkHeartbeat());
        }

        moveUp(): void {
            this.x -= 3;
            this.y -= 2.1;
        }

        moveDown(): void {
            this.x += +3;
            this.y += 1.92;
        }

        checkHeartbeat(): boolean {
            if (this.x > 800) {
                this.heartbeat = false;
            }
            return this.heartbeat;
        }
    }
}