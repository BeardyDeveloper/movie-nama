/* eslint-disable complexity */
import type {
  FC,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';
import { MoonLoader } from 'react-spinners';
import styled, { css, useTheme } from 'styled-components';

export enum ButtonVariant {
  Primary = 'Primary',
  Success = 'Success',
  Tertiary = 'Tertiary',
  Error = 'Error',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ButtonProps {
  buttonSize?: ButtonSize;
  label?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant?: ButtonVariant;
  children?: ReactNode;
  selected?: boolean;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: MouseEventHandler;
}

export const Button: FC<ButtonProps> = props => {
  const {
    label,
    startIcon,
    endIcon,
    variant,
    selected,
    fullWidth,
    buttonSize,
    className,
    disabled,
    loading,
    onClick,
  } = props;

  const onButtonClick = (e: MouseEvent<HTMLElement>) => {
    if (!disabled && !loading) {
      onClick(e);
    }
  };

  const theme = useTheme();

  return (
    <StyledButton
      onClick={onButtonClick}
      type="button"
      variant={variant}
      isSelected={selected}
      fullWidth={fullWidth}
      buttonSize={buttonSize}
      disabled={disabled}
      loading={loading}
      className={className}
    >
      {!loading && startIcon ? <StartIcon>{startIcon}</StartIcon> : undefined}
      {!loading ? <Label>{props.children ?? label}</Label> : undefined}
      {!loading && endIcon ? <EndIcon>{endIcon}</EndIcon> : undefined}
      {loading ? (
        <>
          <LoadingLabel>Loading</LoadingLabel>
          <MoonLoader
            loading
            size={16}
            color={
              variant !== ButtonVariant.Primary
                ? theme.palette.Neutral[600]
                : theme.palette.Basic.Main
            }
            data-testid="loader"
          />
        </>
      ) : undefined}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: ButtonVariant.Primary,
  buttonSize: ButtonSize.Medium,
};

interface StyledButtonProps {
  variant?: ButtonVariant;
  buttonSize?: ButtonSize;
  isSelected?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  mix-blend-mode: normal;
  user-select: none;

  ${({ buttonSize, theme, disabled, loading, fullWidth }) => {
    let padding: string;
    let xPad: number;
    let fontSize: string;
    let lineHeight: string;

    switch (buttonSize) {
      case ButtonSize.Small:
        padding = '8px 12px';
        xPad = 12;
        lineHeight = theme.typography.lineHeight.XS;
        fontSize = theme.typography.fontSize.body.S;
        break;
      case ButtonSize.Medium:
        padding = '10px 16px';
        xPad = 16;
        lineHeight = theme.typography.lineHeight.S;
        fontSize = theme.typography.fontSize.body.M;
        break;
      case ButtonSize.Large:
        padding = '16px 16px';
        xPad = 16;
        lineHeight = theme.typography.lineHeight.S;
        fontSize = theme.typography.fontSize.body.M;
        break;
      default:
        padding = '10px 16px';
        xPad = 16;
        lineHeight = theme.typography.lineHeight.S;
        fontSize = theme.typography.fontSize.body.M;
    }

    return css`
      font-size: ${fontSize};
      padding: ${padding};
      line-height: ${lineHeight};
      font-weight: ${theme.typography.fontWeight.bold};
      border-radius: 8px;
      cursor: ${disabled || loading ? 'not-allowed' : 'pointer'};
      width: ${fullWidth ? `calc(100% - ${xPad * 2 + 0}px)` : 'auto'};
    `;
  }}
  ${({ isSelected, theme, loading, variant, disabled }) => {
    let bgColor: string;
    let textColor: string;
    let border: string;
    let hover: string;
    let hoverTextColor: string;
    let active: string;
    let disabledBg: string;
    let disabledTextColor: string;
    let disabledBorder: string;

    switch (variant) {
      case ButtonVariant.Primary:
        bgColor = theme.cmp.button.primary.default;
        textColor = theme.cmp.button.primary.text.default;
        border = theme.cmp.button.primary.default;
        active = theme.cmp.button.primary.active;
        hover = theme.cmp.button.primary.active;
        hoverTextColor = theme.cmp.button.primary.text.loading;
        disabledBg = theme.cmp.button.disabled.default;
        disabledTextColor = theme.cmp.button.disabled.text;
        disabledBorder = theme.cmp.button.disabled.default;
        break;
      case ButtonVariant.Success:
        bgColor = theme.cmp.button.success.default;
        textColor = theme.cmp.button.success.text.default;
        border = theme.cmp.button.success.default;
        active = theme.cmp.button.success.active;
        hover = theme.cmp.button.success.active;
        hoverTextColor = theme.cmp.button.success.text.loading;
        disabledBg = theme.cmp.button.disabled.default;
        disabledTextColor = theme.cmp.button.disabled.text;
        disabledBorder = theme.cmp.button.disabled.default;
        break;
      case ButtonVariant.Tertiary:
        bgColor = 'transparent';
        textColor = theme.cmp.button.tertiary.text.default;
        border = 'transparent';
        active = theme.cmp.button.tertiary.active;
        hover = theme.cmp.button.tertiary.active;
        hoverTextColor = theme.cmp.button.tertiary.text.loading;
        disabledBg = 'transparent';
        disabledTextColor = theme.cmp.button.disabled.text;
        disabledBorder = 'transparent';
        break;
      case ButtonVariant.Error:
        bgColor = theme.cmp.button.error.default;
        textColor = theme.cmp.button.error.text.default;
        border = theme.cmp.button.error.default;
        active = theme.cmp.button.error.active;
        hover = theme.cmp.button.error.active;
        hoverTextColor = theme.cmp.button.error.text.loading;
        disabledBg = theme.cmp.button.disabled.default;
        disabledTextColor = theme.cmp.button.disabled.text;
        disabledBorder = theme.cmp.button.disabled.default;
        break;
      default:
        bgColor = theme.cmp.button.primary.default;
        textColor = theme.cmp.button.primary.text.default;
        border = theme.cmp.button.primary.default;
        active = theme.cmp.button.primary.active;
        hover = theme.cmp.button.primary.active;
        hoverTextColor = theme.cmp.button.primary.text.loading;
        disabledBg = theme.cmp.button.disabled.default;
        disabledTextColor = theme.cmp.button.disabled.text;
        disabledBorder = theme.cmp.button.disabled.default;
        break;
    }

    const backgroundStyle = isSelected ? active : bgColor;

    return css`
      color: ${disabled ? disabledTextColor : textColor};
      opacity: ${disabled ? 0.3 : 1};
      border: 0px solid ${disabled ? disabledBorder : border};
      background: ${disabled ? disabledBg : backgroundStyle};

      &:hover {
        background: ${!disabled && hover};
        color: ${!disabled && hoverTextColor};
      }

      &:active {
        color: ${!disabled && !loading && textColor};
        background: ${!disabled && !loading && active};
      }
    `;
  }}
`;

const StartIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const EndIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const Label = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const LoadingLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-right: 8px;
`;
