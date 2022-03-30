import { defineComponent, PropType } from 'vue'
import { formProps } from 'element-plus'
import { ArFormItemProps, FormComponentType } from './types'

export default defineComponent({
    name: 'ArForm',

    props: {
        // el-form的props
        ...formProps,
        
        // el-form-item列表
        formItems: {
            type: Array as PropType<ArFormItemProps[]>,
            required: true
        }
    },

    setup: (props) => {
        const { formItems, ...formProps } = props

        return () => (
            <>
                <el-form {...formProps}>
                    {
                        formItems.map(({ 
                            formComponentType, 
                            formComponentProps, 
                            ...formItemProps
                        }) => {
                            if (!formProps?.model) return

                            switch (formComponentType) {
                                case FormComponentType.Text:
                                    return (
                                        <el-form-item {...formItemProps}>
                                            <el-input 
                                                v-model={formProps.model[formItemProps.prop as string]} 
                                                {...formComponentProps} 
                                            />
                                        </el-form-item>
                                    )

                                case FormComponentType.Select:
                                    return (
                                        <el-form-item {...formItemProps}>
                                            <el-select 
                                                v-model={formProps.model[formItemProps.prop as string]}
                                                {...formComponentProps}
                                            >
                                                {/* TODO: 类型支持 */}
                                                <el-option label="Zone one" value="shanghai" />
                                                <el-option label="Zone two" value="beijing" />
                                            </el-select>
                                        </el-form-item>
                                    )
                            
                                default:
                                    return null
                            }
                        })
                    }
                </el-form>
            </>
        )
    }
})
