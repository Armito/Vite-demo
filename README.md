### 指令

- 全局注册，钩子名称全面修改

- 局部注册，在setup语法糖中直接声明，即可使用

```typescript
import VueLogo from '@/assets/logo.png'

const vMarker: ObjectDirective = {
  mounted: (el: HTMLElement) => {
    el.style.backgroundImage = `url(${VueLogo})`
    el.style.backgroundPosition = 'center'
    el.style.backgroundSize = 'contain'
  }
}
```

```html
<div v-marker="null"></div>
```

### ref

- 使用ref获取子组件实例，方式见下：

script
```typescript
const bookTitleInput = ref()
onMounted(() => { bookTitleInput.value.focus() })
```

template
```html
<input ref="bookTitleInput" />
```

### expose

- 子组件选择性暴露组件实例上的 property，以供父组件直接调用

setup语法糖中：
```typescript
defineExpose({
    count: count,
    increment: increment 
})
```

setup入口函数中
```typescript
setup(props, { expose }) {
    expose({
        count: count,
        increment: increment 
    })
}
```

options选项中
```typescript
export default {
    expose: ['count', 'increment']
}
```

### 组件的name

- 使用vite-plugin-vue-setup-extend，在script标签中添加name属性

### props

- 使用defineProps函数定义，此函数不用单独引入

- 此函数定义props方式有三种：

数组语法

```typescript
const props = defineProps(['name', 'age'])
```

对象语法

```typescript
const props = defineProps({
    name: String,
    age: {
        type: Number,
        default: 18
    }
})
```

ts泛型语法

```typescript
const props = defineProps<{
    name: string
    age?: number
}>()
```

### teleport

- 同react的createPortal

```html
<teleport to="body">
    <div>123</div>
</teleport>
```

### vite插件

- vite-plugin-vue-setup-extend：给setup语法中的组件增加name属性

- vite-plugin-pages：自动生成路由