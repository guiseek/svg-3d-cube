import { EventCoordFn } from '../types/event-coord-fn'

export const touchEventToCoord: EventCoordFn<TouchEvent> = (event) => {
  event.preventDefault()
  return {
    x: event.changedTouches[0].clientX,
    y: event.changedTouches[0].clientY,
  }
}
