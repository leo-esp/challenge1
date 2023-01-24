import React from "react";

import Sidebar from "../../components/Sidebar";
import Trainer from "../../components/Trainer";
import Modal from "../../components/Modal";

import * as S from "./styled";

const MapPage = () => (
  <S.MapWrapper className="map">
    <Sidebar />
    <Trainer />
    <Modal isOpen />
  </S.MapWrapper>
);

export default MapPage;
