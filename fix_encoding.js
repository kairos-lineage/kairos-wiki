const fs = require('fs');
const path = require('path');

// Fix mojibake: characters were UTF-8 emoji bytes read as Windows-1251 (latin1) then re-encoded as UTF-8
// To fix: encode as latin1 (1:1 byte mapping) then decode as UTF-8
function fixMojibake(str) {
  try {
    return Buffer.from(str, 'latin1').toString('utf8');
  } catch (e) {
    return str;
  }
}

// Process each HTML file
const dir = path.dirname(__filename);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
  const filePath = path.join(dir, file);
  // Read as latin1 to preserve raw bytes, then fix
  const raw = fs.readFileSync(filePath, 'utf8');

  // Replace all sequences of mojibake characters
  // These are non-ASCII chars that result from UTF-8 emoji being read as latin1
  // Pattern: sequences of chars in ranges typical for mojibake emoji
  const fixed = raw.replace(/[\u0080-\u045F\u0490-\u04FF]+/g, (match) => {
    try {
      const bytes = Buffer.from(match, 'latin1');
      const decoded = bytes.toString('utf8');
      // Only replace if it decodes to something valid (no replacement chars)
      if (!decoded.includes('\uFFFD')) {
        return decoded;
      }
    } catch (e) {}
    return match;
  });

  if (fixed !== raw) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`Fixed: ${file}`);
  } else {
    console.log(`No changes: ${file}`);
  }
}

console.log('Done!');
