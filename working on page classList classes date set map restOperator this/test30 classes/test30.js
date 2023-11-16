'ues strict';

class Rectangle { // class name always with upper case
    constructor(height, width) { 
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { // creating a minor class from rectangle
    constructor(height, width, text, bgColor) {
        super(height, width); // calls constructor of the parent height and width and it should be always first line
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const square = new Rectangle(10, 10); // creating parent class
const long = new Rectangle(10, 5);

console.log(square.calcArea());
console.log(long.calcArea());


const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red'); // creating child class

div.showMyProps();
console.log(div.calcArea());

//example of creating class
