export interface Props {
    msg: string
    channel?: number
}

export type PropsValueTypeOfMsg = TypeOfValue<Props, 'msg'>
