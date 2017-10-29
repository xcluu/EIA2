/**
 * Created by Claudia on 29.10.2017.
 */
/*
 Aufgabe 3: Animation: Schneegestöber
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 18.10.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace hi {
    window.addEventListener("load", init);

    let snowX: number[] = [];
    let snowY: number[] = [];
    let cloudX: number[] = [200, 300];
    let staticObjects: ImageData;
    let crc2d: canvasRenderingContext2D;
    let lift: object[] = [];

    class Skilift {
        xPos: number;
        yPos: number;
        changePath: boolean;

        constructor() {
            this.xPos = 766.666;
            this.yPos = 600;
            this.changePath = false;
        }

        draw(): void {
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
        }

        animate(): void {

            if (this.xPos <= 50) {this.changePath = true; }
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

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2d = canvas.getContext("2d");
        console.log(crc2d);

        //schneeflocken-position festlegen
        for (let i: number = 0; i < 30; i++) {
            snowX[i] = Math.random() * 800;
            console.log("x" + i + " = " + snowX[i]);
            snowY[i] = Math.random() * 200;
        }

        initBG();

        //skilift hinten (muss hier hin damits hinter den baeumen bleibt)
        crc2d.strokeStyle = "#000000";
        crc2d.beginPath();
        crc2d.moveTo(25, 100);
        crc2d.lineTo(75, 100);
        crc2d.stroke();

        crc2d.beginPath();
        crc2d.moveTo(65, 100);
        crc2d.lineTo(65, 130);
        crc2d.quadraticCurveTo(65, 135, 55, 135);
        crc2d.lineTo(45, 135);
        crc2d.quadraticCurveTo(35, 135, 35, 130);
        crc2d.lineTo(35, 100);
        crc2d.stroke();

        crc2d.beginPath();
        crc2d.moveTo(50, 135);
        crc2d.lineTo(50, 200);
        crc2d.stroke();

        //skifahrer sitzend
        crc2d.fillStyle = "#000000";
        crc2d.beginPath();
        crc2d.arc(50, 10, 4, 0, 2 * Math.PI);
        crc2d.fill();

        crc2d.beginPath();
        crc2d.moveTo(47, 16);
        crc2d.lineTo(47, 27);
        crc2d.lineTo(54, 27);
        crc2d.lineTo(54, 16);
        crc2d.fill();

        crc2d.beginPath();
        crc2d.moveTo(47, 23);
        crc2d.lineTo(42, 23);
        crc2d.lineTo(42, 27);
        crc2d.lineTo(47, 27);
        crc2d.fill();

        crc2d.beginPath();
        crc2d.moveTo(42, 27);
        crc2d.lineTo(42, 33);
        crc2d.lineTo(45, 33);
        crc2d.lineTo(45, 27);
        crc2d.fill();

        crc2d.fillStyle = "#000000";
        crc2d.beginPath();
        crc2d.arc(70, 10, 4, 0, 2 * Math.PI);
        crc2d.fill();

        crc2d.beginPath();
        crc2d.moveTo(65, 15);
        crc2d.lineTo(71, 17);
        crc2d.lineTo(67, 26);
        crc2d.lineTo(61, 24);
        crc2d.fill();


        //rdm baum
        for (let i: number = 0; i < 10; i++) {
            randomTree();
        }

        skiliftStatic();

        lift.push(new Skilift);


        staticObjects = crc2d.getImageData(0, 0, 800, 600);
        animate();
    }

    function initBG(): void {
        //himmel
        gradient = crc2d.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#cdcce3");
        gradient.addColorStop(0.5, "#cdbcc2");
        gradient.addColorStop(1, "#d49ea0");
        crc2d.fillStyle = gradient;
        crc2d.fillRect(0, 0, 800, 200);

        //sonne
        crc2d.fillStyle = "#ffd3a1";
        crc2d.beginPath();
        crc2d.arc(350, 200, 15, 0, 2 * Math.PI);
        crc2d.fill();

        //schnee
        crc2d.fillStyle = "#f7f7f7";
        crc2d.fillRect(0, 200, 800, 400);

        //berge
        crc2d.fillStyle = "#7c777f";
        crc2d.beginPath();
        crc2d.moveTo(400, 200);
        crc2d.lineTo(500, 80);
        crc2d.lineTo(600, 200);
        crc2d.fill();

        crc2d.fillStyle = "#7c777f";
        crc2d.beginPath();
        crc2d.moveTo(600, 200);
        crc2d.lineTo(650, 140);
        crc2d.lineTo(700, 200);
        crc2d.fill();

        //schnee auf berge
        gradientSnow1 = crc2d.createLinearGradient(0, 80, 0, 150);
        gradientSnow1.addColorStop(0, "#ffffff");
        gradientSnow1.addColorStop(1, "#bbbdd0");
        crc2d.fillStyle = gradientSnow1;
        crc2d.beginPath();
        crc2d.moveTo(500, 80);
        crc2d.lineTo(450, 140);
        crc2d.lineTo(473, 130);
        crc2d.lineTo(482, 145);
        crc2d.lineTo(500, 120);
        crc2d.lineTo(520, 135);
        crc2d.lineTo(525, 120);
        crc2d.lineTo(550, 140);
        crc2d.fill();

        gradientSnow2 = crc2d.createLinearGradient(0, 140, 0, 170);
        gradientSnow2.addColorStop(0, "#ffffff");
        gradientSnow2.addColorStop(1, "#bbbdd0");
        crc2d.fillStyle = gradientSnow2;
        crc2d.beginPath();
        crc2d.moveTo(650, 140);
        crc2d.lineTo(625, 170);
        crc2d.lineTo(635, 160);
        crc2d.lineTo(640, 165);
        crc2d.lineTo(650, 157);
        crc2d.lineTo(675, 170);
        crc2d.fill();

        //baum
        drawTree(800, 600, 4, crc2d);
        drawTree(700, 230, 1, crc2d);
        drawTree(720, 300, 1.2, crc2d);
        drawTree(770, 350, 1.6, crc2d);
        drawTree(780, 250, 0.8, crc2d);
        drawTree(740, 205, 0.5, crc2d);
    }

    function drawTree(x: number, y: number, size: number, canvas: HTMLCanvasELement): void {
        canvas.fillStyle = "#53826a";
        canvas.beginPath();
        canvas.moveTo(x, y);
        canvas.lineTo(x + (20 * size), y);
        canvas.lineTo(x, y - (30 * size));
        canvas.lineTo(x - (20 * size), y);
        canvas.fill();

        canvas.beginPath();
        canvas.moveTo(x, y - (15 * size));
        canvas.lineTo(x + (15 * size), y - (15 * size));
        canvas.lineTo(x, y - (45 * size));
        canvas.lineTo(x - (15 * size), y - (15 * size));
        canvas.fill();

        canvas.beginPath();
        canvas.moveTo(x, y - (30 * size));
        canvas.lineTo(x + (10 * size), y - (30 * size));
        canvas.lineTo(x, y - (60 * size));
        canvas.lineTo(x - (10 * size), y - (30 * size));
        canvas.fill();
    }

    function randomTree(): void {
        drawTree(Math.random() * 400, 200 + Math.random() * 600, 0.8 + Math.random() * 1.5, crc2d);
    }

    function randomSnow(): void {
        drawSnow(Math.random() * 800, Math.random() * 200, 0.8 + Math.random() * 1.5, crc2d);
    }

    function drawSnow(x: number, y: number, size: number, canvas: HTMLCanvasELement): void {
        canvas.strokeStyle = "#ffffff";
        canvas.beginPath();
        canvas.moveTo(x - (5 * size), y);
        canvas.lineTo(x + (5 * size), y);
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(x, y - (5 * size));
        canvas.lineTo(x, y + (5 * size));
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(x - (2.5 * size), y - (2.5 * size));
        canvas.lineTo(x + (2.5 * size), y + (2.5 * size));
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(x + (2.5 * size), y - (2.5 * size));
        canvas.lineTo(x - (2.5 * size), y + (2.5 * size));
        canvas.stroke();
    }

    function drawCloud1(x: number): void {
        crc2d.fillStyle = "#a6a1b0";
        crc2d.beginPath();
        crc2d.arc(x, 53, 18, 0, 2 * Math.PI);
        crc2d.fill();
        crc2d.fillStyle = "#a6a1b0";
        crc2d.beginPath();
        crc2d.arc(x - 30, 55, 30, 0, 2 * Math.PI);
        crc2d.fill();
        crc2d.fillStyle = "#a6a1b0";
        crc2d.beginPath();
        crc2d.arc(x - 60, 48, 18, 0, 2 * Math.PI);
        crc2d.fill();
        crc2d.fillStyle = "#a6a1b0";
        crc2d.beginPath();
        crc2d.arc(x - 60, 65, 14, 0, 2 * Math.PI);
        crc2d.fill();
    }

    function drawCloud2(x: number): void {
        crc2d.fillStyle = "#a6a1b0";
        crc2d.beginPath();
        crc2d.arc(x, 10, 50, 0, 2 * Math.PI);
        crc2d.fill();
        crc2d.fillStyle = "#a6a1b0";
        crc2d.beginPath();
        crc2d.arc(x - 50, 10, 30, 0, 2 * Math.PI);
        crc2d.fill();
        crc2d.fillStyle = "#a6a1b0";
        crc2d.beginPath();
        crc2d.arc(x + 50, 8, 25, 0, 2 * Math.PI);
        crc2d.fill();
    }

    function skiliftStatic(): void {
        //skilift schnur1
        crc2d.strokeStyle = "#000000";
        crc2d.beginPath();
        crc2d.moveTo(50, 100);
        crc2d.lineTo(766.66, 600);
        crc2d.stroke();

        //skilift schnur2
        crc2d.strokeStyle = "#000000";
        crc2d.beginPath();
        crc2d.moveTo(50, 100);
        crc2d.lineTo(800, 578.72);
        crc2d.stroke();

        //skilift vorne
        crc2d.strokeStyle = "#000000";
        crc2d.beginPath();
        crc2d.moveTo(450, 400);
        crc2d.lineTo(550, 400);
        crc2d.stroke();

        crc2d.beginPath();
        crc2d.moveTo(530, 400);
        crc2d.lineTo(530, 450);
        crc2d.quadraticCurveTo(530, 460, 520, 460);
        crc2d.lineTo(480, 460);
        crc2d.quadraticCurveTo(470, 460, 470, 450);
        crc2d.lineTo(470, 400);
        crc2d.stroke();

        crc2d.beginPath();
        crc2d.moveTo(500, 460);
        crc2d.lineTo(500, 600);
        crc2d.stroke();
    }

    function skiliftDynamic(x: number, y: number): void {
        //skilift zeug
        crc2d.fillStyle = "#000000";
        crc2d.beginPath();
        crc2d.arc(x, y, 3, 0, 2 * Math.PI);
        crc2d.fill();

        crc2d.strokeStyle = "#000000";
        crc2d.beginPath();
        crc2d.moveTo(x, y);
        crc2d.lineTo(x, y + 18);
        crc2d.stroke();

        crc2d.beginPath();
        crc2d.moveTo(x - 15, y + 18);
        crc2d.lineTo(x + 15, y + 18);
        crc2d.quadraticCurveTo(x + 20, y + 18, x + 20, y + 23);
        crc2d.lineTo(x + 20, y + 43);
        crc2d.lineTo(x - 20, y + 43);
        crc2d.lineTo(x - 20, y + 23);
        crc2d.quadraticCurveTo(x - 20, y + 18, x - 15, y + 18);
        crc2d.stroke();

        crc2d.strokeStyle = "#c80000";
        crc2d.beginPath();
        crc2d.moveTo(x - 25, y + 43);
        crc2d.lineTo(x + 25, y + 43);
        crc2d.lineWidth = 2;
        crc2d.stroke();
        crc2d.lineWidth = 1;
    }

    //funktioniert nur als einzelner lift im bild ohne i
    /*function liftDown(i: number): void {
     skiliftDynamic(liftDownX[i], liftDownY[i]);
     liftDownX[i] += 3;
     liftDownY[i] += 1.92;

     this.timeoutID = window.setTimeout(liftDown, 20);

     if (liftDownX[i] > 800) {
     window.clearTimeout(this.timeoutID);
     this.timeoutID = undefined;
     }
     }*/

    function animate(): void {
        crc2d.clearRect(0, 0, 800, 600);
        crc2d.putImageData(staticObjects, 0, 0);


        //schnee animieren
        for (let i: number = 1; i < snowX.length; i++) {
            snowX[i] += 0.5;
            snowY[i] += 2;

            if (snowY[i] > 200) {
                snowY[i] = 0;
            }
            if (snowX[i] > 800) {
                snowX[i] = 0;
            }

            drawSnow(snowX[i], snowY[i], 0.8 + Math.random() * 1.5, crc2d);
        }

        //wolken animieren
        for (let i: number = 0; i < cloudX.length; i++) {
            cloudX[i] += 0.1;
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
        }
        drawCloud1(cloudX[0]);
        drawCloud2(cloudX[1]);

        //lift animieren
        for (let i: number = 0; i < lift.length; i++) {
           lift[i].animate();

           //bei haelfte des canvas-width soll neuer lift erscheinen
           if (lift[i].xPos < 400 && lift[i].xPos > 396 && lift[i].yPos < 345 && lift[i].yPos > 340) {
               lift.push(new Skilift);
           }
        }
        //lift wird geloescht wenn nicht mehr gebraucht
        if (lift[0].xPos > 800) {
            lift.splice(0, 1);
            console.log(lift.length);
        }
        window.setTimeout(animate, 20);
    }
}