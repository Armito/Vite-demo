import { FormItemProps, InputProps } from 'element-plus'

export enum FormComponentType {
    Text = 'text',
    Select = 'select'
}

export type FormComponentProps = InputProps

export type ArFormItemProps = Partial<FormItemProps> & {
    formComponentType: FormComponentType
    formComponentProps?: FormComponentProps
}
