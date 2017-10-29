/*
 Aufgabe 3: Animation: Schneegestöber
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 29.10.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var hi;
(function (hi) {
    window.addEventListener("load", init);
    var snowX = [];
    var snowY = [];
    var snowXsmall = [];
    var snowYsmall = [];
    var cloudX = [200, 300];
    var staticObjects;
    var crc2d;
    var lift = [];
    var skifahrer = [];
    var Skifahrer = /** @class */ (function () {
        function Skifahrer() {
            this.xPos = 50;
            this.yPos = 150;
            this.yAdd = 0;
            this.angle = Math.random() * 3;
        }
        Skifahrer.prototype.draw = function () {
            //skifahrer zeichnen
            crc2d.fillStyle = "#000000";
            crc2d.beginPath();
            crc2d.arc(this.xPos, this.yPos, 4, 0, 2 * Math.PI);
            crc2d.fill();
            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 5, this.yPos + 5);
            crc2d.lineTo(this.xPos + 1, this.yPos + 7);
            crc2d.lineTo(this.xPos - 3, this.yPos + 16);
            crc2d.lineTo(this.xPos - 9, this.yPos + 14);
            crc2d.fill();
            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 9, this.yPos + 14);
            crc2d.lineTo(this.xPos - 11, this.yPos + 25);
            crc2d.lineTo(this.xPos - 9, this.yPos + 25);
            crc2d.lineTo(this.xPos - 6, this.yPos + 14);
            crc2d.fill();
            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 6, this.yPos + 15);
            crc2d.lineTo(this.xPos - 2, this.yPos + 25);
            crc2d.lineTo(this.xPos, this.yPos + 25);
            crc2d.lineTo(this.xPos - 3, this.yPos + 15);
            crc2d.fill();
            crc2d.beginPath();
            crc2d.moveTo(this.xPos + 1, this.yPos + 7);
            crc2d.lineTo(this.xPos + 4, this.yPos + 15);
            crc2d.lineTo(this.xPos + 2, this.yPos + 16);
            crc2d.lineTo(this.xPos - 1, this.yPos + 8);
            crc2d.fill();
            crc2d.strokeStyle = "#c80000";
            crc2d.beginPath();
            crc2d.moveTo(this.xPos + 3, this.yPos + 32);
            crc2d.lineTo(this.xPos - 9, this.yPos + 8);
            crc2d.stroke();
            crc2d.beginPath();
            crc2d.moveTo(this.xPos - 10, this.yPos + 32);
            crc2d.lineTo(this.xPos - 11, this.yPos + 7);
            crc2d.stroke();
        };
        Skifahrer.prototype.animate = function () {
            this.xPos += this.angle;
            this.yAdd += 0.1;
            this.yPos += 1 + this.yAdd;
            this.draw();
        };
        return Skifahrer;
    }());
    var Skilift = /** @class */ (function () {
        function Skilift() {
            this.xPos = 766.666;
            this.yPos = 600;
            this.changePath = false;
            this.fahrer = true;
        }
        Skilift.prototype.draw = function () {
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
                crc2d.fillStyle = "#000000";
                crc2d.beginPath();
                crc2d.arc(this.xPos, this.yPos + 25, 4, 0, 2 * Math.PI);
                crc2d.fill();
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
            else if (this.changePath == true && this.fahrer == true) {
                //skifahrer sitzend runter
                crc2d.fillStyle = "#000000";
                crc2d.beginPath();
                crc2d.arc(this.xPos, this.yPos + 25, 4, 0, 2 * Math.PI);
                crc2d.fill();
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
        };
        Skilift.prototype.animate = function () {
            if (this.xPos <= 50) {
                this.changePath = true;
                //... manche trauen sich nicht runter :D
                if (Math.random() > 0.3) {
                    this.fahrer = false;
                    skifahrer.push(new Skifahrer);
                }
            }
            if (this.changePath == false) {
                this.moveUp();
            }
            else if (this.changePath == true) {
                this.moveDown();
            }
            this.draw();
        };
        Skilift.prototype.moveUp = function () {
            this.xPos -= 3;
            this.yPos -= 2.1;
        };
        Skilift.prototype.moveDown = function () {
            this.xPos += +3;
            this.yPos += 1.92;
        };
        return Skilift;
    }());
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2d = canvas.getContext("2d");
        console.log(crc2d);
        //schneeflocken-position festlegen
        for (var i = 0; i < 30; i++) {
            snowX[i] = Math.random() * 800;
            snowY[i] = Math.random() * 200;
        }
        for (var i = 0; i < 30; i++) {
            snowXsmall[i] = Math.random() * 800;
            snowYsmall[i] = Math.random() * 200;
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
        //erster lift wird generiert
        lift.push(new Skilift);
        //bild wird gespeichert
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
        for (var i = 1; i < snowXsmall.length; i++) {
            snowXsmall[i] += 0.5;
            snowYsmall[i] += 2;
            if (snowYsmall[i] > 200) {
                snowYsmall[i] = 0;
            }
            if (snowXsmall[i] > 800) {
                snowXsmall[i] = 0;
            }
            drawSnow(snowXsmall[i], snowYsmall[i], 0.3 + Math.random() * 0.8, crc2d);
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
        //lift animieren
        for (var i = 0; i < lift.length; i++) {
            lift[i].animate();
            //bei haelfte des canvas-width soll neuer lift erscheinen
            if (lift[i].xPos < 400 && lift[i].xPos > 396 && lift[i].yPos < 345 && lift[i].yPos > 340) {
                lift.push(new Skilift);
            }
        }
        //skifahrer animieren
        for (var n = 0; n < skifahrer.length; n++) {
            skifahrer[n].animate();
            //arrayelement skifahrer wird geloescht wenn nicht mehr gebraucht
            if (skifahrer[n].yPos > 600 && skifahrer.length > 1) {
                skifahrer.splice(0, 1);
                console.log(skifahrer.length);
            }
        }
        //lift wird geloescht wenn nicht mehr gebraucht
        if (lift[0].xPos > 800) {
            lift.splice(0, 1);
            console.log(lift.length);
        }
        window.setTimeout(animate, 20);
    }
})(hi || (hi = {}));
//# sourceMappingURL=canvas2.js.map