import { ElementMap, ElementSelector } from '../types/elements'
import { Selector } from '../types/selectors'

export function queryAll<Tag extends ElementMap>(
  selector: Tag | Selector,
  parentElement: HTMLElement | SVGElement = document.body
): NodeListOf<ElementSelector<Tag>> {
  return parentElement.querySelectorAll(selector)
}
