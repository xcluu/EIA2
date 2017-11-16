/*
 Aufgabe 4 Interface: Assoziative Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 12.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var nr5;
(function (nr5) {
    //Stimmt das Interface fuer die Klasse so? Ich glaube das Interface macht in dem Fall gar nichts... xD
    window.addEventListener("load", init);
    var staticImg;
    var snowList = [];
    var cloud = [];
    var treeList = [];
    var lift = [];
    nr5.skifahrer = [];
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        nr5.crc2d = canvas.getContext("2d");
        console.log(nr5.crc2d);
        //draw trees
        treeList.push(new nr5.Tree(800, 600, 4));
        treeList.push(new nr5.Tree(700, 230, 1));
        treeList.push(new nr5.Tree(720, 300, 1.2));
        treeList.push(new nr5.Tree(770, 350, 1.6));
        treeList.push(new nr5.Tree(780, 250, 0.8));
        treeList.push(new nr5.Tree(740, 205, 0.5));
        initBG();
        //draw random trees
        for (var i = 0; i < 10; i++) {
            treeList.push(new nr5.Tree);
        }
        treeList[11].draw();
        drawSkiliftStatic();
        //erster lift wird generiert
        lift.push(new nr5.Skilift);
        //schnee wird generiert
        for (var i = 0; i < 50; i++) {
            snowList.push(new nr5.Snow);
        }
        //wolken werden generiert
        cloud.push(new nr5.Cloud(200));
        cloud.push(new nr5.Cloud(300));
        cloud.push(new nr5.Cloud(500));
        //bild wird gespeichert
        staticImg = nr5.crc2d.getImageData(0, 0, 800, 600);
        animate();
    }
    function initBG() {
        //himmel
        gradient = nr5.crc2d.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#cdcce3");
        gradient.addColorStop(0.5, "#cdbcc2");
        gradient.addColorStop(1, "#d49ea0");
        nr5.crc2d.fillStyle = gradient;
        nr5.crc2d.fillRect(0, 0, 800, 200);
        //sonne
        nr5.crc2d.fillStyle = "#ffd3a1";
        nr5.crc2d.beginPath();
        nr5.crc2d.arc(350, 200, 15, 0, 2 * Math.PI);
        nr5.crc2d.fill();
        //schnee
        nr5.crc2d.fillStyle = "#f7f7f7";
        nr5.crc2d.fillRect(0, 200, 800, 400);
        //berge
        nr5.crc2d.fillStyle = "#7c777f";
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(400, 200);
        nr5.crc2d.lineTo(500, 80);
        nr5.crc2d.lineTo(600, 200);
        nr5.crc2d.fill();
        nr5.crc2d.fillStyle = "#7c777f";
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(600, 200);
        nr5.crc2d.lineTo(650, 140);
        nr5.crc2d.lineTo(700, 200);
        nr5.crc2d.fill();
        //schnee auf berge
        gradientSnow1 = nr5.crc2d.createLinearGradient(0, 80, 0, 150);
        gradientSnow1.addColorStop(0, "#ffffff");
        gradientSnow1.addColorStop(1, "#bbbdd0");
        nr5.crc2d.fillStyle = gradientSnow1;
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(500, 80);
        nr5.crc2d.lineTo(450, 140);
        nr5.crc2d.lineTo(473, 130);
        nr5.crc2d.lineTo(482, 145);
        nr5.crc2d.lineTo(500, 120);
        nr5.crc2d.lineTo(520, 135);
        nr5.crc2d.lineTo(525, 120);
        nr5.crc2d.lineTo(550, 140);
        nr5.crc2d.fill();
        gradientSnow2 = nr5.crc2d.createLinearGradient(0, 140, 0, 170);
        gradientSnow2.addColorStop(0, "#ffffff");
        gradientSnow2.addColorStop(1, "#bbbdd0");
        nr5.crc2d.fillStyle = gradientSnow2;
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(650, 140);
        nr5.crc2d.lineTo(625, 170);
        nr5.crc2d.lineTo(635, 160);
        nr5.crc2d.lineTo(640, 165);
        nr5.crc2d.lineTo(650, 157);
        nr5.crc2d.lineTo(675, 170);
        nr5.crc2d.fill();
        //skilift hinten (muss hier hin damits hinter den baeumen bleibt)
        nr5.crc2d.strokeStyle = "#000000";
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(25, 100);
        nr5.crc2d.lineTo(75, 100);
        nr5.crc2d.stroke();
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(65, 100);
        nr5.crc2d.lineTo(65, 130);
        nr5.crc2d.quadraticCurveTo(65, 135, 55, 135);
        nr5.crc2d.lineTo(45, 135);
        nr5.crc2d.quadraticCurveTo(35, 135, 35, 130);
        nr5.crc2d.lineTo(35, 100);
        nr5.crc2d.stroke();
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(50, 135);
        nr5.crc2d.lineTo(50, 200);
        nr5.crc2d.stroke();
    }
    function drawSkiliftStatic() {
        //skilift schnur1
        nr5.crc2d.strokeStyle = "#000000";
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(50, 100);
        nr5.crc2d.lineTo(766.66, 600);
        nr5.crc2d.stroke();
        //skilift schnur2
        nr5.crc2d.strokeStyle = "#000000";
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(50, 100);
        nr5.crc2d.lineTo(800, 578.72);
        nr5.crc2d.stroke();
        //skilift vorne
        nr5.crc2d.strokeStyle = "#000000";
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(450, 400);
        nr5.crc2d.lineTo(550, 400);
        nr5.crc2d.stroke();
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(530, 400);
        nr5.crc2d.lineTo(530, 450);
        nr5.crc2d.quadraticCurveTo(530, 460, 520, 460);
        nr5.crc2d.lineTo(480, 460);
        nr5.crc2d.quadraticCurveTo(470, 460, 470, 450);
        nr5.crc2d.lineTo(470, 400);
        nr5.crc2d.stroke();
        nr5.crc2d.beginPath();
        nr5.crc2d.moveTo(500, 460);
        nr5.crc2d.lineTo(500, 600);
        nr5.crc2d.stroke();
    }
    function animate() {
        nr5.crc2d.clearRect(0, 0, 800, 600);
        nr5.crc2d.putImageData(staticImg, 0, 0);
        //schnee animieren
        for (var i = 0; i < snowList.length; i++) {
            snowList[i].x += 0.5;
            snowList[i].y += 2;
            if (snowList[i].y > 200) {
                snowList[i].y = 0;
            }
            if (snowList[i].x > 800) {
                snowList[i].x = 0;
            }
            snowList[i].draw(0.8 + Math.random() * 1.5);
        }
        for (var i = 0; i < snowList.length; i++) {
            snowList[i].xSmall += 0.5;
            snowList[i].ySmall += 2;
            if (snowList[i].ySmall > 200) {
                snowList[i].ySmall = 0;
            }
            if (snowList[i].xSmall > 800) {
                snowList[i].xSmall = 0;
            }
            snowList[i].drawSmall(0.3 + Math.random() * 0.8);
        }
        //wolken animieren
        for (var i = 0; i < cloud.length; i++) {
            cloud[i].x += 0.5;
            if (cloud[i].x > 800) {
                cloud[i].x = 0;
            }
        }
        cloud[0].drawCloud1();
        cloud[1].drawCloud2();
        cloud[2].drawCloud1();
        //lift animieren
        for (var i = 0; i < lift.length; i++) {
            lift[i].animate();
            //bei haelfte des canvas-width soll neuer lift erscheinen
            if (lift[i].xPos < 400 && lift[i].xPos > 396 && lift[i].yPos < 345 && lift[i].yPos > 340) {
                lift.push(new nr5.Skilift);
            }
        }
        //skifahrer animieren
        for (var n = 0; n < nr5.skifahrer.length; n++) {
            //skifahrer[n].animate();
            //arrayelement skifahrer wird geloescht wenn nicht mehr gebraucht wird
            if (nr5.skifahrer[n].yPos > 600 && nr5.skifahrer.length > 1) {
                nr5.skifahrer.splice(0, 1);
                console.log(nr5.skifahrer.length);
            }
        }
        //lift wird geloescht wenn nicht mehr gebraucht wird
        if (lift[0].xPos > 800) {
            lift.splice(0, 1);
            console.log(lift.length);
        }
        window.setTimeout(animate, 20);
    }
})(nr5 || (nr5 = {}));
//# sourceMappingURL=main.js.map