export type EventCoordFn<E extends UIEvent> = (event: E) => {
  x: number
  y: number
}
