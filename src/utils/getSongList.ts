import { join } from "node:path";
import { readdir } from "node:fs/promises";
import { getDirName } from "~/utils/getDirName";

const __dirname = getDirName();

export async function getSongList() {
  const musicFolderPath = join(__dirname, "..", "..", "public", "music");
  const files = await readdir(musicFolderPath);
  return files;
}
