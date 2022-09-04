import { Point3 } from '../core'

export const rotate = (
  vertice: Point3,
  center: Point3,
  theta: number,
  phi: number
) => {
  const ct = Math.cos(theta)
  const st = Math.sin(theta)
  const cp = Math.cos(phi)
  const sp = Math.sin(phi)
  const x = vertice.x - center.x
  const y = vertice.y - center.y
  const z = vertice.z - center.z

  vertice.x = ct * x - st * cp * y + st * sp * z + center.x
  vertice.y = st * x + ct * cp * y - ct * sp * z + center.y
  vertice.z = sp * y + cp * z + center.z
}
