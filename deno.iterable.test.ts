import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'
import { Iterable } from 'https://deno.land/x/arrays/mod.ts'

const { test } = Deno

test('size', () => {
    const nL = [1, 2, 3];
    
    let index = 0;
    const iterator = {
    next: () => {
        if (index >= nL.length) {
        return { done: true };
        }
        const value = nL[index++];
        return { value, done: false };
    }
    };
    
    const iterable = {
        [Symbol.iterator]: () => iterator
      };

    const sizeOfIterable: number = Iterable.size(iterable)
    assertEquals(nL.length, sizeOfIterable)
})