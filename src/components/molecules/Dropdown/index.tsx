import React, { useEffect, useState } from "react";
import { FieldProps } from "formik";
import { getTypes } from "../../../services";
import Select from "react-select";
import { OptionsType, ValueType } from "react-select/lib/types";

interface Option {
  value: string;
  label: string;
}

export interface CustomProps extends FieldProps {
  label: string;
  options: OptionsType<Option>;
  multiple?: boolean;
}

const DropdownPage: React.FunctionComponent<CustomProps> = ({
  label,
  field,
  form,
  multiple,
}) => {
  const onChange = (option: ValueType<Option | Option[]>) => {
    form.setFieldValue(
      field.name,
      multiple
        ? (option as Option[]).map((item: Option) => item.value)
        : (option as Option).value
    );
  };

  const getValue = () => {
    if (options) {
      return multiple
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return multiple ? [] : ("" as string);
    }
  };
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const types = await getTypes();
      setOptions(
        types.map((type: { name: string; url: string }) => ({
          value: type.name,
          label: type.name,
        }))
      );
    };
    fetchData();
  }, []);

  return (
    <Select
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder="Selecione o(s) tipo(s)"
      options={options}
      isMulti={multiple}
      isOptionDisabled={() => {
        return (multiple &&
          (getValue() as Array<Option>).length >= 2) as boolean;
      }}
    />
  );
};

export default DropdownPage;
