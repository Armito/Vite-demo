export type JSXRenderer = JSX.Element | null

export interface AttackRenderer {
    (attack: number): JSXRenderer | JSXRenderer[]
}
