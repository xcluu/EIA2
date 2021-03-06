/*
 Aufgabe 6: Polymorphe Skipiste
 Name: Claudia Wegen
 Matrikel: 256214
 Datum: 26.11.2017

 Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
 */
namespace nr6 {

    window.addEventListener("load", init);

    let staticImg: ImageData;
    export let crc2d: canvasRenderingContext2D;
    let snowList: IntSnow[] = [];
    let cloudList: IntCloud[] = [];
    let treeList: IntTree[] = [];
    let lift: IntSkilift[] = [];
    export let skifahrer: IntSkifahrer[] = [];

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);


        crc2d = canvas.getContext("2d");
        console.log(crc2d);

        // crc2d.mozImageSmoothingEnabled = false;
        // crc2d.imageSmoothingEnabled = true;

        initBG();
        //draw trees
        treeList.push(new Tree(700, 500, 3));
        treeList.push(new Tree(800, 600, 4));
        treeList.push(new Tree(700, 230, 1));
        treeList.push(new Tree(720, 300, 1.2));
        treeList.push(new Tree(770, 350, 1.6));
        treeList.push(new Tree(780, 250, 0.8));
        treeList.push(new Tree(740, 205, 0.5));
        //draw random trees
        for (let i: number = 0; i < 10; i++) {
            treeList.push(new Tree);
        }
        drawSkiliftStatic();

        //erster lift wird generiert
        lift.push(new Skilift);

        //schnee wird generiert
        for (let i: number = 0; i < 100; i++) {
            snowList.push(new Snowflake);
        }
        console.log(snowList);
        // // wolken werden generiert
        // cloudList.push(new Cloud(200, 100, drawCloud1));
        // cloudList.push(new Cloud(300, 100, drawCloud2));
        // cloudList.push(new Cloud(500, 100, drawCloud1));

        //bild wird gespeichert
        staticImg = crc2d.getImageData(0, 0, 800, 600);
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
    }


    function drawSkiliftStatic(): void {
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


    function animate(): void {
        crc2d.clearRect(0, 0, 800, 600);
        crc2d.putImageData(staticImg, 0, 0);

        //schnee animieren
        for (let i: number = 0; i < snowList.length; i++) {
            snowList[i].animate();
        }

        //wolken animieren
        // for (let i: number = 0; i < cloudList.length; i++) {
        //     cloudList[i].animate();
        // }

        //lift animieren
        for (let i: number = 0; i < lift.length; i++) {
            lift[i].animate();
            //console.log("o/");
            if (lift[i].x < 400 && lift[i].x > 396 && lift[i].y < 345 && lift[i].y > 340) {
                lift.push(new Skilift);

            }
            if (lift[i].checkHeartbeat() == false) {
                    lift.splice(i, 1);
                    console.log(lift.length);
            }
        }
        if  (skifahrer[0].checkHeartbeat() == false) {
            skifahrer.splice(0, 1);
            console.log(skifahrer.length);
        }


        //lift.filter(checkHeartbeat());
        window.setTimeout(animate, 20);
    }


}