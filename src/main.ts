import { DragEvent, RenderCube, Rotate } from './domain'
import { query } from './utilities'
import { Point3 } from './core'
import './style.scss'

const element = query('svg')

onload = () => {
  if (element) {
    const { events } = new DragEvent(element)

    const dx = element.width.baseVal.value / 2
    const dy = element.height.baseVal.value / 2

    const rotate = new Rotate()
    const center = new Point3(0, dy, 0)
    const render = new RenderCube(element, center, dy)

    const mouse = { down: false, x: 0, y: 0 }

    const tick = () => {
      for (let i = 0, ii = 8; i < ii; i++) {
        rotate.execute(render.vertices[i], center, Math.PI / 466, Math.PI / 666)
      }

      render.execute(dx, dy)

      if (!mouse.down) {
        requestAnimationFrame(tick)
      }
    }

    render.execute(dx, dy)

    events.starts.subscribe((start) => {
      mouse.down = true
      mouse.x = start.x
      mouse.y = start.y
    })

    events.moves.subscribe((move) => {
      if (mouse.down) {
        const theta = ((move.x - mouse.x) * Math.PI) / 360
        const phi = ((move.y - mouse.y) * Math.PI) / 180

        for (let i = 0, ii = 8; i < ii; i++) {
          rotate.execute(render.vertices[i], center, theta, phi)
        }

        mouse.x = move.x
        mouse.y = move.y

        render.execute(dx, dy)
      }
    })

    events.ends.subscribe(() => {
      mouse.down = false
      tick()
    })

    tick()
  }
}
