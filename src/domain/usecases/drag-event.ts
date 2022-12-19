import { fromEvents } from '../interactors/from-events'
import { concatMap, map, takeUntil } from 'rxjs'

export class DragEvent {
  events

  constructor(readonly element: SVGSVGElement) {
    this.events = fromEvents(element)
  }

  execute() {
    return this.events.starts.pipe(
      concatMap((dragStart) => {
        return this.events.moves.pipe(
          takeUntil(this.events.ends),
          map((drag) => {
            const x = drag.x - dragStart.x
            const y = drag.y - dragStart.y
            return { x, y }
          })
        )
      })
    )
  }
}
