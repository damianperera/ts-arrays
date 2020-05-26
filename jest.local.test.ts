import './mod.ts'

test('chunk', () => {
    const arr = [1, 2, 3]
    const res = arr.chunk(2)
    expect(res.length).toBe(2)
    expect(res[1][0]).toBe(3)
})

test('compact', () => {
    const arr = [ 0, 1, NaN, 2, false, 3, '', 4, null, 5]
    const res = arr.compact()
    expect(res.length).toBe(5)
})

test('merge', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = ['dog', 'cat']
    const arr3 = [1.1, 2.2, 3.3]
    const arr4 = [['cheetah','rhino'], 'monkey']

    const res = arr1.merge(arr2, arr3, arr4)
    expect(res.length).toBe(11)
})

test('unique', () => {
    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const res = arr.unique()

    expect(res.length).toBe(3)
})

test('common', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [['cheetah', 'rhino'], 4]

    const res = arr1.common(arr2, arr3, arr4)
    expect(res.length).toBe(3)
})

test('diff', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [['cheetah', 'rhino'], 4]

    const res = arr1.diff(arr2, arr3, arr4)
    expect(res.length).toBe(1)
})

test('remove', () => {
    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const res = arr.remove('Dog')
    const res2 = arr.remove(1, "Dog")

    expect(res.length).toBe(4)
    expect(res2.length).toBe(2)
})

test('flatten', () => {
    const arr = [[ 'cheetah', 'rhino', ['sun', 'moon'], [['nested nested', 'test']]], 4]
    const res = arr.flatten()
    
    expect(res.length).toBe(7)
})

test('containAll', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ 'cheetah', 'rhino' ], 4]

    const arr5 = ['deno', 'land']
    const arr6 = ['land', 'deno']
        
    const res = arr1.containsAll(arr2, arr3, arr4)
    const res2 = arr5.containsAll(arr6)

    expect(res).toBeFalsy()
    expect(res2).toBeTruthy()
})

test('toObject', () => {
    const obj = [['name', 'deno'], ['location', 'land']].toObject()
    
    expect(typeof obj).toBe('object')
    expect(obj).toEqual({'name': 'deno', 'location': 'land'})
})

test('isType', () => {
    const arr = [1, 2, 3, 's']
    const arr2 = [['1', '2'], [ 3, 4]]
    const arr3 = [['dog', ['sun', 'sky'], 'moon'], 'test']

    expect(arr.isType('number')).toBeFalsy()
    expect(arr2.isType('number')).toBeFalsy()
    expect(arr3.isType('string')).toBeTruthy()
})