import React from "react";
import { FieldInputProps } from "formik";
import * as S from "./styled";

export interface ComponentProps {
  label?: string;
  placeholder?: string;
  name?: string;
}

type Props = ComponentProps & FieldInputProps<string>;

const InputText: React.FunctionComponent<Props> = ({
  label,
  ...props
}: Props) => (
  <S.InputTextWrapper>
    {label && <S.Label>{label}</S.Label>}
    <S.Input type="text" {...props} />
  </S.InputTextWrapper>
);

export default InputText;
