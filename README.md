<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [array-utils](#array-utils)
- [array-utils](#array-utils-1)
- [Arrays](#arrays)
- [Usage](#usage)
  - [Running Tests](#running-tests)
- [License](#license)
- [array-utils](#array-utils-2)
  - [Index](#index)
    - [Namespaces](#namespaces)
  - [Namespaces](#namespaces-1)
    - [Arrays](#arrays-1)
    - [chunk](#chunk)
    - [common](#common)
    - [compact](#compact)
    - [containsAll](#containsall)
    - [diff](#diff)
    - [flatten](#flatten)
    - [isType](#istype)
    - [`Const` isValidArray](#const-isvalidarray)
    - [merge](#merge)
    - [remove](#remove)
    - [toObject](#toobject)
    - [unique](#unique)
    - [__global](#__global)
    - [Array](#array)
    - [chunk](#chunk-1)
    - [common](#common-1)
    - [compact](#compact-1)
    - [containsAll](#containsall-1)
    - [diff](#diff-1)
    - [flatten](#flatten-1)
    - [isType](#istype-1)
    - [merge](#merge-1)
    - [remove](#remove-1)
    - [toObject](#toobject-1)
    - [unique](#unique-1)
- [array-utils](#array-utils-3)
  - [Index](#index-1)
    - [Namespaces](#namespaces-2)
  - [Namespaces](#namespaces-3)
    - [Arrays](#arrays-2)
    - [chunk](#chunk-2)
    - [common](#common-2)
    - [compact](#compact-2)
    - [containsAll](#containsall-2)
    - [diff](#diff-2)
    - [flatten](#flatten-2)
    - [isType](#istype-2)
    - [`Const` isValidArray](#const-isvalidarray-1)
    - [merge](#merge-2)
    - [remove](#remove-2)
    - [toObject](#toobject-2)
    - [unique](#unique-2)
    - [__global](#__global-1)
    - [Array](#array-1)
    - [chunk](#chunk-3)
    - [common](#common-3)
    - [compact](#compact-3)
    - [containsAll](#containsall-3)
    - [diff](#diff-3)
    - [flatten](#flatten-3)
    - [isType](#istype-3)
    - [merge](#merge-3)
    - [remove](#remove-3)
    - [toObject](#toobject-3)
    - [unique](#unique-3)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

[array-utils](#readmemd) › [Globals](#globalsmd)

# array-utils

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [array-utils](#array-utils)
- [Arrays](#arrays)
- [Usage](#usage)
  - [Running Tests](#running-tests)
- [License](#license)
- [array-utils](#array-utils-1)
  - [Index](#index)
    - [Namespaces](#namespaces)
  - [Namespaces](#namespaces-1)
    - [Arrays](#arrays-1)
    - [chunk](#chunk)
    - [common](#common)
    - [compact](#compact)
    - [containsAll](#containsall)
    - [diff](#diff)
    - [flatten](#flatten)
    - [isType](#istype)
    - [`Const` isValidArray](#const-isvalidarray)
    - [merge](#merge)
    - [remove](#remove)
    - [toObject](#toobject)
    - [unique](#unique)
    - [__global](#__global)
    - [Array](#array)
    - [chunk](#chunk-1)
    - [common](#common-1)
    - [compact](#compact-1)
    - [containsAll](#containsall-1)
    - [diff](#diff-1)
    - [flatten](#flatten-1)
    - [isType](#istype-1)
    - [merge](#merge-1)
    - [remove](#remove-1)
    - [toObject](#toobject-1)
    - [unique](#unique-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<a name="readmemd"></a>

[array-utils](#readmemd) › [Globals](#globalsmd)

# array-utils

# Arrays
[![deno module](https://img.shields.io/badge/deno-module-blue)](https://deno.land/x) [![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/arrays/mod.ts) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Provides utility methods for common Array operations.

# Usage

For usage guidelines and examples please refer the [documentation](https://doc.deno.land/https/deno.land/x/arrays/mod.ts).

## Running Tests
In order to run the tests execute the Deno test command from the root directory.
```console
foo@bar:~$ deno test
```

# License

[MIT](./LICENSE)

<a name="globalsmd"></a>

[array-utils](#readmemd) › [Globals](#globalsmd)

# array-utils

## Index

### Namespaces

* [Arrays](#arrays)
* [__global](#__global)

## Namespaces

###  Arrays

• **Arrays**:

Defined in mod.ts:6

Extends Array.Prototype with the below functions.

**`author`** Damian Perera

###  chunk

▸ **chunk**(`array`: [Array](#array)‹any›, `size`: number): *[Array](#array)‹any›*

Defined in mod.ts:66

Returns an array split into chunks. If the array can't be split equally based on the given size, the last chunk will be the remaining elements.

    import 'https://deno.land/x/arrays/mod.ts'

    const arr = [1, 2, 3, 4, 5]
    const chunkedArr = arr.chunk(2)
    // => [[1, 2], [3, 4], 5]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`size` | number | Size of each chunk   |

**Returns:** *[Array](#array)‹any›*

###  common

▸ **common**(`array`: [Array](#array)‹any›, ...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:133

Returns the common values from all the given arrays.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ 'cheetah', 'rhino' ], 4]

    const commonArr = arr1.common(arr2, arr3, arr4)
    // => [2, 3, 4]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`...args` | [Array](#array)‹any› | Rest of the arrays  |

**Returns:** *[Array](#array)‹any›*

###  compact

▸ **compact**(`array`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:80

Returns an array with all falsey values (false, null, 0, '', undefined, and NaN) removed.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [1, 2, 3, 4, NaN, 5, null, 6]
    const compactArr = arr.compact()
    // => [1, 2, 3, 4, 5, 6]

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  containsAll

▸ **containsAll**(`source`: [Array](#array)‹any›, ...`args`: [Array](#array)‹any›): *Boolean*

Defined in mod.ts:211

Checks if all the elements in the source array are present in the other arrays (args).

    import from 'https://deno.land/x/arrays/mod.ts'

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
`source` | [Array](#array)‹any› | - |
`...args` | [Array](#array)‹any› | Rest of the arrays  |

**Returns:** *Boolean*

###  diff

▸ **diff**(`array`: [Array](#array)‹any›, ...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:152

Returns the unique elements in an array compared to the rest of the arrays (args).

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ 'cheetah', 'rhino' ], 4]

    const diffArr = arr1.diff(arr2, arr3, arr4)
    // => [1]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`...args` | [Array](#array)‹any› | Rest of the arrays  |

**Returns:** *[Array](#array)‹any›*

###  flatten

▸ **flatten**(`array`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:184

Flattens an arrays of arrays into a single array.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [[ 'cheetah', 'rhino', ['sun', 'moon'], [['nested nested', 'test']]], 4]
    const res = arr.flatten()
    // => ['cheetah', 'rhino', 'sun', 'moon', 'nested nested', 'test', 4]

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  isType

▸ **isType**(`array`: [Array](#array)‹any›, `type`: string): *Boolean*

Defined in mod.ts:239

Flattens an array and checks if all the elements are of the specified type.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [['dog', ['sun', 'sky'], 'moon'], 'test']
    const isValid = arr.isType('number')
    // => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`type` | string | Type to match  |

**Returns:** *Boolean*

### `Const` isValidArray

▸ **isValidArray**(`array`: [Array](#array)‹any›): *Boolean*

Defined in mod.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](#array)‹any› |

**Returns:** *Boolean*

###  merge

▸ **merge**(`array`: [Array](#array)‹any›, ...`args`: any): *[Array](#array)‹any›*

Defined in mod.ts:99

Merge the elements from the rest of the arrays (args) to the first array. A nested array will be considered as a single value.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr1 = [1, 2, 3, 4]
    const arr2 = ['dog', 'cat']
    const arr3 = [1.1, 2.2, 3.3]
    const arr4 = [[ 'cheetah', 'rhino' ], 'monkey']

    const mergedArr = arr1.merge(arr2, arr3, arr4)
    // => [1, 2, 3, 4, 'dog', 'cat', 1.1, 2.2, 3.3, ['cheetah', 'rhino'], 'monkey']

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`...args` | any | Rest of the arrays  |

**Returns:** *[Array](#array)‹any›*

###  remove

▸ **remove**(`array`: [Array](#array)‹any›, ...`args`: any): *[Array](#array)‹any›*

Defined in mod.ts:170

Returns an array without the values passed as args.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const res = arr.remove('Dog')
    // => [1, 1, 123.42, 123.42]

    const res2 = arr.remove(1, 'Dog')
    // => [123.42, 123.42]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`...args` | any | Elements to remove  |

**Returns:** *[Array](#array)‹any›*

###  toObject

▸ **toObject**(`array`: [Array](#array)‹any›): *Object*

Defined in mod.ts:224

Converts the nested arrays of an array into a single object of key-value pairs.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [['name', 'deno'], ['location', 'land']].toObject()
    // => { 'name': 'deno', 'location': 'land' }

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](#array)‹any› |

**Returns:** *Object*

###  unique

▸ **unique**(`array`: [Array](#array)‹any›, `sort`: Boolean): *[Array](#array)‹any›*

Defined in mod.ts:114

Returns the unique values from a given array. Optionally pass in a boolean to specify if the result should be sorted.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const uniqueArr = arr.unique()
    // => [1, 'Dog', 123.42]

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`array` | [Array](#array)‹any› | - | - |
`sort` | Boolean | false | Return sorted values, defaults to false  |

**Returns:** *[Array](#array)‹any›*

___

###  __global

• **__global**:

Defined in mod.ts:245

###  Array

• **Array**:

Defined in mod.ts:246

###  chunk

▸ **chunk**(`size`: number): *[Array](#array)‹any›*

Defined in mod.ts:247

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[Array](#array)‹any›*

###  common

▸ **common**(...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:251

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  compact

▸ **compact**(): *[Array](#array)‹any›*

Defined in mod.ts:248

**Returns:** *[Array](#array)‹any›*

###  containsAll

▸ **containsAll**(...`args`: [Array](#array)‹any›): *Boolean*

Defined in mod.ts:255

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](#array)‹any› |

**Returns:** *Boolean*

###  diff

▸ **diff**(...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:252

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  flatten

▸ **flatten**(): *[Array](#array)‹any›*

Defined in mod.ts:254

**Returns:** *[Array](#array)‹any›*

###  isType

▸ **isType**(`value`: string): *Boolean*

Defined in mod.ts:257

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *Boolean*

###  merge

▸ **merge**(...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:249

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  remove

▸ **remove**(...`args`: any): *[Array](#array)‹any›*

Defined in mod.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any |

**Returns:** *[Array](#array)‹any›*

###  toObject

▸ **toObject**(): *Object*

Defined in mod.ts:256

**Returns:** *Object*

###  unique

▸ **unique**(`sort?`: Boolean): *[Array](#array)‹any›*

Defined in mod.ts:250

**Parameters:**

Name | Type |
------ | ------ |
`sort?` | Boolean |

**Returns:** *[Array](#array)‹any›*


<a name="globalsmd"></a>

[array-utils](#readmemd) › [Globals](#globalsmd)

# array-utils

## Index

### Namespaces

* [Arrays](#arrays)
* [__global](#__global)

## Namespaces

###  Arrays

• **Arrays**:

Defined in mod.ts:6

Extends Array.Prototype with the below functions.

**`author`** Damian Perera

###  chunk

▸ **chunk**(`array`: [Array](#array)‹any›, `size`: number): *[Array](#array)‹any›*

Defined in mod.ts:66

Returns an array split into chunks. If the array can't be split equally based on the given size, the last chunk will be the remaining elements.

    import 'https://deno.land/x/arrays/mod.ts'

    const arr = [1, 2, 3, 4, 5]
    const chunkedArr = arr.chunk(2)
    // => [[1, 2], [3, 4], 5]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`size` | number | Size of each chunk   |

**Returns:** *[Array](#array)‹any›*

###  common

▸ **common**(`array`: [Array](#array)‹any›, ...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:133

Returns the common values from all the given arrays.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ 'cheetah', 'rhino' ], 4]

    const commonArr = arr1.common(arr2, arr3, arr4)
    // => [2, 3, 4]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`...args` | [Array](#array)‹any› | Rest of the arrays  |

**Returns:** *[Array](#array)‹any›*

###  compact

▸ **compact**(`array`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:80

Returns an array with all falsey values (false, null, 0, '', undefined, and NaN) removed.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [1, 2, 3, 4, NaN, 5, null, 6]
    const compactArr = arr.compact()
    // => [1, 2, 3, 4, 5, 6]

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  containsAll

▸ **containsAll**(`source`: [Array](#array)‹any›, ...`args`: [Array](#array)‹any›): *Boolean*

Defined in mod.ts:211

Checks if all the elements in the source array are present in the other arrays (args).

    import from 'https://deno.land/x/arrays/mod.ts'

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
`source` | [Array](#array)‹any› | - |
`...args` | [Array](#array)‹any› | Rest of the arrays  |

**Returns:** *Boolean*

###  diff

▸ **diff**(`array`: [Array](#array)‹any›, ...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:152

Returns the unique elements in an array compared to the rest of the arrays (args).

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr1 = [1, 2, 3, 4]
    const arr2 = [2, 'cat']
    const arr3 = [1.1, 2.2, 3]
    const arr4 = [[ 'cheetah', 'rhino' ], 4]

    const diffArr = arr1.diff(arr2, arr3, arr4)
    // => [1]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`...args` | [Array](#array)‹any› | Rest of the arrays  |

**Returns:** *[Array](#array)‹any›*

###  flatten

▸ **flatten**(`array`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:184

Flattens an arrays of arrays into a single array.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [[ 'cheetah', 'rhino', ['sun', 'moon'], [['nested nested', 'test']]], 4]
    const res = arr.flatten()
    // => ['cheetah', 'rhino', 'sun', 'moon', 'nested nested', 'test', 4]

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  isType

▸ **isType**(`array`: [Array](#array)‹any›, `type`: string): *Boolean*

Defined in mod.ts:239

Flattens an array and checks if all the elements are of the specified type.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [['dog', ['sun', 'sky'], 'moon'], 'test']
    const isValid = arr.isType('number')
    // => false

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`type` | string | Type to match  |

**Returns:** *Boolean*

### `Const` isValidArray

▸ **isValidArray**(`array`: [Array](#array)‹any›): *Boolean*

Defined in mod.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](#array)‹any› |

**Returns:** *Boolean*

###  merge

▸ **merge**(`array`: [Array](#array)‹any›, ...`args`: any): *[Array](#array)‹any›*

Defined in mod.ts:99

Merge the elements from the rest of the arrays (args) to the first array. A nested array will be considered as a single value.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr1 = [1, 2, 3, 4]
    const arr2 = ['dog', 'cat']
    const arr3 = [1.1, 2.2, 3.3]
    const arr4 = [[ 'cheetah', 'rhino' ], 'monkey']

    const mergedArr = arr1.merge(arr2, arr3, arr4)
    // => [1, 2, 3, 4, 'dog', 'cat', 1.1, 2.2, 3.3, ['cheetah', 'rhino'], 'monkey']

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`...args` | any | Rest of the arrays  |

**Returns:** *[Array](#array)‹any›*

###  remove

▸ **remove**(`array`: [Array](#array)‹any›, ...`args`: any): *[Array](#array)‹any›*

Defined in mod.ts:170

Returns an array without the values passed as args.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const res = arr.remove('Dog')
    // => [1, 1, 123.42, 123.42]

    const res2 = arr.remove(1, 'Dog')
    // => [123.42, 123.42]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | [Array](#array)‹any› | - |
`...args` | any | Elements to remove  |

**Returns:** *[Array](#array)‹any›*

###  toObject

▸ **toObject**(`array`: [Array](#array)‹any›): *Object*

Defined in mod.ts:224

Converts the nested arrays of an array into a single object of key-value pairs.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [['name', 'deno'], ['location', 'land']].toObject()
    // => { 'name': 'deno', 'location': 'land' }

**Parameters:**

Name | Type |
------ | ------ |
`array` | [Array](#array)‹any› |

**Returns:** *Object*

###  unique

▸ **unique**(`array`: [Array](#array)‹any›, `sort`: Boolean): *[Array](#array)‹any›*

Defined in mod.ts:114

Returns the unique values from a given array. Optionally pass in a boolean to specify if the result should be sorted.

    import from 'https://deno.land/x/arrays/mod.ts'

    const arr = [1, 1, 'Dog', 'Dog', 123.42, 123.42]
    const uniqueArr = arr.unique()
    // => [1, 'Dog', 123.42]

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`array` | [Array](#array)‹any› | - | - |
`sort` | Boolean | false | Return sorted values, defaults to false  |

**Returns:** *[Array](#array)‹any›*

___

###  __global

• **__global**:

Defined in mod.ts:245

###  Array

• **Array**:

Defined in mod.ts:246

###  chunk

▸ **chunk**(`size`: number): *[Array](#array)‹any›*

Defined in mod.ts:247

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[Array](#array)‹any›*

###  common

▸ **common**(...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:251

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  compact

▸ **compact**(): *[Array](#array)‹any›*

Defined in mod.ts:248

**Returns:** *[Array](#array)‹any›*

###  containsAll

▸ **containsAll**(...`args`: [Array](#array)‹any›): *Boolean*

Defined in mod.ts:255

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](#array)‹any› |

**Returns:** *Boolean*

###  diff

▸ **diff**(...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:252

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  flatten

▸ **flatten**(): *[Array](#array)‹any›*

Defined in mod.ts:254

**Returns:** *[Array](#array)‹any›*

###  isType

▸ **isType**(`value`: string): *Boolean*

Defined in mod.ts:257

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *Boolean*

###  merge

▸ **merge**(...`args`: [Array](#array)‹any›): *[Array](#array)‹any›*

Defined in mod.ts:249

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [Array](#array)‹any› |

**Returns:** *[Array](#array)‹any›*

###  remove

▸ **remove**(...`args`: any): *[Array](#array)‹any›*

Defined in mod.ts:253

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any |

**Returns:** *[Array](#array)‹any›*

###  toObject

▸ **toObject**(): *Object*

Defined in mod.ts:256

**Returns:** *Object*

###  unique

▸ **unique**(`sort?`: Boolean): *[Array](#array)‹any›*

Defined in mod.ts:250

**Parameters:**

Name | Type |
------ | ------ |
`sort?` | Boolean |

**Returns:** *[Array](#array)‹any›*
