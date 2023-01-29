import React, { useState } from "react";
import * as S from "./styles";
import { EditIcon, CheckIcon, CloseIcon } from "../../../assets/images";
import InputText from "../../atoms/InputText";

export interface Props {
  name: string;
  editable?: boolean;
}

const PokeName: React.FunctionComponent<Props> = ({
  name,
  editable = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <S.PokeName>
      {!isEditing && <span>{name}</span>}
      {!isEditing && editable && (
        <S.EditIcon
          src={EditIcon}
          alt="Ícone de Edição"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        />
      )}
      {isEditing && (
        <S.Container>
          <InputText
            value={name}
            name="nome"
            onChange={() => {}}
            onBlur={() => {}}
          />
          <S.ActionButton>
            <img src={CheckIcon} alt="Ícone de Confirmação" />
          </S.ActionButton>
          <S.ActionButton>
            <img src={CloseIcon} alt="Ícone de Cancelamento" />
          </S.ActionButton>
        </S.Container>
      )}
    </S.PokeName>
  );
};

export default PokeName;
