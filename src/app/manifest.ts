import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Omar Ayman Portfolio',
        short_name: 'Omar Ayman',
        description: '.NET Backend Developer Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#FAF7F0',
        theme_color: '#B3261E',
        icons: [
            {
                src: '/logo.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
