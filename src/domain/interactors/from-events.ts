import { touchEventToCoord, mouseEventToCoord } from '../mappers'
import { fromEvent, map, merge } from 'rxjs'

export function fromEvents(domItem: Element) {
  const mouse = {
    downs: fromEvent<MouseEvent>(domItem, 'mousedown'),
    moves: fromEvent<MouseEvent>(domItem, 'mousemove'),
    ups: fromEvent<MouseEvent>(domItem, 'mouseup'),
  }

  const touch = {
    starts: fromEvent<TouchEvent>(domItem, 'touchstart'),
    moves: fromEvent<TouchEvent>(domItem, 'touchmove'),
    ends: fromEvent<TouchEvent>(domItem, 'touchend'),
  }

  const starts = merge(
    mouse.downs.pipe(map(mouseEventToCoord)),
    touch.starts.pipe(map(touchEventToCoord))
  )
  const moves = merge(
    mouse.moves.pipe(map(mouseEventToCoord)),
    touch.moves.pipe(map(touchEventToCoord))
  )
  const ends = merge(
    mouse.ups.pipe(map(mouseEventToCoord)),
    touch.ends.pipe(map(touchEventToCoord))
  )

  return { starts, moves, ends }
}
