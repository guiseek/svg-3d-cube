export type IdSelector =
  | `#${string}`
  | `#${string} ${string}`
  | `#${string} > ${string}`
  | `${string}#${string}`

export type ClassSelector =
  | `.${string}`
  | `.${string} .${string}`
  | `.${string} > .${string}`
  | `${string}.${string}`

export type AttributeSelector =
  | `[${string}]`
  | `[${string}] ${string}`
  | `[${string}] > ${string}`
  | `${string}[${string}]`

export type Selector = IdSelector | ClassSelector | AttributeSelector
