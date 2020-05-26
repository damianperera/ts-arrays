import { assert, assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import './mod.ts'

const { test } = Deno

test('local - chunk', () => {
    const arr = [1, 2, 3]
    const res = arr.chunk(2)
    assertEquals(2, res.length)
    assertEquals(3, res[1][0])
})

test('local - compact', () => {
    const arr = [ 0, 1, NaN, 2, false, 3, '', 4, null, 5]
    const res = arr.compact()
    assertEquals(5, res.length)
})

test('local - merge', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = ['dog', 'cat']
    const arr3 = [1.1, 2.2, 3.3]
    const arr4 = [['cheetah','rhino'], 'monkey']

    const res = arr1.merge(arr2, arr3, arr4)
    assertEquals(11, res.length)
})

test('local - unique', () => {
    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const res = arr.unique()

    assertEquals(3, res.length)
})

test('local - common', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [['cheetah', 'rhino'], 4]

    const res = arr1.common(arr2, arr3, arr4)
    assertEquals(3, res.length)
})

test('local - diff', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [['cheetah', 'rhino'], 4]

    const res = arr1.diff(arr2, arr3, arr4)
    assertEquals(1, res.length)
})

test('local - remove', () => {
    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const res = arr.remove('Dog')
    const res2 = arr.remove(1, "Dog")

    assertEquals(4, res.length)
    assertEquals(2, res2.length)
})

test('local - flatten', () => {
    const arr = [[ 'cheetah', 'rhino', ['sun', 'moon'], [['nested nested', 'test']]], 4]
    const res = arr.flatten()
    
    assertEquals(7, res.length)
})

test('local - containAll', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ 'cheetah', 'rhino' ], 4]

    const arr5 = ['deno', 'land']
    const arr6 = ['land', 'deno']
     
    const res = arr1.containsAll(arr2, arr3, arr4)
    const res2 = arr5.containsAll(arr6)

    assertEquals(false, res)
    assertEquals(true, res2)
})

test('local - toObject', () => {
    const obj = [['name', 'deno'], ['location', 'land']].toObject()
    
    assert(typeof obj === 'object')
    assertEquals({'name': 'deno', 'location': 'land'}, obj)
})

test('local - isType', () => {
    const arr = [1, 2, 3]
    const isValid = arr.isType<number>()
})