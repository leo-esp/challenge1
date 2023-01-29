import React from "react";
import { types, translatedTypes } from "../../../store/types";
import * as S from "./styles";

export interface Props {
    type: types;
}

const TypeLabel: React.FC<Props> = ({ type }) => {
    return (
        <S.TypeLabel type={type}>
            <span>{translatedTypes[type]}</span>
        </S.TypeLabel>
    );
};

export default TypeLabel;
