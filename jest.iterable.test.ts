import { Iterables } from './mod'

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
    expect(sizeOfIterable).toBe(iterableSize)

    for (const entry of multipleIterable) {
        expect(entry).toBeDefined()
    }
})