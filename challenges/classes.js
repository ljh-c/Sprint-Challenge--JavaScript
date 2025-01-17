// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(side_length) {
        // new cube will have length, width, height of the same value, side_length
        // new cube will NOT have a property called side_length
        super(side_length, side_length, side_length);
    }
    // below overrides methods inherited from CuboidMaker
    // however, the below methods could be commented out. the parent's formulas still work
    volume() {
        return Math.pow(this.width, 3);
    }
    surfaceArea() {
        return 6 * Math.pow(this.width, 2);
    }
}

const cube = new CubeMaker(3);

console.log(cube.volume());
console.log(cube.surfaceArea())