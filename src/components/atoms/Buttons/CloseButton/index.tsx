import React from "react";
import * as S from "./styles";
import closeIcon from "../../../../assets/images/close.png";

export interface Props {}

const CloseButton: React.FunctionComponent<Props> = () => {
  return (
    <S.CloseButton>
      <img src={closeIcon} alt="Ícone de fechamento" />
    </S.CloseButton>
  );
};

export default CloseButton;
