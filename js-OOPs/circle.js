//Implementation details
const _radius = new WeakMap();

//Public interface -- what to export
class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

//To make this class accessible from outsite, we need to export it as follow

module.exports = Circle;
//module.exports.Square = Square // incase we also have a square class to export