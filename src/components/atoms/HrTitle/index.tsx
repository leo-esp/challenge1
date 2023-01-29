import React from "react";
import * as S from "./styles";

export interface Props {
  title: string;
}

const HrTitle: React.FC<Props> = ({ title }) => {
  return (
    <S.HrTitle>
      <hr />
      <span>{title}</span>
      <hr />
    </S.HrTitle>
  );
};

export default HrTitle;
