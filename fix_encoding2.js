const fs = require('fs');
const path = require('path');

// Complete cp1251 byte → Unicode code point mapping
const cp1251ToUnicode = new Array(256).fill(-1);
for (let i = 0; i < 128; i++) cp1251ToUnicode[i] = i; // 0x00-0x7F: ASCII

// 0x80-0x9F: special chars
const special80 = [
  0x0402,0x0403,0x201A,0x0453,0x201E,0x2026,0x2020,0x2021,
  0x20AC,0x2030,0x0409,0x2039,0x040A,0x040C,0x040B,0x040F,
  0x0452,0x2018,0x2019,0x201C,0x201D,0x2022,0x2013,0x2014,
  -1,    0x2122,0x0459,0x203A,0x045A,0x045C,0x045B,0x045F
];
for (let i = 0; i < 32; i++) cp1251ToUnicode[0x80 + i] = special80[i];

// 0xA0-0xBF
const specialA0 = [
  0x00A0,0x040E,0x045E,0x0408,0x00A4,0x0490,0x00A6,0x00A7,
  0x0401,0x00A9,0x0404,0x00AB,0x00AC,0x00AD,0x00AE,0x0407,
  0x00B0,0x00B1,0x0406,0x0456,0x0491,0x00B5,0x00B6,0x00B7,
  0x0451,0x2116,0x0454,0x00BB,0x0458,0x0405,0x0455,0x0457
];
for (let i = 0; i < 32; i++) cp1251ToUnicode[0xA0 + i] = specialA0[i];

// 0xC0-0xFF: Cyrillic А-я
for (let i = 0; i < 64; i++) cp1251ToUnicode[0xC0 + i] = 0x0410 + i;

// Build reverse: Unicode code point → cp1251 byte
const unicodeToCp1251 = new Map();
for (let b = 0; b < 256; b++) {
  if (cp1251ToUnicode[b] !== -1) unicodeToCp1251.set(cp1251ToUnicode[b], b);
}

function decodeIcon(content) {
  if (!content) return content;
  const bytes = [];
  for (const ch of content) {
    const cp = ch.codePointAt(0);
    if (unicodeToCp1251.has(cp)) {
      // Char is still in cp1251 mojibake form (was NOT touched by bad script)
      bytes.push(unicodeToCp1251.get(cp));
    } else if (cp >= 0x0000 && cp <= 0x005F) {
      // Char was MANGLED by bad script: was U+0400-U+045F, low byte extracted
      // Reverse: originalUnicode = U+0400 + cp
      const originalCp = 0x0400 + cp;
      if (unicodeToCp1251.has(originalCp)) {
        bytes.push(unicodeToCp1251.get(originalCp));
      } else {
        return null; // can't decode, skip
      }
    } else {
      // Unknown char in icon context — skip this icon
      return null;
    }
  }
  try {
    const buf = Buffer.from(bytes);
    const decoded = buf.toString('utf8');
    if (decoded.includes('\uFFFD')) return null;
    return decoded;
  } catch (e) {
    return null;
  }
}

const dir = path.dirname(__filename);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const fixed = content.replace(
    /(<(?:span class="nav-icon"|div class="card-icon")>)([^<]*)(<\/(?:span|div)>)/g,
    (match, open, iconContent, close) => {
      if (!iconContent) return match;
      const decoded = decodeIcon(iconContent);
      if (decoded !== null && decoded !== iconContent) {
        totalFixed++;
        return open + decoded + close;
      }
      return match;
    }
  );

  if (fixed !== content) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log('Fixed: ' + file);
  } else {
    console.log('No changes: ' + file);
  }
}

console.log('\nTotal icons fixed: ' + totalFixed);
