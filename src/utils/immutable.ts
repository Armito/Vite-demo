import { Map } from 'immutable'

export const useImmutable = () => {
    console.log('----------------')
    const map1 = Map({ a: 1, b: 2, c: 3 })
    console.log('map1:', map1)
    const map2 = map1.set('b', 50)
    console.log('map2:', map2)
    const a = map1.get('b') + ' vs. ' + map2.get('b')
    console.log(a)
    console.log('----------------')
}
