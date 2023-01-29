import React, { useEffect, useState } from "react";

import { ChevronDownBlack } from "../../../assets/images";
import { getTypes } from "../../../services";

import * as S from "./styled";

interface Option {
  value: string;
  text: string;
}

export interface Props {
  label: string;
  options: Option[];
}

const DropdownPage: React.FunctionComponent<Props> = ({ label, ...props }) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const types = await getTypes();
      setOptions(
        types.map((type: { name: string; url: string }) => ({
          value: type.name,
          text: type.name,
        }))
      );
    };
    fetchData();
  }, []);

  return (
    <S.DropdownWrapper>
      {label && <S.Label>{label}</S.Label>}

      <S.DropdownContent>
        <S.Select {...props}>
          <S.DropdownOption value="">Selecione o(s) tipo(s)</S.DropdownOption>
          {options &&
            options.map((option, index) => (
              <S.DropdownOption key={index} value={option.value}>
                {option.text}
              </S.DropdownOption>
            ))}
        </S.Select>
        <S.DropdownIcon src={ChevronDownBlack} alt="Chevron" />
      </S.DropdownContent>
    </S.DropdownWrapper>
  );
};

export default DropdownPage;
