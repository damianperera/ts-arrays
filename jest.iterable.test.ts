import { Iterable } from './mod'

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
    expect(sizeOfIterable).toBe(nL.length)
})