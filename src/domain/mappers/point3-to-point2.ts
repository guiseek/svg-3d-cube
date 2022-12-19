import { Point2, Point3 } from '../../core'

export const point3ToPoint2 = ({ x, z }: Point3) => new Point2(x, z)
