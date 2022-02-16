/*
 * @Author: Armito
 * @Date: 2022-02-16 20:17:24
 * @LastEditTime: 2022-02-16 20:54:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\utils\immutable.ts
 */
import { Map, List, Seq } from 'immutable'

export const useImmutable = () => {
    console.log('----------------')
    const map1 = Map({ a: 1, b: 2, c: 3 })
    console.log('map1:', map1)

    const map2 = map1.set('b', 50)
    console.log('map2:', map2)

    const a = map1.get('b') + ' vs. ' + map2.get('b')
    console.log(a)

    const map3 = Map({ a: 1, b: 2, c: 3 })
    console.log(map1 === map3)
    console.log(map1.equals(map3))

    const map4 = map1.set('b', 4)
    console.log(map1 === map4)

    const map5 = map1.set('b', 2)
    console.log(map1 === map5)

    const map6 = map1
    console.log(map1 === map6)

    const map = {
        d: 11,
        e: 22,
        f: 33
    }
    const map7 = map1.merge(map)
    console.log(map7.size)

    const list1 = List([1, 2, 3])
    const list = [1, 2, 4]
    const list2 = list1.concat(list)
    console.log(list2.size)

    console.log(
        Seq(map7)
            .map(x => x + 1)
            .toObject()
    )

    console.log(map7.toArray())
    console.log(map7.toJS())
    console.log(map7.toObject())

    console.log(list2.toArray())
    console.log(list2.toJS())
    console.log(list2.toObject())

    console.log('----------------')
}
