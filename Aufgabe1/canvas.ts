/**
 * Created by Claudia on 10.10.2017.
 */
window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasELement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2d: canvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2d);

    //himmel
    gradient = crc2d.createLinearGradient(0, 0, 0, 170);
    gradient.addColorStop(0, "#cdcce3");
    gradient.addColorStop(0.5, "#cdbcc2");
    gradient.addColorStop(1, "#d49ea0");
    crc2d.fillStyle = gradient;
    crc2d.fillRect(0, 0, 800, 200);

    //schnee
    crc2d.fillStyle = "#f7f7f7";
    crc2d.fillRect(0, 200, 800, 400);

    //schneehuegel
    crc2d.beginPath();
    crc2d.moveTo(0, 400);
    crc2d.bezierCurveTo(150, 380, 200, 420, 300, 450);
    crc2d.fillStyle = "#fbfbfb";
    crc2d.fill();
    crc2d.beginPath();
    crc2d.moveTo(0, 400);
    crc2d.lineTo(300, 450);
    crc2d.lineTo(120, 540);
    crc2d.lineTo(0, 550);
    crc2d.fillStyle = "#fbfbfb";
    crc2d.fill();

    crc2d.beginPath();
    crc2d.moveTo(120, 540);
    crc2d.bezierCurveTo(450, 350, 650, 350, 800, 420);
    crc2d.fillStyle = "#fbfbfb";
    crc2d.fill();
    crc2d.beginPath();
    crc2d.moveTo(300, 500);
    crc2d.lineTo(800, 420);
    crc2d.lineTo(800, 550);
    crc2d.fillStyle = "#fbfbfb";
    crc2d.fill();
    crc2d.closePath();

    crc2d.beginPath();
    crc2d.moveTo(0, 500);
    crc2d.lineTo(800, 500);
    crc2d.lineTo(800, 600);
    crc2d.lineTo(0, 600);
    crc2d.fillStyle = "#fbfbfb";
    crc2d.fill();

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

    //sonne


    //skilift hinten
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

    crc2d.strokeStyle   = "#c80000";
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

    //baum
    crc2d.fillStyle = "#53826a";
    crc2d.beginPath();
    crc2d.moveTo(100, 440);
    crc2d.lineTo(115, 520);
    crc2d.lineTo(85, 520);
    crc2d.fill();

    crc2d.fillStyle = "#53826a";
    crc2d.beginPath();
    crc2d.moveTo(30, 550);
    crc2d.lineTo(40, 600);
    crc2d.lineTo(20, 600);
    crc2d.fill();

    crc2d.fillStyle = "#53826a";
    crc2d.beginPath();
    crc2d.moveTo(60, 480);
    crc2d.lineTo(75, 560);
    crc2d.lineTo(45, 560);
    crc2d.fill();

    crc2d.fillStyle = "#53826a";
    crc2d.beginPath();
    crc2d.moveTo(150, 500);
    crc2d.lineTo(165, 580);
    crc2d.lineTo(135, 580);
    crc2d.fill();
}