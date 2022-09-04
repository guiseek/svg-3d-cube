import { Selector } from './selectors'

export type ElementType = HTMLElement | SVGElement

export type ElementMap =
  | keyof SVGElementTagNameMap
  | keyof HTMLElementTagNameMap

export type ElementSelector<Key extends string> =
  Key extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[Key]
    : Key extends keyof SVGElementTagNameMap
    ? SVGElementTagNameMap[Key]
    : Key extends Selector
    ? HTMLElement
    : never
