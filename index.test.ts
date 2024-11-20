import { expect, test } from "bun:test";
import t from "./index";

test("number", () => {
  expect(t(1)).toBe("number");
});

test("string", () => {
  expect(t("a")).toBe("string");
});
