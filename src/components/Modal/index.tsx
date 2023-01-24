import React from "react";
import * as S from "./styles";

export interface Props {
  isOpen: boolean;
}

const Modal: React.FC<Props> = ({ isOpen }) => {
  return (
    <S.Modal isOpen={isOpen}>
      <S.ModalContent>
        <S.PokemonCircle></S.PokemonCircle>
        <S.CloseButton>X</S.CloseButton>
      </S.ModalContent>
    </S.Modal>
  );
};

export default Modal;
