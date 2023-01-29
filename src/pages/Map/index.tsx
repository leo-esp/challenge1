import React, { useState } from "react";

import Sidebar from "../../components/Sidebar";
import Trainer from "../../components/Trainer";
import Modal from "../../components/organisms/Modal";

import * as S from "./styled";

const MapPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <Trainer setIsOpen={setIsOpen} />
      <Modal isOpen={isOpen} isCapture={false} isCreating={false} />
    </S.MapWrapper>
  );
};

export default MapPage;
