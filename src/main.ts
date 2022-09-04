import { rotate, query } from './utilities'
import { Point3, Cube } from './core'
import './style.css'

onload = () => {
  const container = query('svg')!
  const width = container.width.baseVal.value
  const height = container.height.baseVal.value

  const dx = width / 2
  const dy = height / 2

  const center = new Point3(0, dy, 0)
  const cube = new Cube(center, dy)

  const mouse = { down: false, x: 0, y: 0 }

  const tick = () => {
    for (let i = 0, ii = 8; i < ii; i++) {
      rotate(cube.vertices[i], center, Math.PI / 270, Math.PI / 450)
    }

    cube.render(container, dx, dy)

    if (!mouse.down) {
      requestAnimationFrame(tick)
    }
  }

  cube.render(container, dx, dy)

  container.onmousedown = (e) => {
    mouse.down = true
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  container.onmousemove = (e) => {
    if (mouse.down) {
      const theta = ((e.clientX - mouse.x) * Math.PI) / 360
      const phi = ((e.clientY - mouse.y) * Math.PI) / 180

      for (let i = 0, ii = 8; i < ii; i++) {
        rotate(cube.vertices[i], center, theta, phi)
      }

      mouse.x = e.clientX
      mouse.y = e.clientY

      cube.render(container, dx, dy)
    }
  }

  container.onmouseup = () => {
    setTimeout(() => {
      mouse.down = false
      requestAnimationFrame(tick)
    }, 200)
  }

  requestAnimationFrame(tick)
}
