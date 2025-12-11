const fs = require('fs');
const path = 'node_modules/.prisma/client/index.d.ts';
try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.split('\n');
    let start = -1;
    const target = 'interface PrismaClientOptions';
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(target)) {
            start = i;
            break;
        }
    }
    if (start > -1) {
        console.log(lines.slice(start, start + 100).join('\n'));
    } else {
        console.log('Target not found');
    }
} catch (e) {
    console.error(e);
}
