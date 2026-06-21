tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                'heading-2': ['"Playfair Display"', 'serif'],
                body: ['"DM Sans"', 'sans-serif'],
            },
            colors: {
                // Daisy palette: dirty white petals, sunshine-yellow center,
                // leafy green accents, earthy brown grounding tones.
                ivory: '#fdfcf8',     // dirty white — base background (petals)
                mist: '#eceadf',      // light gray — secondary surfaces
                blossom: '#f5d949',   // daisy-yellow — primary accent (center)
                'blossom-light': '#faea9c', // pale daisy-yellow — soft highlights
                'blossom-dark': '#e0c12e',
                leaf: '#6b8f3e',       // leafy green — secondary accent
                'leaf-dark': '#54702f',
                bark: '#7a5c3e',       // brown — grounding/text accent
                'bark-light': '#a9876688', // lighter brown — muted text/borders
                'bark-dark': '#5e4630',
            },
        },
    },
};