import React from "react";
import * as S from "./styles";
interface Props {
    onClick: () => void;
}
const CaptureButton: React.FunctionComponent<Props> = ({ ...props }) => <S.CaptureButton {...props} />;

export default CaptureButton;
