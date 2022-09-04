import { Point2 } from './point2'

export class Point3 extends Point2 {
  constructor(public x: number, public y: number, public z: number) {
    super(x, y)
    this.z = typeof z === 'number' ? z : 0
  }
}
