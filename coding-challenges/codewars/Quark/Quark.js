class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3;
  }
  interact(other) {
    [this.color, other.color] = [other.color, this.color];
  }
}
