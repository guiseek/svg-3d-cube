import { point3ToPoint2 } from '../mappers'
import { Faces } from '../../types/faces'
import { Point3 } from '../../core'

export class RenderCube {
  vertices: Point3[]
  faces: Faces[]

  constructor(
    public container: SVGElement,
    public center: Point3,
    public size: number
  ) {
    const d = size / 2

    const { x, y, z } = center

    this.vertices = [
      new Point3(x - d, y - d, z + d),
      new Point3(x - d, y - d, z - d),
      new Point3(x + d, y - d, z - d),
      new Point3(x + d, y - d, z + d),
      new Point3(x + d, y + d, z + d),
      new Point3(x + d, y + d, z - d),
      new Point3(x - d, y + d, z - d),
      new Point3(x - d, y + d, z + d),
    ]

    const [v0, v1, v2, v3, v4, v5, v6, v7] = this.vertices

    this.faces = [
      [v0, v1, v2, v3],
      [v3, v2, v5, v4],
      [v4, v5, v6, v7],
      [v7, v6, v1, v0],
      [v7, v0, v3, v4],
      [v1, v6, v5, v2],
    ]
  }

  execute(dx: number, dy: number) {
    this.container.innerHTML = ''
    this.faces.forEach((face) => {
      const point = point3ToPoint2(face[0])
      let str = `<path d="M${point.x + dx} ${-point.y + dy}`

      face.map(point3ToPoint2).forEach((point) => {
        str += ` L ${point.x + dx} ${-point.y + dy}`
      })

      str += ` Z" fill="rgba(2, 255, 12, 0.4)" stroke-width="3" stroke-linecap="round" stroke="rgba(0, 0, 0, .2)">`

      this.container.innerHTML += str
    })
  }
}
