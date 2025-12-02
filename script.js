// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

// Square class inheriting from Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Call the parent class (Rectangle) constructor
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this._width; // or 4 * this.width
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
