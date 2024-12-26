// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://stargazers.club',
    integrations: [
        starlight({
            title: 'My Blogs',
            favicon: "./src/assets/pikachu.jpeg",

            logo: {
                src: "./src/assets/pikachu-image.png"
            },

            social: {
                discord: 'https://discordapp.com/users/1237395043669639233',
                github: 'https://github.com/thepikachudev',
                 'x.com': 'https://x.com/ThePikachuDev',
            },

            tableOfContents: false,

            sidebar: [
                {
                    label: 'Blogs',
                    autogenerate: { directory: 'blogs/' },
                },
            ],
        }), tailwind()],
});
