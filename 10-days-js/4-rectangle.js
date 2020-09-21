function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.area = this.length * this.width;
    this.perimeter = 2 * (this.length + this.width);
}