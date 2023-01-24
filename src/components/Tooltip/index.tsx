import React from "react";
import * as S from "./styles";

export interface Props {
  visible: boolean;
  isLoading: boolean;
}

const Tooltip: React.FC<Props> = ({ visible, isLoading }) => {
  return <S.Tooltip visible={visible} isLoading={isLoading}></S.Tooltip>;
};

export default Tooltip;
