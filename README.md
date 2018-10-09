# ramadish

Ramadish is a ramda-ish alternative. It is, however, NOT a drop-in replacement. There are some main differences - i.e. all functions are curried, and ramadish doesn't provide an alternative where you can pass the normally curried parameter as an extra parameter in the outer function call. Example:

```typescript
const square = (x: number) => x * x
map(square)([1, 2, 3]) // yes
map(square, [1, 2, 3]) // NO! Will give a TS error if you're using typescript, or not do anything if you are using JS
```

Why? To keep the API as simple as straightforward as possible, and to keep the library size down.

## Installation

`npm i ramadish` or `yarn add ramadish`

## Usage

See [complete docs](#docs) for all functions, but here's an example:

```typescript
import { append, map, pipe } from 'ramadish' // or from "ramadish/es" if your bundle doesn't detect es modules by itself

const myList = [1, 2, 3]
const square = (x: number) => x * x

const doStuff = pipe(
  append(4),
  map(square),
)

doStuff(myList) // [1, 4, 9, 16]
```

## Sane TS definitions

Ramadish is written TypeScript-first, so it comes with sane TypeScript definitions out of the box. No need to install extra packages, and there will never be discrepancies between the real world and the types. Good stuff.

## Tree shakable

Ramadish comes with esmodules out of the box, meaning it's tree shakable. `package.json` declares the `modules` field, so your favourite bundle _should_ be able to find the esmodules automagically. But just in case it doesn't esmodules lives under `ramadish/es`, while CJS lives under `ramadish/dist` and is ofc declared as `main`.

## Key differences to ramda

Apart from curried-only functions (described in the introduction), ramadish is still under development and some functions will be missing. Feel free to open an issue if your favourite utility isn't in here yet! However the goal isn't, as described, to be a drop-in replacement for ramda. In fact, some functions will be missing or different. For example ramadish doesn't come with `addIndex`, because `map` and `reduce` provides indexes out of the box in ramadish. Another example is ramdas `chain` - it's named `flatMap` in ramadish, just because that's a more common name imo.
## Docs

// TODO
