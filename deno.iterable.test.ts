import { assertEquals, assert } from 'https://deno.land/std/testing/asserts.ts'
import { Iterables } from './mod.ts'

const { test } = Deno

test('size', () => {

    const iterableSize = 3

    function* generator() {
        let counter = 0;
        while (counter < iterableSize) {
            yield counter++;
        }
    }
    
    const iterator = generator()
    const multipleIterable = Iterables.toMultipleIterable(iterator)

    const sizeOfIterable: number = Iterables.size(multipleIterable)
    assertEquals(iterableSize, sizeOfIterable)

    for (const entry of multipleIterable) {
        assert(entry !== null)
    }
})