import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../docs/', import.meta.url)));
const failures = [];
async function walk(folder) {
  const entries = await readdir(folder, { withFileTypes: true });
  const nested = await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(folder, e.name)) : [path.join(folder, e.name)]));
  return nested.flat();
}
const files = await walk(root);
const html = new Map(await Promise.all(files.filter(f => f.endsWith('.html')).map(async f => [f, await readFile(f, 'utf8')])));
for (const [file, text] of html) {
  const label = path.relative(root, file);
  if (!/<html\s+lang="en"/i.test(text) || !/<meta\s+name="viewport"/i.test(text)) failures.push(`${label}: missing language/viewport`);
  if (!/<title>[^<]+<\/title>/i.test(text) || [...text.matchAll(/<h1\b/gi)].length !== 1) failures.push(`${label}: title or H1 missing/duplicated`);
  if (/<script\b|\{\{|\bREPLACE[-_ ]WITH\b|\bTODO\b/i.test(text)) failures.push(`${label}: script or publication placeholder`);
  const ids = [...text.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  if (new Set(ids).size !== ids.length) failures.push(`${label}: duplicate anchor IDs`);
  for (const match of text.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const [, kind, url] = match;
    if (/^(https?:|mailto:)/i.test(url)) {
      if (kind === 'src') failures.push(`${label}: unexpected external asset ${url}`);
      continue;
    }
    const [route, hash] = url.split('#');
    const normal = route.startsWith('/nikfort-policies/') ? path.join(root, route.slice('/nikfort-policies/'.length)) : path.resolve(path.dirname(file), route || 'index.html');
    if (normal !== root && !normal.startsWith(root + path.sep)) { failures.push(`${label}: link escapes published root: ${url}`); continue; }
    let target = normal;
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
    } catch { failures.push(`${label}: missing target ${url}`); continue; }
    if (hash) {
      const targetText = html.get(target);
      if (!targetText?.includes(`id="${hash}"`)) failures.push(`${label}: missing anchor ${url}`);
    }
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`Checked ${html.size} HTML pages, local links/anchors, headings, placeholders and asset references. No Android tasks run.`);
