class Square {
  constructor(length, l, w) {
    this.length = length;
    this.l = l || 0;
    this.w = w || 0;
  }

  area() {
    return this.length * this.length;
  }

  perimeter() {
    return (this.length * 4);
  }

  contains(a, b) {
    if (a >= (this.length - (this.length/2)) && a <= (this.length + (this.length/2)) && b >= (this.length - (this.length/2)) && b <= (this.length + (this.length/2))) {
      return true;
    } else {
      return false;
    }
  }
}
