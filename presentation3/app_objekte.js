//Object Literal Syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function () {
        console.log('draw');
    }
};

circle.draw();

// Factory Function
function createCircle(radius) {
    return {
        draw: function () {
            console.log('draw');
        }
    };
}

const circle2 = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const another = new Circle(1);