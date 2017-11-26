/*
 Aufgabe 5 Classes: OO Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 17.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
var nr6;
(function (nr6) {
    window.addEventListener("load", init);
    var staticImg;
    var snowList = [];
    var cloudList = [];
    var treeList = [];
    var lift = [];
    nr6.skifahrer = [];
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        nr6.crc2d = canvas.getContext("2d");
        console.log(nr6.crc2d);
        // crc2d.mozImageSmoothingEnabled = false;
        // crc2d.imageSmoothingEnabled = true;
        initBG();
        //draw trees
        treeList.push(new nr6.Tree(700, 500, 3));
        treeList.push(new nr6.Tree(800, 600, 4));
        treeList.push(new nr6.Tree(700, 230, 1));
        treeList.push(new nr6.Tree(720, 300, 1.2));
        treeList.push(new nr6.Tree(770, 350, 1.6));
        treeList.push(new nr6.Tree(780, 250, 0.8));
        treeList.push(new nr6.Tree(740, 205, 0.5));
        //draw random trees
        for (var i = 0; i < 10; i++) {
            treeList.push(new nr6.Tree);
        }
        drawSkiliftStatic();
        //erster lift wird generiert
        lift.push(new nr6.Skilift);
        //schnee wird generiert
        for (var i = 0; i < 100; i++) {
            snowList.push(new nr6.Snowflake);
        }
        console.log(snowList);
        // //wolken werden generiert
        // cloudList.push(new Cloud(200, 100, drawCloud1));
        // cloudList.push(new Cloud(300, 100, drawCloud2));
        // cloudList.push(new Cloud(500, 100, drawCloud1));
        //bild wird gespeichert
        staticImg = nr6.crc2d.getImageData(0, 0, 800, 600);
        animate();
    }
    function initBG() {
        //himmel
        gradient = nr6.crc2d.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#cdcce3");
        gradient.addColorStop(0.5, "#cdbcc2");
        gradient.addColorStop(1, "#d49ea0");
        nr6.crc2d.fillStyle = gradient;
        nr6.crc2d.fillRect(0, 0, 800, 200);
        //sonne
        nr6.crc2d.fillStyle = "#ffd3a1";
        nr6.crc2d.beginPath();
        nr6.crc2d.arc(350, 200, 15, 0, 2 * Math.PI);
        nr6.crc2d.fill();
        //schnee
        nr6.crc2d.fillStyle = "#f7f7f7";
        nr6.crc2d.fillRect(0, 200, 800, 400);
        //berge
        nr6.crc2d.fillStyle = "#7c777f";
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(400, 200);
        nr6.crc2d.lineTo(500, 80);
        nr6.crc2d.lineTo(600, 200);
        nr6.crc2d.fill();
        nr6.crc2d.fillStyle = "#7c777f";
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(600, 200);
        nr6.crc2d.lineTo(650, 140);
        nr6.crc2d.lineTo(700, 200);
        nr6.crc2d.fill();
        //schnee auf berge
        gradientSnow1 = nr6.crc2d.createLinearGradient(0, 80, 0, 150);
        gradientSnow1.addColorStop(0, "#ffffff");
        gradientSnow1.addColorStop(1, "#bbbdd0");
        nr6.crc2d.fillStyle = gradientSnow1;
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(500, 80);
        nr6.crc2d.lineTo(450, 140);
        nr6.crc2d.lineTo(473, 130);
        nr6.crc2d.lineTo(482, 145);
        nr6.crc2d.lineTo(500, 120);
        nr6.crc2d.lineTo(520, 135);
        nr6.crc2d.lineTo(525, 120);
        nr6.crc2d.lineTo(550, 140);
        nr6.crc2d.fill();
        gradientSnow2 = nr6.crc2d.createLinearGradient(0, 140, 0, 170);
        gradientSnow2.addColorStop(0, "#ffffff");
        gradientSnow2.addColorStop(1, "#bbbdd0");
        nr6.crc2d.fillStyle = gradientSnow2;
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(650, 140);
        nr6.crc2d.lineTo(625, 170);
        nr6.crc2d.lineTo(635, 160);
        nr6.crc2d.lineTo(640, 165);
        nr6.crc2d.lineTo(650, 157);
        nr6.crc2d.lineTo(675, 170);
        nr6.crc2d.fill();
        //skilift hinten (muss hier hin damits hinter den baeumen bleibt)
        nr6.crc2d.strokeStyle = "#000000";
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(25, 100);
        nr6.crc2d.lineTo(75, 100);
        nr6.crc2d.stroke();
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(65, 100);
        nr6.crc2d.lineTo(65, 130);
        nr6.crc2d.quadraticCurveTo(65, 135, 55, 135);
        nr6.crc2d.lineTo(45, 135);
        nr6.crc2d.quadraticCurveTo(35, 135, 35, 130);
        nr6.crc2d.lineTo(35, 100);
        nr6.crc2d.stroke();
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(50, 135);
        nr6.crc2d.lineTo(50, 200);
        nr6.crc2d.stroke();
    }
    function drawSkiliftStatic() {
        //skilift schnur1
        nr6.crc2d.strokeStyle = "#000000";
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(50, 100);
        nr6.crc2d.lineTo(766.66, 600);
        nr6.crc2d.stroke();
        //skilift schnur2
        nr6.crc2d.strokeStyle = "#000000";
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(50, 100);
        nr6.crc2d.lineTo(800, 578.72);
        nr6.crc2d.stroke();
        //skilift vorne
        nr6.crc2d.strokeStyle = "#000000";
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(450, 400);
        nr6.crc2d.lineTo(550, 400);
        nr6.crc2d.stroke();
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(530, 400);
        nr6.crc2d.lineTo(530, 450);
        nr6.crc2d.quadraticCurveTo(530, 460, 520, 460);
        nr6.crc2d.lineTo(480, 460);
        nr6.crc2d.quadraticCurveTo(470, 460, 470, 450);
        nr6.crc2d.lineTo(470, 400);
        nr6.crc2d.stroke();
        nr6.crc2d.beginPath();
        nr6.crc2d.moveTo(500, 460);
        nr6.crc2d.lineTo(500, 600);
        nr6.crc2d.stroke();
    }
    function animate() {
        nr6.crc2d.clearRect(0, 0, 800, 600);
        nr6.crc2d.putImageData(staticImg, 0, 0);
        //schnee animieren
        for (var i = 0; i < snowList.length; i++) {
            snowList[i].animate();
        }
        //wolken animieren
        // for (let i: number = 0; i < cloudList.length; i++) {
        //     cloudList[i].animate();
        // }
        //lift animieren
        for (var i = 0; i < lift.length; i++) {
            lift[i].animate();
            //console.log("o/");
            if (lift[i].x < 400 && lift[i].x > 396 && lift[i].y < 345 && lift[i].y > 340) {
                lift.push(new nr6.Skilift);
            }
            // if (lift[i].checkHeartbeat == false) {
            //         lift.splice(i, 1);
            //         console.log("o/");
            // }
        }
        //lift.filter(checkHeartbeat());
        window.setTimeout(animate, 20);
    }
})(nr6 || (nr6 = {}));
//# sourceMappingURL=main.js.map