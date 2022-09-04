export class Point2 {
  constructor(public x: number, public y: number) {
    this.x = typeof x === 'number' ? x : 0
    this.y = typeof y === 'number' ? y : 0
  }
}
