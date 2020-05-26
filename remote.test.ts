import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import 'https://deno.land/x/arrays/mod.ts'

const { test } = Deno

test('remote - chunk', () => {
    const arr = [1, 2, 3]
    const res = arr.chunk(2)
    assertEquals(2, res.length)
    assertEquals(3, res[1][0])
})

test('remote - compact', () => {
    const arr = [ 0, 1, NaN, 2, false, 3, "", 4, null, 5]
    const res = arr.compact()
    assertEquals(5, res.length)
})

test('remote - merge', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = ["dog", "cat"]
    const arr3 = [1.1, 2.2, 3.3]
    const arr4 = [["cheetah","rhino"], "monkey"]

    const res = arr1.merge(arr2, arr3, arr4)
    assertEquals(11, res.length)
})

test('remote - unique', () => {
    const arr = [1, 1, "Dog", "Dog", 123.42, 123.42]
    const res = arr.unique()

    assertEquals(3, res.length)
})

test('remote - common', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, "cat"]
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [["cheetah", "rhino"], 4]

    const res = arr1.common(arr2, arr3, arr4)
    assertEquals(3, res.length)
})

test('remote - diff', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, "cat"]
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [["cheetah", "rhino"], 4]

    const res = arr1.diff(arr2, arr3, arr4)
    assertEquals(1, res.length)
})

test('remote - remove', () => {
    const arr = [1, 1, "Dog", "Dog", 123.42, 123.42]
    const res = arr.remove("Dog")

    assertEquals(4, res.length)
})

test('remote - flatten', () => {
    const arr = [[ "cheetah", "rhino", ["sun", "moon"], [["nested nested", "test"]]], 4]
    const res = arr.flatten()

    assertEquals(7, res.length)
})

test('remote - containAll', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, "cat"]
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ "cheetah", "rhino" ], 4]

    const arr5 = ["deno", "land"]
    const arr6 = ["land", "deno"]
     
    const res = arr1.containsAll(arr2, arr3, arr4)
    const res2 = arr5.containsAll(arr6)

    assertEquals(false, res)
    assertEquals(true, res2)
})