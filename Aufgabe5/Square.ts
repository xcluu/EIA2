namespace L05_Class {
    export class Square {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += Math.random() * 4 - 2; // hier experimentieren um
            this.y += Math.random() * 4 - 2; // andere Bewegungsmuster zu finden
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, this.size, this.size);
        }

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}