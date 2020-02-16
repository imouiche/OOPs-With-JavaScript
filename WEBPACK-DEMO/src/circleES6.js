//Implementation details
const _radius = new WeakMap();

//Public interface -- what to export using export keyword
export class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}
