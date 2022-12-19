import { rotate, query } from './utilities'
import { Point3, Cube } from './core'
import { DragEvent } from './domain'
import './style.scss'

const svgElement = query('svg')

onload = () => {
  if (svgElement) {
    const drag = new DragEvent(svgElement)

    drag.execute().subscribe(console.log)

    const dx = svgElement.width.baseVal.value / 2
    const dy = svgElement.height.baseVal.value / 2

    const center = new Point3(0, dy, 0)
    const cube = new Cube(center, dy)

    const mouse = { down: false, x: 0, y: 0 }

    const tick = () => {
      for (let i = 0, ii = 8; i < ii; i++) {
        rotate(cube.vertices[i], center, Math.PI / 466, Math.PI / 666)
      }

      cube.render(svgElement, dx, dy)

      if (!mouse.down) {
        requestAnimationFrame(tick)
      }
    }

    cube.render(svgElement, dx, dy)

    svgElement.onmousedown = (e) => {
      mouse.down = true
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    svgElement.ontouchmove = (e) => {
      if (mouse.down) {
        const theta = ((e.touches[0].clientX - mouse.x) * Math.PI) / 360
        const phi = ((e.touches[0].clientY - mouse.y) * Math.PI) / 180

        for (let i = 0, ii = 8; i < ii; i++) {
          rotate(cube.vertices[i], center, theta, phi)
        }

        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY

        cube.render(svgElement, dx, dy)
      }
    }

    svgElement.onmousemove = (e) => {
      if (mouse.down) {
        const theta = ((e.clientX - mouse.x) * Math.PI) / 360
        const phi = ((e.clientY - mouse.y) * Math.PI) / 180

        for (let i = 0, ii = 8; i < ii; i++) {
          rotate(cube.vertices[i], center, theta, phi)
        }

        mouse.x = e.clientX
        mouse.y = e.clientY

        cube.render(svgElement, dx, dy)
      }
    }

    svgElement.onmouseup = () => {
      setTimeout(() => {
        mouse.down = false
        requestAnimationFrame(tick)
      }, 200)
    }

    requestAnimationFrame(tick)
  }
}
