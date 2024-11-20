# typeof

A utility function that accepts any type and returns its type as a string.

## use

```ts
import t from "@qzda/typeof";

console.log(t(1)); // "number"
console.log(t("a")); // "string"
console.log(t(true)); // "boolean"
console.log(t(null)); // "null"
console.log(t(undefined)); // "undefined"
console.log(t([])); // "array"
console.log(t({})); // "object"
console.log(t(() => {})); // "function"
```

## test

Use [`Bun`](https://bun.sh/) to run the test.

```bash
bun test
```
