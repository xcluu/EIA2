/*
 Aufgabe 3: Animation: Schneegestöber
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 18.10.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var hi;
(function (hi) {
    window.addEventListener("load", init);
    var snowX = [];
    var snowY = [];
    var cloudX = [200, 300];
    var liftUpX = [766.666, 1125];
    var liftUpY = [600, 850];
    var liftDownX = [50, 50];
    var liftDownY = [100, 100];
    var staticObjects;
    var liftStart = [false, false];
    var crc2d;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2d = canvas.getContext("2d");
        console.log(crc2d);
        //schneeflocken-position festlegen
        for (var i = 0; i < 30; i++) {
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
        //rdm baum
        for (var i = 0; i < 10; i++) {
            randomTree();
        }
        skiliftStatic();
        staticObjects = crc2d.getImageData(0, 0, 800, 600);
        animate();
    }
    function initBG() {
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
    function drawTree(x, y, size, canvas) {
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
    function randomTree() {
        drawTree(Math.random() * 400, 200 + Math.random() * 600, 0.8 + Math.random() * 1.5, crc2d);
    }
    function randomSnow() {
        drawSnow(Math.random() * 800, Math.random() * 200, 0.8 + Math.random() * 1.5, crc2d);
    }
    function drawSnow(x, y, size, canvas) {
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
    function drawCloud1(x) {
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
    function drawCloud2(x) {
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
    function skiliftStatic() {
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
    function skiliftDynamic(x, y) {
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
        crc2d.stroke();
    }
    // function liftDown(i: number): void {
    //     skiliftDynamic(liftDownX[i], liftDownY[i]);
    //     liftDownX[i] += 3;
    //     liftDownY[i] += 1.92;
    //
    //     this.timeoutID = window.setTimeout(liftDown, 20);
    //
    //     if (liftDownX[i] > 800) {
    //         window.clearTimeout(this.timeoutID);
    //         this.timeoutID = undefined;
    //     }
    // }
    function animate() {
        crc2d.clearRect(0, 0, 800, 600);
        crc2d.putImageData(staticObjects, 0, 0);
        //schnee animieren
        for (var i = 1; i < snowX.length; i++) {
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
        for (var i = 0; i < cloudX.length; i++) {
            cloudX[i] += 0.1;
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
        }
        drawCloud1(cloudX[0]);
        drawCloud2(cloudX[1]);
        //lift nach oben
        for (var i = 0; i < liftUpX.length; i++) {
            skiliftDynamic(liftUpX[i], liftUpY[i]);
            liftUpX[i] -= 2;
            liftUpY[i] -= 1.4;
            if (liftUpX[i] <= 50) {
                console.log(i);
                if (liftUpX[i] == liftUpX[0]) {
                    liftUpX[0] = 766.666;
                    liftUpY[0] = 600;
                }
                else if (liftUpX[i] == liftUpX[1]) {
                    liftUpX[1] = 1125;
                    liftUpY[1] = 850;
                }
                liftDownX[i] = 50;
                liftDownY[i] = 100;
                //lift nach unten startet sobald lift oben ist
                liftStart[i] = true;
            }
            for (var i_1 = 0; i_1 < liftDownX.length; i_1++) {
                if (liftStart[i_1] == true) {
                    skiliftDynamic(liftDownX[i_1], liftDownY[i_1]);
                    liftDownX[i_1] += 3;
                    liftDownY[i_1] += 1.92;
                }
                if (liftDownX[i_1] > 800) {
                    liftStart[i_1] = false;
                }
            }
        }
        window.setTimeout(animate, 20);
    }
})(hi || (hi = {}));
//# sourceMappingURL=canvas.js.map