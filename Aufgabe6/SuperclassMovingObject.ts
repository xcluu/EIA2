/**
 * Created by Claudia on 22.11.2017.
 */
namespace nr6 {

    interface IntMovingObject {
        x: number;
        y: number;
        heartbeat: boolean;
    }

    export class MovingObject implements IntMovingObject {

        constructor() {
            this.heartbeat = true;
        }

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.heartbeat = true;
        }

        draw(): void {
            //abstract
        }

        animate(): void {
            //abstract
        }
    }
}