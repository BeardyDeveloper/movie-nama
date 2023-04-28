export const selectStyles = ({ menuWidth, menuLeft, theme, error }) => ({
  container: (provided, state) => {
    return {
      ...provided,
      'height': 'auto',
      'borderRadius': '8px',
      'overflow': 'hodden',
      'backgroundColor': theme.cmp.input.bg,
      'border': `1px solid ${
        error
          ? theme.cmp.input.border.error
          : state.isFocused && state.selectProps.menuIsOpen
          ? theme.cmp.input.border.active
          : theme.cmp.input.border.default
      }`,
      'outline': `1px solid ${
        error
          ? 'none'
          : state.isFocused && state.selectProps.menuIsOpen
          ? theme.cmp.input.outline
          : 'none'
      }`,
      ':hover': {
        borderColor: error
          ? theme.cmp.input.border.error
          : !state.isFocused
          ? theme.cmp.input.border.hover
          : theme.cmp.input.border.default,
      },
    };
  },
  menu: styles => ({
    ...styles,
    width: menuWidth ?? '100%',
    left: menuLeft ?? 0,
    backgroundColor: theme.background.reverse.secondary,
    boxShadow: theme.shadows.M,
    borderRadius: '8px',
    zIndex: 9999,
    padding: '8px 0',
    height: 'auto',
  }),
  menuList: styles => ({
    ...styles,
    height: '325px',
    maxHeight: '325px',
  }),
  menuPortal: styles => ({ ...styles, zIndex: 9999 }),
  option: (provided, state) => {
    return {
      ...provided,
      'width': '100%',
      'height': '47px',
      'borderBottom': 'none',
      'cursor': 'pointer',
      'color': theme.palette.Basic.Main,
      'backgroundColor': state.isSelected ? theme.palette.Brand[500] : 'none',
      'padding': '8px 16px',
      'margin': '2px 0',
      'fontSize': theme.typography.fontSize.body.S,
      'borderRadius': '8px',
      'display': 'flex',
      ':active': {
        // react-select types can not detect suedo classes!
        ...provided[':active'],
        'backgroundColor': theme.palette.Brand[700],
        ':hover': {
          ...provided[':hover'],
          backgroundColor: theme.palette.Brand[700],
        },
      },
      ':hover': {
        ...provided,
        backgroundColor: !state.isSelected && theme.palette.Neutral[500],
      },
    };
  },
  input: styles => ({
    ...styles,
    fontFamily: 'Gilroy-SemiBold',
    borderRadius: '8px',
    marginTop: 0,
    color: theme.cmp.input.color,
    caretColor: theme.cmp.input.placeholder,
    margin: 0,
  }),
  valueContainer: styles => ({
    ...styles,
    padding: '2px 8px',
    margin: 0,
  }),
  placeholder: styles => ({
    ...styles,
    color: theme.cmp.input.placeholder,
    fontSize: theme.typography.fontSize.body.M,
    margin: 0,
  }),
  control: styles => ({
    ...styles,
    'width': '100%',
    'minHeight': '44px',
    'height': 'auto',
    'backgroundColor': 'none',
    'border': 'none',
    'padding': '0 10px',
    'boxShadow': 'none',
    '&:hover': {
      border: 'none',
    },
    '& span': {
      color: theme.cmp.input.color,
    },
    'borderRadius': '8px',
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignitems': 'center',
  }),
  dropdownIndicator: styles => ({
    ...styles,
    'color': theme.palette.Neutral[400],
    '&:hover': {
      color: theme.palette.Neutral[400],
    },
    'cursor': 'pointer',
  }),
  clearIndicator: styles => ({
    ...styles,
    'cursor': 'pointer',
    'color': theme.palette.Neutral[400],
    ':hover': {
      color: theme.palette.Neutral[400],
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: 'opacity 300ms',
    color: theme.cmp.input.color,
    margin: 0,
  }),
});
