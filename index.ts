type types =
  | "number"
  | "string"
  | "boolean"
  | "null"
  | "undefined"
  | "array"
  | "object"
  | "function"
  | "nan";

export default function t(v: any): types {
  let type = Object.prototype.toString.call(v).slice(8, -1).toLowerCase();

  if (type === "number" && isNaN(v)) {
    type = "nan";
  }

  return type;
}