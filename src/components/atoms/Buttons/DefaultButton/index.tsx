import * as S from "./styled";

export interface Props {
  text?: string;
  icon?: string;
  onClick?: () => void;
  onlyIcon?: boolean;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button = ({
  text = "",
  icon,
  onClick,
  type = "button",
  disabled = false,
  ...props
}: Props) => (
  <S.ButtonWrapper
    {...props}
    className={`${icon ? "icon" : ""}`}
    onClick={onClick}
    disabled={disabled}
  >
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
