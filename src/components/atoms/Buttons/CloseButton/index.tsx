import React from "react";
import * as S from "./styles";
import { CloseIcon } from "../../../../assets/images";

interface Props {
    onClick: () => void;
}

const CloseButton: React.FunctionComponent<Props> = ({ ...props }) => {
    return (
        <S.CloseButton {...props}>
            <img src={CloseIcon} alt="Ícone de fechamento" />
        </S.CloseButton>
    );
};

export default CloseButton;
