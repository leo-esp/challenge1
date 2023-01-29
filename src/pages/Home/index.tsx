import React from "react";
import * as S from "./styled";
import { PokemonLogo } from "../../assets/images";
import Button from "../../components/atoms/Buttons/DefaultButton";
import { Link } from "react-router-dom";

export interface Props {}
const HomePage = () => {
  return (
    <S.HomeWrapper>
      <img src={PokemonLogo} alt="Logo do Pokemon" />
      <Link to="/map">
        <Button text="Start" />
      </Link>
    </S.HomeWrapper>
  );
};

export default HomePage;
