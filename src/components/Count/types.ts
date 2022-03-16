export interface Props {
    msg: string
    channel?: number
}

export type PropsValueTypeOfMsg = TypeOfProperty<Props, 'msg'>
