/*
 Aufgabe 2: Skipiste mit Funktionen
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 18.10.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace hi {}
window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasELement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2d: canvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2d);

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


    //schneeflocken
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();
    randomSnow();


    //baum
    drawTree(800, 600, 4, crc2d);
    drawTree(700, 230, 1, crc2d);
    drawTree(720, 300, 1.2, crc2d);
    drawTree(770, 350, 1.6, crc2d);
    drawTree(780, 250, 0.8, crc2d);
    drawTree(740, 205, 0.5, crc2d);

    //skilift hinten
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

    //rdm baum
    randomTree();
    randomTree();
    randomTree();
    randomTree();
    randomTree();
    randomTree();
    randomTree();
    randomTree();
    randomTree();
    randomTree();



    //skilift schnur
    crc2d.beginPath();
    crc2d.moveTo(50, 100);
    crc2d.lineTo(800, 600);
    crc2d.stroke();

    //skilift vorne
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

    //skilift zeug
    crc2d.fillStyle = "#000000";
    crc2d.beginPath();
    crc2d.arc(600, 467, 3, 0, 2 * Math.PI);
    crc2d.fill();

    crc2d.beginPath();
    crc2d.moveTo(600, 467);
    crc2d.lineTo(600, 485);
    crc2d.stroke();

    crc2d.beginPath();
    crc2d.moveTo(585, 485);
    crc2d.lineTo(615, 485);
    crc2d.quadraticCurveTo(620, 485, 620, 490);
    crc2d.lineTo(620, 510);
    crc2d.lineTo(580, 510);
    crc2d.lineTo(580, 490);
    crc2d.quadraticCurveTo(580, 485, 585, 485);
    crc2d.stroke();

    crc2d.strokeStyle = "#c80000";
    crc2d.beginPath();
    crc2d.moveTo(575, 510);
    crc2d.lineTo(625, 510);
    crc2d.stroke();

    //wolken
    crc2d.fillStyle = "#a6a1b0";
    crc2d.beginPath();
    crc2d.arc(200, 53, 18, 0, 2 * Math.PI);
    crc2d.fill();
    crc2d.fillStyle = "#a6a1b0";
    crc2d.beginPath();
    crc2d.arc(170, 55, 30, 0, 2 * Math.PI);
    crc2d.fill();
    crc2d.fillStyle = "#a6a1b0";
    crc2d.beginPath();
    crc2d.arc(140, 48, 18, 0, 2 * Math.PI);
    crc2d.fill();

    crc2d.fillStyle = "#a6a1b0";
    crc2d.beginPath();
    crc2d.arc(140, 65, 14, 0, 2 * Math.PI);
    crc2d.fill();

    crc2d.fillStyle = "#a6a1b0";
    crc2d.beginPath();
    crc2d.arc(300, 10, 50, 0, 2 * Math.PI);
    crc2d.fill();
    crc2d.fillStyle = "#a6a1b0";
    crc2d.beginPath();
    crc2d.arc(250, 10, 30, 0, 2 * Math.PI);
    crc2d.fill();
    crc2d.fillStyle = "#a6a1b0";
    crc2d.beginPath();
    crc2d.arc(350, 8, 25, 0, 2 * Math.PI);
    crc2d.fill();
    crc2d.fillStyle = "#a6a1b0";


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
        drawTree(Math.random() * 400, 200 + Math.random() * 600,  0.8 + Math.random() * 1.5, crc2d);
    }

    function randomSnow(): void {
        drawSnow(Math.random() * 800, Math.random() * 200,  0.8 + Math.random() * 1.5, crc2d);
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

}