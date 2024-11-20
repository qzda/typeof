type types =
  | "number"
  | "string"
  | "boolean"
  | "null"
  | "undefined"
  | "array"
  | "object"
  | "function"
  | "nan"
  | "symbol"
  | "date"
  | "promise"
  | "bigint"
  | "uint8array"
  | "uint16array"
  | "uint32array"
  | "int8array"
  | "int16array"
  | "int32array"
  | "blob"
  | "map"
  | "set"
  | "error"
  | "regexp"
  | "event";

export default function t(v: any): types {
  let type = Object.prototype.toString.call(v).slice(8, -1).toLowerCase();

  if (type === "number" && isNaN(v)) {
    type = "nan";
  }

  return type;
}
