class Rectangle {
  constructor(a, b) {
    this.length = a;
    this.width = b;
  }
  perimeter() {
    return 2 * (a + b);
  }
  area() {
    return a * b;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}
