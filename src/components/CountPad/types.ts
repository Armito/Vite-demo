export interface CountPadProps {
    msg: string
    channel?: number
}

export type PropsValueTypeOfMsg = TypeOfProperty<CountPadProps, 'msg'>
