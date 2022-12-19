import { EventCoordFn } from '../types/event-coord-fn'

export const mouseEventToCoord: EventCoordFn<MouseEvent> = (event) => {
  event.preventDefault()
  return {
    x: event.clientX,
    y: event.clientY,
  }
}
