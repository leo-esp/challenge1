import React from "react";

import * as S from "./styled";

export interface Props {
  text?: string;
  icon?: string;
  onClick?: () => void;
  onlyIcon?: boolean;
  type?: "submit" | "reset" | "button";
}

const Button = ({
  text = "",
  icon,
  onClick,
  type = "button",
  ...props
}: Props) => (
  <S.ButtonWrapper
    {...props}
    className={`${icon ? "icon" : ""}`}
    onClick={onClick}
  >
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
