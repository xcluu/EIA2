namespace L05_Class {
    export let crc2: CanvasRenderingContext2D;

    let square: Square;
    //let squares: Square[] = [];
    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        square = new Square(200, 100);
        square.setRandomStyle();
        /*
                for (let i: number = 0; i < 30; i++) {
                    let s: Square = new Square(200, 150);
                    s.setRandomStyle();
                    squares[i] = s;
                }

*/
        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 400, 300); // hier Hintergrund restaurieren

        square.update();
        /*
                for (let i: number = 0; i < squares.length; i++) {
                    let s: Square = squares[i];
                    s.update();
                }
        */
        window.setTimeout(animate, 20);
    }
}