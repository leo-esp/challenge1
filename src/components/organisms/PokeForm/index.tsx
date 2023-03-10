import React from "react";
import * as S from "./styles";
import { Field, Formik, FormikProps } from "formik";
import InputText from "../../atoms/InputText";
import InputNumber from "../../atoms/InputNumber";
import HrTitle from "../../atoms/HrTitle";
import Button from "../../atoms/Buttons/DefaultButton";
import Dropdown from "../../molecules/Dropdown";
import { EmptyPokemon, Pokemon } from "../../../store/types";
import { addPokemonToParty } from "../../../store/pokemonPartySlice";
import { useAppDispatch } from "../../../utils/hooks";
import { setPokemonModal } from "../../../store/modalPokemonSlice";
import { setIsOpen } from "../../../store/stateSlice";
import * as Yup from "yup";

const PokemonSchema = Yup.object().shape({
  image: Yup.string().notRequired().default(""),
  name: Yup.string().required(),
  types: Yup.array().of(Yup.string()).required(),
  abilities: Yup.array().required(),
  stats: Yup.object().shape({
    attack: Yup.number().required(),
    defense: Yup.number().required(),
    specialAttack: Yup.number().required(),
    specialDefense: Yup.number().required(),
    speed: Yup.number().required(),
  }),
  bodyStats: Yup.object().shape({
    hp: Yup.number().required(),
    height: Yup.number().required(),
    weight: Yup.number().required(),
  }),
});

const PokeForm = () => {
  const dispatch = useAppDispatch();
  return (
    <S.PokeForm>
      <Formik
        initialValues={EmptyPokemon()}
        validationSchema={PokemonSchema}
        onSubmit={(values: Pokemon) => {
          dispatch(addPokemonToParty(values));
        }}
      >
        {(props: FormikProps<any>) => (
          <S.Form>
            <Field
              component={InputText}
              label="nome"
              placeholder="Nome"
              id="name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputNumber}
              label="hp"
              placeholder="HP"
              id="bodyStats.hp"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputNumber}
              label="peso"
              placeholder="Peso"
              id="bodyStats.weight"
              suffix="Kg"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputNumber}
              label="altura"
              placeholder="Altura"
              id="bodyStats.height"
              suffix="cm"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <HrTitle title="tipo" />
            <Field
              component={Dropdown}
              placeholder="Selecione o(s) tipo(s)"
              id="types"
              name="types"
              multiple
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <HrTitle title="habilidades" />
            <Field
              component={InputText}
              placeholder="Habilidade 1"
              id="abilities[0]"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputText}
              placeholder="Habilidade 2"
              id="abilities[1]"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputText}
              placeholder="Habilidade 3"
              id="abilities[2]"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputText}
              placeholder="Habilidade 4"
              id="abilities[3]"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <HrTitle title="estat??sticas" />
            <Field
              component={InputNumber}
              label="defesa"
              icon="defense"
              placeholder="00"
              name="stats.defense"
              id="stats.defense"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputNumber}
              label="ataque"
              placeholder="00"
              icon="attack"
              name="stats.attack"
              id="stats.attack"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputNumber}
              label="defesa especial"
              placeholder="00"
              icon="specialDefense"
              name="stats.specialDefense"
              id="stats.specialDefense"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputNumber}
              label="ataque especial"
              placeholder="00"
              icon="specialAttack"
              name="stats.specialAttack"
              id="stats.specialAttack"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Field
              component={InputNumber}
              label="velocidade"
              placeholder="00"
              icon="speed"
              name="stats.speed"
              id="stats.speed"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Button
              type="submit"
              text="Criar Pokemon"
              disabled={!(props.dirty && props.isValid)}
              onClick={() => {
                dispatch(setPokemonModal(null));
                dispatch(setIsOpen(false));
              }}
            />
          </S.Form>
        )}
      </Formik>
    </S.PokeForm>
  );
};

export default PokeForm;
