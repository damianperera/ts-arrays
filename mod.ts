/**
 * Extends [Array.Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods) with the below functions.
 */
export namespace Arrays {
    
    const isValidArray = (array: Array<any>): Boolean => Boolean(Array.isArray(array) && array.length);

    Array.prototype.chunk = function(size: number): Array<any> {
        return chunk(this, size)
    }

    Array.prototype.compact = function(): Array<any> {
        return compact(this)
    }

    Array.prototype.merge = function(...args: Array<any>): Array<any> {
        return merge(this, ...args)
    }

    Array.prototype.unique = function(sort: Boolean = false): Array<any> {
        return unique(this, sort)
    }

    Array.prototype.common = function(...args: Array<any>): Array<any> {
        return common(this, ...args)
    }

    Array.prototype.diff = function(...args: Array<any>): Array<any> {
        return diff(this, ...args)
    }

    Array.prototype.remove = function(...args: any): Array<any> {
        return remove(this, ...args)
    }

    Array.prototype.flatten = function(): Array<any> {
        return flatten(this)
    }

    Array.prototype.containsAll = function(...args: any): Boolean {
        return containsAll(this, ...args)
    }

    Array.prototype.toObject = function(): Object {
        return toObject(this)
    }

    Array.prototype.isType = function(value: string): Boolean {
        return isType(this, value)
    }

    /**
     * Returns an array split into chunks. If the array can't be split equally based on the given size, the last chunk will be the remaining elements.
     *
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr = [1, 2, 3, 4, 5]
     *     const chunkedArr = arr.chunk(2)
     *     // => [[1, 2], [3, 4], 5]
     * 
     * @param {number} size - Size of each chunk
     * 
     */
    export function chunk(array: Array<any>, size: number): Array<any> {
        return isValidArray(array) ? [array.slice(0, size)].concat(chunk(array.slice(size), size)) : []
    }

    /**
     * Returns an array with all falsey values (false, null, 0, '', undefined, and NaN) removed.
     *
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr = [1, 2, 3, 4, NaN, 5, null, 6]
     *     const compactArr = arr.compact()
     *     // => [1, 2, 3, 4, 5, 6]
     * 
     */
    export function compact(array: Array<any>): Array<any> {
        return array.filter(Boolean)
    }

    /**
     * Merge the elements from the rest of the arrays (args) to the first array. A nested array will be considered as a single value.
     *
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr1 = [1, 2, 3, 4]
     *     const arr2 = ['dog', 'cat']
     *     const arr3 = [1.1, 2.2, 3.3]
     *     const arr4 = [[ 'cheetah', 'rhino' ], 'monkey']
     * 
     *     const mergedArr = arr1.merge(arr2, arr3, arr4)
     *     // => [1, 2, 3, 4, 'dog', 'cat', 1.1, 2.2, 3.3, ['cheetah', 'rhino'], 'monkey']
     * 
     * @param {Array} args - Rest of the arrays
     */
    export function merge(array: Array<any>, ...args: any): Array<any> {
        return [...array, ...args.flat()]
    }
    
    /**
     * Returns the unique values from a given array. Optionally pass in a boolean to specify if the result should be sorted.
     *
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
     *     const uniqueArr = arr.unique()
     *     // => [1, 'Dog', 123.42]
     * 
     * @param {Boolean} sort - Return sorted values, defaults to false
     */
    export function unique(array: Array<any>, sort: Boolean = false): Array<any> {
        return isValidArray(array) ? (sort ? [...new Set(array)].sort() : [...new Set(array)]) : []
    }

    /**
     * Returns the common values from all the given arrays.
     *
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr1 = [1, 2, 3, 4]
     *     const arr2 = [2, 'cat']
     *     const arr3 = [1.1, 2.2, 3]
     *     const arr4 = [[ 'cheetah', 'rhino' ], 4]
     * 
     *     const commonArr = arr1.common(arr2, arr3, arr4)
     *     // => [2, 3, 4]
     * 
     * @param {Array} args - Rest of the arrays
     */
    export function common(array: Array<any>, ...args: Array<any>): Array<any> {
        return array.filter(item => args.flat().includes(item))
    }

    /**
     * Returns the unique elements in an array compared to the rest of the arrays (args).
     *
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr1 = [1, 2, 3, 4]
     *     const arr2 = [2, 'cat']
     *     const arr3 = [1.1, 2.2, 3]
     *     const arr4 = [[ 'cheetah', 'rhino' ], 4]
     * 
     *     const diffArr = arr1.diff(arr2, arr3, arr4)
     *     // => [1]
     * 
     * @param {Array} args - Rest of the arrays
     */
    export function diff(array: Array<any>, ...args: Array<any>): Array<any> {
        return array.filter(item => !args.flat().includes(item))
    }

    /**
     * Returns an array without the values passed as args.
     *
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
     *     const res = arr.remove('Dog')
     *     // => [1, 1, 123.42, 123.42]
     * 
     *     const res2 = arr.remove(1, 'Dog')
     *     // => [123.42, 123.42]
     * 
     * @param {any} args - Elements to remove
     */
    export function remove(array: Array<any>, ...args: any): Array<any> {
        return array.filter((value) => !args.includes(value))
    }

