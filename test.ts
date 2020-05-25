import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { ArrayUtils } from './mod.ts'

const { test } = Deno

test('chunk', () => {
    const res = ArrayUtils.chunk([ 1, 2, 3], 2)
    assertEquals(2, res.length)
    assertEquals(3, res[1][0])
})

test('compact', () => {
    const res = ArrayUtils.compact([ 0, 1, NaN, 2, false, 3, "", 4, null, 5])
    assertEquals(5, res.length)
})

test('merge', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = ["dog", "cat"]
    const arr3 = [1.1, 2.2, 3.3]
    const arr4 = [[ "cheetah", "rhino" ], "monkey"]

    const res = ArrayUtils.merge(arr1, arr2, arr3, arr4)
    assertEquals(11, res.length)
})

test('unique', () => {
    const arr = [1, 1, "Dog", "Dog", 123.42, 123.42]
    const res = ArrayUtils.unique(arr)

    assertEquals(3, res.length)
})

test('common', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, "cat"]
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ "cheetah", "rhino" ], 4]

    const res = ArrayUtils.common(arr1, arr2, arr3, arr4)
    assertEquals(3, res.length)
})

test('diff', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, "cat"]
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ "cheetah", "rhino" ], 4]

    const res = ArrayUtils.diff(arr1, arr2, arr3, arr4)
    assertEquals(1, res.length)
})


test('remove', () => {
    const arr = [1, 1, "Dog", "Dog", 123.42, 123.42]
    const res = ArrayUtils.remove(arr, "Dog")

    assertEquals(4, res.length)
})
