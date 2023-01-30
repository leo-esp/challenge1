import React from "react";
import * as S from "./styles";

export interface Props {
  visible: boolean;
  isLoading: boolean;
  isError: boolean;
}

const Tooltip: React.FC<Props> = ({ visible, isLoading, isError }) => {
  return (
    <S.Tooltip
      visible={visible}
      isLoading={isLoading}
      isError={isError}
    ></S.Tooltip>
  );
};

export default Tooltip;
