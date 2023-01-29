import React from "react";

import Button from "../atoms/Buttons/DefaultButton";

import { PlusIcon } from "../../assets/images";

import * as S from "./styled";

const Sidebar = () => (
  <S.SideBarWrapper>
    <S.SideBarList>
      <S.SideBarItem>?</S.SideBarItem>
    </S.SideBarList>

    <Button icon={PlusIcon} text="" />
  </S.SideBarWrapper>
);

export default Sidebar;
