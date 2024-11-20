import { expect, test } from "bun:test";
import t from "./index";

test("number", () => {
  expect(t(1)).toBe("number");
});
test("nan", () => {
  expect(t(NaN)).toBe("nan");
});
test("string", () => {
  expect(t("a")).toBe("string");
});
test("boolean", () => {
  expect(t(true)).toBe("boolean");
});
test("null", () => {
  expect(t(null)).toBe("null");
});
test("undefined", () => {
  expect(t(undefined)).toBe("undefined");
});
test("array", () => {
  expect(t([])).toBe("array");
});
test("object", () => {
  expect(t({})).toBe("object");
});
test("function", () => {
  expect(t(() => {})).toBe("function");
});
test("symbol", () => {
  expect(t(Symbol())).toBe("symbol");
});
test("date", () => {
  expect(t(new Date())).toBe("date");
});
test("promise", () => {
  expect(t(Promise.resolve())).toBe("promise");
});
test("bigint", () => {
  expect(t(BigInt(1))).toBe("bigint");
});
test("uint8array", () => {
  expect(t(new Uint8Array())).toBe("uint8array");
});
test("uint16array", () => {
  expect(t(new Uint16Array())).toBe("uint16array");
});
test("uint32array", () => {
  expect(t(new Uint32Array())).toBe("uint32array");
});
test("int8array", () => {
  expect(t(new Int8Array())).toBe("int8array");
});
test("int16array", () => {
  expect(t(new Int16Array())).toBe("int16array");
});
test("int32array", () => {
  expect(t(new Int32Array())).toBe("int32array");
});
test("blob", () => {
  expect(t(new Blob())).toBe("blob");
});
test("map", () => {
  expect(t(new Map())).toBe("map");
});
test("set", () => {
  expect(t(new Set())).toBe("set");
});
test("error", () => {
  expect(t(new Error())).toBe("error");
});
test("regexp", () => {
  expect(t(/a/)).toBe("regexp");
});
test("event", () => {
  expect(t(new Event("a"))).toBe("event");
});
