module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
        },
        colors: {
            custom: '#18191d', 
            white: '#fff', 
            pink: '#ea1646', 
            lightGrey: '#bebeb4', 
            yellowishWhite: '#e3e2c4', 
            darkRed: '#c71340', 
            black: '#000000', 
            dirtyWhite: '#3c3d41', 
            transparent: 'rgb(0,0,0,0)'},
        extend: {
            gridTemplateRows: {
                '12': 'repeat(12, minmax(0, 1fr))'
            },        
            gridRowStart: {
                '8': '8',
                '9': '9',
                '10': '10',
                '11': '11',
                '12': '12',
                '13': '13'
            },            
            gridRowEnd: {
                '8': '8',
                '9': '9',
                '10': '10',
                '11': '11',
                '12': '12',
                '13': '13'
            },
            height: {
                'header-negative': 'calc(100% - 3rem)',
                'double-header-negative': 'calc(100% - 6rem)',
                'dhn-vh': 'calc(100vh - 6rem)'
            },
            'animation': {
                'gradient-x':'gradient-x 15s ease infinite',
                'gradient-y':'gradient-y 15s ease infinite',
                'gradient-xy':'gradient-xy 15s ease infinite',
            },
            'keyframes': {
                'gradient-y': {
                    '0%, 100%': {
                        'background-size':'400% 400%',
                        'background-position': 'center top'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'center center'
                    }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size':'200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'right center'
                    }
                },
                'gradient-xy': {
                    '0%, 100%': {
                        'background-size':'400% 400%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size':'200% 200%',
                        'background-position': 'right center'
                    }
                }
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
