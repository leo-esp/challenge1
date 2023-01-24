import React from "react";
import * as S from "./styled";
import pokemonLogo from "assets/images/pokemonLogo.png";
import Button from "components/Button";
import { Link } from "react-router-dom";

export interface Props {}
const HomePage = () => {
  return (
    <S.HomeWrapper>
      <img src={pokemonLogo} alt="Logo do Pokemon" />
      <Link to="/map">
        <Button text="Start" />
      </Link>
    </S.HomeWrapper>
  );
};

export default HomePage;
