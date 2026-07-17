// Renders src/assets/og-image.svg to public/og-image.png (1200x630, 2x density).
// Requires the brand fonts (Clash Display, Satoshi, Inter) installed system-wide —
// baked into the clawker image via .clawker.yaml build instructions.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
await sharp(`${root}src/assets/og-image.svg`, { density: 192 })
	.resize(1200, 630)
	.png()
	.toFile(`${root}public/og-image.png`);
console.log('wrote public/og-image.png');
