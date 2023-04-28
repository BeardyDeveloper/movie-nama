// app light theme & pallete

import type { IGradients, IPalette, ITheme } from './ITheme';

export const palette: IPalette = {
  Neutral: {
    50: '#060B18',
    100: '#141B2D',
    200: '#333D55',
    300: '#475169',
    400: '#646F8B',
    500: '#949EB8',
    600: '#CBD1E1',
    700: '#E2E6F0',
    800: '#F1F3F9',
    900: '#F8F9FC',
  },
  Brand: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },
  Status: {
    Rose: {
      50: '#FFF1F2',
      400: '#FB7185',
      600: '#E11D48',
      700: '#d1153e',
    },
    Amber: {
      100: '#FEF3C7',
      400: '#F59E0B',
      600: '#D97706',
    },
    Green: {
      50: '#f0fdf6',
      400: '#2dd475',
      600: '#0d9441',
      700: '#0b873a',
    },
  },
  Basic: {
    Main: '#ffffff',
    Reverse: '#000000',
  },
};

export const gradients: IGradients = {
  glass: {
    toRight: 'linear-gradient(270deg, #3D3A78 -19.01%, #191E2A 103.29%)',
    center:
      'radial-gradient(50% 6823.24% at 50% 50%, #2F2B5C 0%, #13192A 100%)',
    toBottom:
      'radial-gradient(100% 100% at 50% 100%, #1E1D49 0%, #161B30 52.95%)',
  },
  brand: {
    toBottom:
      'radial-gradient(100% 100% at 50% 100%, rgba(30, 29, 73, 0.8) 0%, rgba(22, 27, 48, 0.8) 52.95%)',
  },
};

export const lightBase: ITheme = {
  palette,
  gradients,
  shadows: {
    S: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    Default: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    M: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    L: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    XL: ' 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
    XXL: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
    Inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
  },
  opacity: {
    low: 0.25,
    medium: 0.5,
    high: 0.75,
    full: 1,
  },
  background: {
    main: {
      primary: palette.Brand[600],
    },
    light: {
      primary: palette.Basic.Reverse,
    },
    reverse: {
      primary: palette.Neutral[900],
      secondary: palette.Neutral[800],
    },
  },
  border: {
    main: {
      primary: palette.Brand[600],
    },
    reverse: {
      primary: palette.Neutral[900],
      secondary: palette.Neutral[800],
      ternary: palette.Neutral[700],
    },
  },
  box: {
    background: '#FDFDFD',
    highlight: '#F4F4F4',
    shadow: '#888888',
  },
  cmp: {
    input: {
      bg: palette.Neutral[800],
      label: palette.Basic.Reverse,
      placeholder: palette.Neutral[400],
      color: palette.Basic.Reverse,
      outline: palette.Brand[200],
      error: palette.Status.Rose[400],
      border: {
        default: palette.Neutral[400],
        hover: palette.Neutral[500],
        active: palette.Brand[500],
        error: palette.Status.Rose[400],
      },
      disabled: {
        bg: palette.Neutral[500],
        label: palette.Neutral[400],
      },
    },
    button: {
      primary: {
        default: palette.Brand[600],
        active: palette.Brand[700],
        loading: palette.Brand[400],
        text: {
          default: palette.Basic.Reverse,
          loading: palette.Basic.Reverse,
        },
      },
      success: {
        default: palette.Status.Green[600],
        active: palette.Status.Green[700],
        loading: palette.Status.Green[600],
        text: {
          default: palette.Basic.Reverse,
          loading: palette.Basic.Reverse,
        },
      },
      tertiary: {
        default: 'transparent',
        active: palette.Neutral[100],
        loading: 'transparent',
        text: {
          default: palette.Neutral[600],
          loading: palette.Neutral[500],
        },
      },
      error: {
        default: palette.Status.Rose[600],
        active: palette.Status.Rose[700],
        loading: palette.Status.Rose[600],
        text: {
          default: palette.Basic.Reverse,
          loading: palette.Basic.Reverse,
        },
      },
      disabled: {
        default: palette.Neutral[700],
        text: palette.Basic.Reverse,
      },
    },
    selection: {
      active: palette.Brand[600],
      deActive: palette.Neutral[700],
      alpha: 'transparent',
      color: palette.Basic.Reverse,
      disabled: {
        active: palette.Brand[900],
        text: palette.Neutral[400],
        tick: palette.Neutral[500],
        bg: palette.Neutral[700],
      },
    },
  },
  text: {
    main: {
      primary: palette.Basic.Reverse,
      secondary: '#FFFFFF60',
    },
    reverse: {
      primary: palette.Neutral[900],
      secondary: palette.Neutral[700],
      ternary: palette.Neutral[400],
      quaternary: palette.Neutral[300],
    },
  },
  typography: {
    fontFamily: { en: [`'Inter', sans-serif`] },
    fontWeight: {
      slim: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    lineHeight: {
      XXS: '16px',
      XS: '20px',
      S: '24px',
      M: '28px',
      L: '32px',
      XL: '36px',
      XXL: '48px',
    },
    fontSize: {
      heading: {
        S: '20px',
        M: '24px',
        L: '30px',
        XL: '36px',
        XXL: '48px',
      },
      body: {
        XS: '12px',
        S: '14px',
        M: '16px',
        L: '18px',
      },
    },
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
};
