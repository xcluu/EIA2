/**
 * Created by Claudia on 22.11.2017.
 */
namespace nr6 {

    interface IntMovingObjects {
        x: number;
        y: number;
    }

    export class MovingObjects implements IntMovingObjects {
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
}