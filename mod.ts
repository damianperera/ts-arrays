export namespace Arrays {

    const isValidArray = (array: Array<any>): Boolean => Boolean(Array.isArray(array) && array.length);

    /**
     * Returns an array split into chunks. If the array can't be split equally based on the given size, the last chunk will be the remaining elements.
     *
     *     import { Arrays } from "https://deno.land/x/arrays/mod.ts";
     * 
     *     const arr = [1, 2, 3, 4, 5]
     *     const chunkedArr = Arrays.chunk(arr, 2)
     * 
     */
    export const chunk = (array: Array<any>, size: number): Array<any> => isValidArray(array) ? [array.slice(0, size)].concat(chunk(array.slice(size), size)) : []

    /**
     * Returns an array with all falsey values (false, null, 0, "", undefined, and NaN) removed.
     *
     *     import { Arrays } from "https://deno.land/x/arrays/mod.ts";
     * 
     *     const arr = [1, 2, 3, 4, NaN, 5, null, 6]
     *     const compactArr = Arrays.compact(arr)
     * 
     */
    export const compact = (array: Array<any>): Array<any> => array.filter(Boolean)

    /**
     * Merge the elements from the rest of the arrays (args) to the first array. A nested array will be considered as a single value.
     *
     *     import { Arrays } from "https://deno.land/x/arrays/mod.ts";
     * 
     *     const arr1 = [1, 2, 3, 4]
     *     const arr2 = ["dog", "cat"]
     *     const arr3 = [1.1, 2.2, 3.3]
     *     const arr4 = [[ "cheetah", "rhino" ], "monkey"]
     * 
     *     const mergedArr = Arrays.merge(arr1, arr2, arr3, arr4)
     * 
     */
    export const merge = (array: Array<any>, ...args: any): Array<any> => [...array, ...args.flat()]
    
    /**
     * Returns the unique values from a given array.
     *
     *     import { Arrays } from "https://deno.land/x/arrays/mod.ts";
     * 
     *     const arr = [1, 1, "Dog", "Dog", 123.42, 123.42]
     *     const uniqueArr = Arrays.unique(arr1)
     * 
     */
    export const unique = (array: Array<any>, sort: Boolean = false): Array<any> => isValidArray(array) ? (sort ? [...new Set(array)].sort() : [...new Set(array)]) : []

    /**
     * Returns the common values from all the given arrays.
     *
     *     import { Arrays } from "https://deno.land/x/arrays/mod.ts";
     * 
     *     const arr1 = [1, 2, 3, 4]
     *     const arr2 = [2, "cat"]
     *     const arr3 = [1.1, 2.2, 3]
     *     const arr4 = [[ "cheetah", "rhino" ], 4]
     * 
     *     const commonArr = Arrays.common(arr1, arr2, arr3, arr4)
     * 
     */
    export const common = (array: Array<any>, ...args: Array<any>): Array<any> => array.filter(item => args.flat().includes(item))

    /**
     * Returns the unique elements in an array compared to the rest of the arrays (args).
     *
     *     import { Arrays } from "https://deno.land/x/arrays/mod.ts";
     * 
     *     const arr1 = [1, 2, 3, 4]
     *     const arr2 = [2, "cat"]
     *     const arr3 = [1.1, 2.2, 3]
     *     const arr4 = [[ "cheetah", "rhino" ], 4]
     * 
     *     const diffArr = Arrays.diff(arr1, arr2, arr3, arr4)
     * 
     */
    export const diff = (array: Array<any>, ...args: Array<any>): Array<any> => array.filter(item => !args.flat().includes(item))

    /**
     * Returns an array without the elements in rest of the arrays (args).
     *
     *     import { Arrays } from "https://deno.land/x/arrays/mod.ts";
     * 
     *     const arr = [1, 1, "Dog", "Dog", 123.42, 123.42]
     *     const res = Arrays.remove(arr, "Dog")
     * 
     *     const resArr = Arrays.remove(arr1, arr2, arr3, arr4)
     * 
     */
    export const remove = (array: Array<any>, ...args: Array<any>) => array.filter((value) => !args.includes(value))

}