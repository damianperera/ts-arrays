[array-utils](README.md) › [Globals](globals.md)

# array-utils

## Index

### Namespaces

* [Arrays](globals.md#arrays)
* [__global](globals.md#__global)

## Namespaces

###  Arrays

• **Arrays**:

Defined in mod.ts:8

Extends Array.Prototype with the below functions.

###  chunk

▸ **chunk**(`array`: [Array](globals.md#array)‹any›, `size`: number): *[Array](globals.md#array)‹any›*

Defined in mod.ts:68

Returns an array split into chunks. If the array can't be split equally based on the given size, the last chunk will be the remaining elements.

    import 'array-utils'

    const arr = [1, 2, 3, 4, 5]
    const chunkedArr = arr.chunk(2)
    // => [[1, 2], [3, 4], 5]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](globals.md#array)‹any› | - |
`size` | number | Size of each chunk   |

**Returns:** *[Array](globals.md#array)‹any›*

###  common

▸ **common**(`array`: [Array](globals.md#array)‹any›, ...`args`: [Array](globals.md#array)‹any›): *[Array](globals.md#array)‹any›*

Defined in mod.ts:135

Returns the common values from all the given arrays.

    import from 'array-utils'

    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ 'cheetah', 'rhino' ], 4]

    const commonArr = arr1.common(arr2, arr3, arr4)
    // => [2, 3, 4]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](globals.md#array)‹any› | - |
`...args` | [Array](globals.md#array)‹any› | Rest of the arrays  |

**Returns:** *[Array](globals.md#array)‹any›*

###  compact

▸ **compact**(`array`: [Array](globals.md#array)‹any›): *[Array](globals.md#array)‹any›*

Defined in mod.ts:82

Returns an array with all falsey values (false, null, 0, '', undefined, and NaN) removed.

    import from 'array-utils'

    const arr = [1, 2, 3, 4, NaN, 5, null, 6]
    const compactArr = arr.compact()
    // => [1, 2, 3, 4, 5, 6]

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](globals.md#array)‹any› |

**Returns:** *[Array](globals.md#array)‹any›*

###  containsAll

▸ **containsAll**(`source`: [Array](globals.md#array)‹any›, ...`args`: [Array](globals.md#array)‹any›): *Boolean*

Defined in mod.ts:213

Checks if all the elements in the source array are present in the other arrays (args).

    import from 'array-utils'

    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ 'cheetah', 'rhino' ], 4]

    const arr5 = ['deno', 'land']
    const arr6 = ['land', 'deno']

    const falseyArr = arr1.containsAll(arr1, arr2, arr3, arr4)
    // => false

    const truthyArr = arr5.containsAll(arr6)
    // => true

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | [Array](globals.md#array)‹any› | - |
`...args` | [Array](globals.md#array)‹any› | Rest of the arrays  |

**Returns:** *Boolean*

###  diff

▸ **diff**(`array`: [Array](globals.md#array)‹any›, ...`args`: [Array](globals.md#array)‹any›): *[Array](globals.md#array)‹any›*

Defined in mod.ts:154

Returns the unique elements in an array compared to the rest of the arrays (args).

    import from 'array-utils'

    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ 'cheetah', 'rhino' ], 4]

    const diffArr = arr1.diff(arr2, arr3, arr4)
    // => [1]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](globals.md#array)‹any› | - |
`...args` | [Array](globals.md#array)‹any› | Rest of the arrays  |

**Returns:** *[Array](globals.md#array)‹any›*

###  flatten

▸ **flatten**(`array`: [Array](globals.md#array)‹any›): *[Array](globals.md#array)‹any›*

Defined in mod.ts:186

Flattens an arrays of arrays into a single array.

    import from 'array-utils'

    const arr = [[ 'cheetah', 'rhino', ['sun', 'moon'], [['nested nested', 'test']]], 4]
    const res = arr.flatten()
    // => ['cheetah', 'rhino', 'sun', 'moon', 'nested nested', 'test', 4]

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](globals.md#array)‹any› |

**Returns:** *[Array](globals.md#array)‹any›*

###  isType

▸ **isType**(`array`: [Array](globals.md#array)‹any›, `type`: string): *Boolean*

Defined in mod.ts:241

Flattens an array and checks if all the elements are of the specified type.

    import from 'array-utils'

    const arr = [['dog', ['sun', 'sky'], 'moon'], 'test']
    const isValid = arr.isType('number')
    // => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](globals.md#array)‹any› | - |
`type` | string | Type to match  |

**Returns:** *Boolean*

### `Const` isValidArray

▸ **isValidArray**(`array`: [Array](globals.md#array)‹any›): *Boolean*

Defined in mod.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](globals.md#array)‹any› |

**Returns:** *Boolean*

###  merge

▸ **merge**(`array`: [Array](globals.md#array)‹any›, ...`args`: any): *[Array](globals.md#array)‹any›*

Defined in mod.ts:101

Merge the elements from the rest of the arrays (args) to the first array. A nested array will be considered as a single value.

    import from 'array-utils'

    const arr1 = [1, 2, 3, 4]
    const arr2 = ['dog', 'cat']
    const arr3 = [1.1, 2.2, 3.3]
    const arr4 = [[ 'cheetah', 'rhino' ], 'monkey']

    const mergedArr = arr1.merge(arr2, arr3, arr4)
    // => [1, 2, 3, 4, 'dog', 'cat', 1.1, 2.2, 3.3, ['cheetah', 'rhino'], 'monkey']

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](globals.md#array)‹any› | - |
`...args` | any | Rest of the arrays  |

**Returns:** *[Array](globals.md#array)‹any›*

###  remove

▸ **remove**(`array`: [Array](globals.md#array)‹any›, ...`args`: any): *[Array](globals.md#array)‹any›*

Defined in mod.ts:172

Returns an array without the values passed as args.

    import from 'array-utils'

    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const res = arr.remove('Dog')
    // => [1, 1, 123.42, 123.42]

    const res2 = arr.remove(1, 'Dog')
    // => [123.42, 123.42]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](globals.md#array)‹any› | - |
`...args` | any | Elements to remove  |

**Returns:** *[Array](globals.md#array)‹any›*

###  toObject

▸ **toObject**(`array`: [Array](globals.md#array)‹any›): *Object*

Defined in mod.ts:226

Converts the nested arrays of an array into a single object of key-value pairs.

    import from 'array-utils'

    const arr = [['name', 'deno'], ['location', 'land']].toObject()
    // => { 'name': 'deno', 'location': 'land' }

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](globals.md#array)‹any› |

**Returns:** *Object*

###  unique

▸ **unique**(`array`: [Array](globals.md#array)‹any›, `sort`: Boolean): *[Array](globals.md#array)‹any›*

Defined in mod.ts:116

Returns the unique values from a given array. Optionally pass in a boolean to specify if the result should be sorted.

    import from 'array-utils'

    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const uniqueArr = arr.unique()
    // => [1, 'Dog', 123.42]

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`array` | [Array](globals.md#array)‹any› | - | - |
`sort` | Boolean | false | Return sorted values, defaults to false  |

**Returns:** *[Array](globals.md#array)‹any›*

___

###  __global

• **__global**:

Defined in mod.ts:247

###  Array

• **Array**:

Defined in mod.ts:248

###  chunk

▸ **chunk**(`size`: number): *[Array](globals.md#array)‹any›*

Defined in mod.ts:249

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[Array](globals.md#array)‹any›*

###  common

▸ **common**(...`args`: [Array](globals.md#array)‹any›): *[Array](globals.md#array)‹any›*

Defined in mod.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](globals.md#array)‹any› |

**Returns:** *[Array](globals.md#array)‹any›*

###  compact

▸ **compact**(): *[Array](globals.md#array)‹any›*

Defined in mod.ts:250

**Returns:** *[Array](globals.md#array)‹any›*

###  containsAll

▸ **containsAll**(...`args`: [Array](globals.md#array)‹any›): *Boolean*

Defined in mod.ts:257

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](globals.md#array)‹any› |

**Returns:** *Boolean*

###  diff

▸ **diff**(...`args`: [Array](globals.md#array)‹any›): *[Array](globals.md#array)‹any›*

Defined in mod.ts:254

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](globals.md#array)‹any› |

**Returns:** *[Array](globals.md#array)‹any›*

###  flatten

▸ **flatten**(): *[Array](globals.md#array)‹any›*

Defined in mod.ts:256

**Returns:** *[Array](globals.md#array)‹any›*

###  isType

▸ **isType**(`value`: string): *Boolean*

Defined in mod.ts:259

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *Boolean*

###  merge

▸ **merge**(...`args`: [Array](globals.md#array)‹any›): *[Array](globals.md#array)‹any›*

Defined in mod.ts:251

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](globals.md#array)‹any› |

**Returns:** *[Array](globals.md#array)‹any›*

###  remove

▸ **remove**(...`args`: any): *[Array](globals.md#array)‹any›*

Defined in mod.ts:255

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any |

**Returns:** *[Array](globals.md#array)‹any›*

###  toObject

▸ **toObject**(): *Object*

Defined in mod.ts:258

**Returns:** *Object*

###  unique

▸ **unique**(`sort?`: Boolean): *[Array](globals.md#array)‹any›*

Defined in mod.ts:252

**Parameters:**

Name | Type |
------ | ------ |
`sort?` | Boolean |

**Returns:** *[Array](globals.md#array)‹any›*