    /**
     * Flattens an arrays of arrays into a single array.
     * 
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr = [[ 'cheetah', 'rhino', ['sun', 'moon'], [['nested nested', 'test']]], 4]
     *     const res = arr.flatten()
     *     // => ['cheetah', 'rhino', 'sun', 'moon', 'nested nested', 'test', 4]
     * 
     */
    export function flatten(array: Array<any>): Array<any> {
        return array.reduce((accumulator, value) => {
            return accumulator.concat(Array.isArray(value) ? flatten(value) : value)
        }, [])
    }

    /**
     * Checks if all the elements in the source array are present in the other arrays (args).
     *
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr1 = [1, 2, 3, 4]
     *     const arr2 = [2, 'cat']
     *     const arr3 = [1.1, 2.2, 3]
     *     const arr4 = [[ 'cheetah', 'rhino' ], 4]
     * 
     *     const arr5 = ['deno', 'land']
     *     const arr6 = ['land', 'deno']
     * 
     *     const falseyArr = arr1.containsAll(arr1, arr2, arr3, arr4)
     *     // => false
     * 
     *     const truthyArr = arr5.containsAll(arr6)
     *     // => true
     * 
     * @param {Array} args - Rest of the arrays
     */
    export function containsAll(source: Array<any>, ...args: Array<any>): Boolean {
        return diff(source, ...args).length === 0
    }

    /**
     * Converts the nested arrays of an array into a single object of key-value pairs.
     * 
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr = [['name', 'deno'], ['location', 'land']].toObject()
     *     // => { 'name': 'deno', 'location': 'land' }
     * 
     */
    export function toObject(array: Array<any>): Object {
        return Object.fromEntries(array)
    }

    /**
     * Flattens an array and checks if all the elements are of the specified type.
     * 
     *     import 'https://deno.land/x/arrays/mod.ts'
     * 
     *     const arr = [['dog', ['sun', 'sky'], 'moon'], 'test']
     *     const isValid = arr.isType('number')
     *     // => false
     * 
     * @param {string} type - Type to match
     */
    export function isType(array: Array<any>, type: string): Boolean {
        return array.flatten().every(x => typeof x === type)
    }
    
}

declare global {
    interface Array<T> {
        chunk(size: number): Array<any>
        compact(): Array<any>
        merge(...args: Array<any>): Array<any>
        unique(sort?: Boolean): Array<any>
        common(...args: Array<any>): Array<any>
        diff(...args: Array<any>): Array<any>
        remove(...args: any): Array<any>
        flatten(): Array<any>
        containsAll(...args: Array<any>): Boolean
        toObject(): Object
        isType(value: string): Boolean
    }
}

/**
 * Utility methods for Iterables.
 */
export namespace Iterables {

    interface MultipleIterable<T> extends Iterable<T> {
        multipleIterable: true
    }

    class ReplayableIterable<T> implements MultipleIterable<T> {

        multipleIterable = true as true
      
        [Symbol.iterator](): Iterator<T> {
          let cur = 0
          let iterable = this
          return {
            next(): IteratorResult<T> {
              while (cur >= iterable.iteratorResults.length) {
                iterable.iteratorResults.push(iterable.iterator.next());
              }
              const ret: IteratorResult<T> = iterable.iteratorResults[cur];
              cur++
              return ret
            }
          }
        }
      
        private iterator: Iterator<T>
        private iteratorResults: Array<IteratorResult<T>>
      
        constructor(iterable: Iterable<T>) {
          this.iterator = iterable[Symbol.iterator]()
          this.iteratorResults = []
        }

        static isMultableIterable<T>(iterable: Iterable<T>): iterable is MultipleIterable<T> {
            return (iterable) && ((iterable as any).multipleIterable === true)
        }
      
    }

    /**
     * Iterating over an iterator is said to consume the iterator, because it is generally only possible to do once. 
     * This method returns an _Iterable_ that can be iterated multiple times.
     *
     *     import { Iterable } from 'https://deno.land/x/arrays/mod.ts'
     * 
     *     function* generator() {
     *         let counter = 0;
     *         while (counter < 3) {
     *             yield counter++;
     *         }
     *     }
     *     
     *     const iterator = generator()
     *     const multipleIterable = Iterables.toMultipleIterable(iterator)
     *     // => This can be reused in multiple for...of loops
     * 
     * @param {Iterable} iterable - An iterable
     */
    export function toMultipleIterable<T>(iterable: Iterable<T>): MultipleIterable<T> {
        return ReplayableIterable.isMultableIterable(iterable) ? iterable : new ReplayableIterable(iterable)
    }

    /**
     * Returns the size of an _Iterable_. In order to reuse the _Iterable_ that was passed, make sure
     * to convert it to a _MultipleIterable_ first.
     *
     *     import { Iterable } from 'https://deno.land/x/arrays/mod.ts'
     * 
     *     function* generator() {
     *         let counter = 0;
     *         while (counter < 3) {
     *             yield counter++;
     *         }
     *     }
     *     
     *     const iterator = generator()
     *     const sizeOfIterable: number = Iterables.size(multipleIterable)
     *     // => 3
     * 
     * @param {Iterable} iterable - An iterable
     */
    export function size(entries: Iterable<any>): number {
        let size = 0
        for (const entry of entries) {
            size ++
        }
        return size
    }
}