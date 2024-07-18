import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export function getDirName() {
  return dirname(fileURLToPath(import.meta.url));
}
