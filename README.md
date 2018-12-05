# armade

armade is a ramda-ish alternative. It is, however, NOT a drop-in replacement. There are some main differences - i.e. all functions are curried, and armade doesn't provide an alternative where you can pass the normally curried parameter as an extra parameter in the outer function call. Example:

```typescript
const square = (x: number) => x * x
map(square)([1, 2, 3]) // yes
map(square, [1, 2, 3]) // NO! Will give a TS error if you're using typescript, or not do anything if you are using JS
```

Why? To keep the API as straightforward as possible, and to keep the library size down.

## Installation

`npm i armade` or `yarn add armade`

## Usage

See [complete docs](#docs) for all functions, but here's an example:

```typescript
import { append, map, pipe } from 'armade' // or from "armade/es" if your bundler doesn't detect es modules by itself

const myList = [1, 2, 3]
const square = (x: number) => x * x

const doStuff = pipe(
  append(4),
  map(square),
)

doStuff(myList) // [1, 4, 9, 16]
```

## Sane TS definitions

armade is written TypeScript-first, so it comes with sane TypeScript definitions out of the box. No need to install extra packages, and there will never be discrepancies between the real world and the types. Good stuff.

## Tree shakable

armade comes with esmodules out of the box, meaning it's tree shakable. `package.json` declares the `modules` field, so your favourite bundle _should_ be able to find the esmodules automagically. But just in case it doesn't esmodules lives under `armade/es`, while CJS lives under `armade/dist` and is ofc declared as `main`.

## Key differences to ramda

Apart from curried-only functions (described in the introduction), armade is still under development and some functions will be missing. Feel free to open an issue if your favourite utility isn't in here yet! However the goal isn't, as described, to be a drop-in replacement for ramda. In fact, some functions will be missing or different. For example armade doesn't come with `addIndex`, because `map` and `reduce` provides indexes out of the box in armade. Another example is ramdas `chain` - it's named `flatMap` in armade, just because that's a more common name imo.

## Docs

### add

Adds 2 numbers

```typescript
add(1)(2) // 3
```

### allPass

Checks if all provided functions return true, based on the input. Otherwise returns false

```typescript
const checkFooBar = allPass([
  (thing: string) => thing.startsWith('foo'),
  (thing: string) => thing.endsWith('bar'),
])

checkFooBar('foobar') // /true
checkFooBar('foo') // false
```

### always

Always return this value

```typescript
const foo = always('foo')

foo() // 'foo'
```

### and

Checks for and expressions. Not curried as of now

```typescript
and(true, true) // true
and(true, false) // false
```

### anyPass

Checks if any of the provided functions return true, based on the input. Otherwise returns false.

```typescript
const checkFooBar = allPass([
  (thing: string) => thing.startsWith('foo'),
  (thing: string) => thing.endsWith('bar'),
])

checkFooBar('foobar') // /true
checkFooBar('foo') // true
checkFooBar('blargh') // false
```

### append

Append a value to a list

```typescript
append('baz')(['foo', 'bar']) // ['foo', 'bar', 'baz']
```

### compose

Applies the given functions to the second value, starting with the last given one

```typescript
const square = (x: number) => x * x
const minusOne = (x: number) => x - 1
compose(
  minusOne,
  square,
)(4) // 15
```

### equals

Checks for equality, always with strict equals. Also deep equals arrays and objects

```typescript
equals('1')(1) // false
equals('1')('1') // true
equals([1])([1, 2]) // false
equals([1, 2])([1, 2]) // true
equals({ foo: 'bar' })({ bar: 'baz' }) // false
equals({ foo: 'bar' })({ foo: 'bar' }) // true
```

### filter

Filters a list

```typescript
const isEven = (x: number) => x % 2 === 0
filter(isEven)([1, 2, 3, 4]) // [2, 4]
```

### flatMap

Shallowly flattens an array of arrays.

```typescript
flatMap([[1, 2], [3, 4]]) // [1, 2, 3, 4]
flatMap([[[1, 2]], [3]]) // [[1, 2], 3]
```

### has

Checks whether an object as a specific key

```typescript
has('foo')({ foo: 'bar' }) // true
has('blargh')({ foo: 'bar' }) // false
```

### identity

Returns the same as you pass to it

```typescript
identity('foo') // foo
```

### ifElse

Takes something, checks for truthyness with the first parameter and executes the second function, that gets the passed value, if true or third function, that also gets the value, if false.

```typescript
const checkIfIsFoo = ifElse(
  equals('foo'),
  (value) => 'yes, ' + value,
  (value) => 'no, ' + value,
)

checkIfIsFoo('foo') // 'yes, foo'
checkIfIsFoo('bar') // 'no, bar'
```

### includes

Checks whether the passed list includes the value

```typescript
includes('foo')(['foo', 'bar']) // true
includes('baz')(['foo', 'bar']) // false
```

### isArray

Checks whether a given value is an arra

```typescript
isArray([]) // true
isArray('blargh') // false
```

### isNil

Checks whether a value is `null` or `undefined`

```typescript
isNil('') // false
isNil(null) // true
isNil(undefined) // true
```

### isObject

Checks whether the given value is an object

```typescript
isObject('hello') // false
isObject({}) // true
```

### keys

Gets the keys of a given object or array

```typescript
keys({ foo: 'bar', baz: 'qux ' }) // ['foo', 'baz']
keys(['foo', 'bar']) // [0, 1]
```

### map

Applies the given function to each item in the given list, returning a new list with the transformed values

```typescript
const square = (x: number) => x * x

map(square)([1, 2, 3]) // [1, 4, 9]
```

### not

Inverses a boolean value

```typescript
not(true) // false
```

### or

Checks if either of the given values are true. NOT curried as of now

```typescript
or(true, false) // true
or(false, false) // false
```

### path

Given a list of object properties it looks for each property deeply in the values

```typescript
path(['foo', 'bar', 'baz'])({
  foo: {
    bar: {
      baz: 'quux',
    },
  },
}) // 'quux'
path(['foo', 'bar', 'length'])({
  foo: {
    bar: 'qux',
  },
}) // 3
```

### pathOr

Like [path](#path) but defaults to the value given in the first parameter if the path doesn't exist

```typescript
pathOr('nope', ['foo', 'bar'])({
  foo: {
    bar: 'baz',
  },
}) // 'baz'
pathOr('nope', ['foo', 'bar'])({
  notFoo: 'blargh',
}) // 'nope'
```

### pipe

Applies the given functions to the second value, starting with the first given one

```typescript
const square = (x: number) => x * x
const minusOne = (x: number) => x - 1
pipe(
  square,
  minusOne,
)(4) // 15
```

### prop

Gets a property from the given value

```typescript
prop('foo')({ foo: 'bar' }) // 'bar'
prop('length')('foo') // 3
```

### propOr

Gets a property from the given value, or the alternative if the prop is null or undefined

```typescript
propOr('nope')({ foo: 'bar ' }) // 'bar'
propOr('nope')({ notFoo: 'bar' }) // 'nope'
propOr('length')('foo') // 3
```

### reduce

Returns a single item by iterating through the list, successively calling the iterator function and passing it an accumulator value and the current value from the array, and then passing the result to the next call.

```typescript
const addOrConcat = (accumulator, currentValue) => accumulator + currentValue
reduce(addOrConcat, '')(['foo', 'bar', 'baz']) // 'foobarbaz'
reduce(addOrConcat, 0)([1, 2, 3]) // 6
```

### reverse

Reverses a list

```typescript
reverse([1, 2, 3]) // [3, 2, 1]
```
