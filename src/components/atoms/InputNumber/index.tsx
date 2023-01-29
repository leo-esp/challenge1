import { FieldInputProps, useField } from "formik";
import React from "react";
import { Stats } from "../../../store/types";

import {
  ChevronDownBlack,
  ShieldIcon,
  SwordIcon,
  SpeedIcon,
} from "../../../assets/images";

import * as S from "./styled";

export interface ComponentProps {
  label: string;
  placeholder: string;
  name: string;
  id: string;
  suffix: string;
  icon: keyof Stats;
}

const icons = {
  attack: SwordIcon,
  specialAttack: SwordIcon,
  defense: ShieldIcon,
  specialDefense: ShieldIcon,
  speed: SpeedIcon,
};

type Props = ComponentProps & FieldInputProps<number>;

const InputNumber: React.FunctionComponent<Props> = ({
  label,
  placeholder,
  name,
  id,
  suffix,
  icon,
  onChange,
  ...props
}) => {
  const [field, meta, helpers] = useField(id);

  const { value } = meta;
  const { setValue } = helpers;
  return (
    <S.InputNumberWrapper>
      <S.IconContainer>
        {icon && <img src={icons[icon]} alt="" />}
        {label && <S.Label>{label}</S.Label>}
      </S.IconContainer>

      <S.InputContent>
        <S.Input
          type="number"
          {...props}
          {...field}
          placeholder={placeholder}
        />

        {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

        <S.InputActions>
          <S.Arrow
            src={ChevronDownBlack}
            className="increase"
            alt="Mais"
            onClick={() => {
              setValue(value + 1);
            }}
          />
          <S.Arrow
            src={ChevronDownBlack}
            className="decrease"
            alt="Menos"
            onClick={() => {
              setValue(value - 1);
            }}
          />
        </S.InputActions>
      </S.InputContent>
    </S.InputNumberWrapper>
  );
};

export default InputNumber;
