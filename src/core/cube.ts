import { project } from '../utilities/project'
import { Faces } from '../types/faces'
import { Point3 } from './point3'

export class Cube {
  vertices: Point3[]
  faces: Faces[]

  constructor(public center: Point3, public size: number) {
    const d = size / 2

    this.vertices = [
      new Point3(center.x - d, center.y - d, center.z + d),
      new Point3(center.x - d, center.y - d, center.z - d),
      new Point3(center.x + d, center.y - d, center.z - d),
      new Point3(center.x + d, center.y - d, center.z + d),
      new Point3(center.x + d, center.y + d, center.z + d),
      new Point3(center.x + d, center.y + d, center.z - d),
      new Point3(center.x - d, center.y + d, center.z - d),
      new Point3(center.x - d, center.y + d, center.z + d),
    ]

    this.faces = [
      [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
      [this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]],
      [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
      [this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]],
      [this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]],
      [this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]],
    ]
  }

  render(container: SVGElement, dx: number, dy: number) {
    container.innerHTML = ''

    for (let i = 0, ii = this.faces.length; i < ii; i++) {
      const face = this.faces[i]
      let point = project(face[0])
      let str = `<path d="M${point.x + dx} ${-point.y + dy}`

      for (let o = 1, oo = face.length; o < oo; o++) {
        point = project(face[o])
        str += ` L ${point.x + dx} ${-point.y + dy}`
      }

      str += ` Z" fill="rgba(10, 10, 10, .1)" stroke="rgba(0, 0, 0, .1)">`

      container.innerHTML += str
    }
  }
}
