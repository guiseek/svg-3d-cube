import { Point2, Point3 } from '../core'

export const project = ({ x, z }: Point3) => new Point2(x, z)
