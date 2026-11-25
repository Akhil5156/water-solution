/** Client / partner logos. Add or remove files in /public/media/logos and edit this list. */
export const clientLogos = Array.from({ length: 32 }, (_, i) => ({
  name: `Client ${i + 1}`,
  src: `/media/logos/client-${i + 1}.png`,
}));
