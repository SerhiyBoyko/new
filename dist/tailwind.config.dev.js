"use strict";

var _theme;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  purge: {
    content: ['./dist/**/*.html']
  },
  darkMode: false,
  // or 'media' or 'class'
  theme: (_theme = {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#181F48',
        blue: '#305DFB',
        green: '#1FCA3E',
        gray: {
          light: '#E5E5E5'
        },
        secondary: {
          '1': '#7B7E92',
          '2': '#A5A9C0',
          '3': '#DBDADA',
          '4': '#F8F8F8',
          '5': '#EFF3FF',
          '6': '#E2FAE6',
          '7': '#E3E8E9'
        }
      },
      fontSize: {
        'x': ['10px', {
          lineHeight: '1.5'
        }],
        'h1-m': ['30px', {
          lineHeight: '1.24'
        }],
        'h1-t': ['48px', {
          lineHeight: '1.24'
        }],
        'h1-d': ['64px', {
          lineHeight: '1.24'
        }],
        'mbace': ['16px', {
          lineHeight: '1.5'
        }],
        'mtitle': ['18px', {
          lineHeight: '1.5'
        }]
      },
      spacing: {
        '2px': '2px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '15px': '15px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '23px': '23px',
        '24px': '24px',
        '25px': '25px',
        '26px': '26px',
        '29px': '29px',
        '30px': '30px',
        '35px': '35px',
        '37px': '37px',
        '38px': '38px',
        '40px': '40px',
        '42px': '42px',
        '45px': '45px',
        '47px': '47px',
        '48px': '48px',
        '50px': '50px',
        '51px': '51px',
        '52px': '52px',
        '53px': '53px',
        '55px': '55px',
        '56px': '56px',
        '58px': '58px',
        '60px': '60px',
        '63px': '63px',
        '70px': '70px',
        '71px': '71px',
        '72px': '72px',
        '76px': '76px',
        '80px': '80px',
        '83px': '83px',
        '89px': '89px',
        '90px': '90px',
        '98px': '98px',
        '100px': '100px',
        '110px': '110px',
        '112px': '112px',
        '113px': '113px',
        '120px': '120px',
        '142px': '142px',
        '144px': '144px',
        '151px': '151px',
        '139px': '139px',
        '179px': '179px',
        '183px': '183px',
        '190px': '190px',
        '221px': '221px',
        '231px': '231px',
        '317px': '317px',
        '342px': '342px',
        '415px': '415px',
        '505px': '505px',
        '780px': '780px'
      },
      backgroundImage: function backgroundImage(theme) {
        return {
          'img-cover': "url('images/cover.jpg')",
          'img-cover-2': "url('images/cover-2.jpg')",
          'img-dot': "url('images/dot.png')"
        };
      },
      backgroundSize: {
        'wide': '100% 100%'
      },
      zIndex: {
        '-1': '-1'
      },
      transitionProperty: {
        'all': 'all',
        'opacity': 'opacity',
        'hamburger': 'opacity, filter, -webkit-filter'
      },
      transitionDuration: {
        '0': '0ms',
        '4': '.4s',
        '2000': '2000ms'
      },
      transitionDelay: {
        '0': '0',
        '1': '.1s'
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: 0
          },
          'to': {
            opacity: 1
          }
        },
        fadeOut: {
          'from': {
            opacity: 1
          },
          'to': {
            opacity: 0
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn .5s ease-in-out both',
        fadeOut: 'fadeOut .5s ease-in-out both'
      }
    },
    fontFamily: {
      'body': ['"Proxima Nova"', 'Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      'm': {
        'max': '767px'
      },
      'mt': {
        'max': '1099px'
      },
      't': {
        'min': '768px',
        'max': '1099px'
      },
      'td': {
        'min': '768px'
      },
      'd': '1100px'
    },
    minHeight: {
      '640': '640px'
    },
    maxWidth: {
      '330': '330px',
      '360': '360px',
      '415': '415px',
      '440': '440px',
      '505': '505px',
      '560': '560px',
      '600': '600px',
      '761': '761px',
      '787': '787px',
      '1180': '1180px'
    },
    minWidth: {
      '12': '12px',
      '38': '38px',
      '42': '42px',
      '83': '83px',
      '110': '110px',
      '120': '120px'
    }
  }, _defineProperty(_theme, "minHeight", {
    'full': '100%'
  }), _defineProperty(_theme, "borderRadius", {
    '5': '5px',
    '7': '7px',
    '10': '10px',
    '30': '30px',
    '32': '32px',
    'full': '9999px'
  }), _defineProperty(_theme, "borderWidth", {
    DEFAULT: '1px',
    '0': '0',
    '23': '23px'
  }), _defineProperty(_theme, "boxShadow", {
    base: '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04)'
  }), _defineProperty(_theme, "zIndex", {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    '50': 50,
    '100': 100
  }), _theme),
  variants: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    container: false
  }
};