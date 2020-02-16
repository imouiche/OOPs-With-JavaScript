

// ================ NOde.js ===========================================

//export the Circle object using "require()"
/* const Circle = require('./circle'); // return the module.exports

const c = new Circle(10);
c.draw(); */

// =========================== ES6 Modules ========================================

//import the Circle objecty
import {Circle} from './circleES6.js';

const c = new Circle(10);
c.draw();