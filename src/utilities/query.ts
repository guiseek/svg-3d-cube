import { ElementMap, ElementSelector, ElementType } from '../types/elements'
import { Selector } from '../types/selectors'

export function query<Tag extends ElementMap>(
  selector: Tag | Selector,
  parentElement: ElementType = document.body
): ElementSelector<Tag> | null {
  return parentElement.querySelector(selector)
}
