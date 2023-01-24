import styled from "styled-components";
import theme from "../../assets/styles/colors";
import { Props as homeProps } from "./index";

type SHomeWrapperProps = homeProps & { theme: typeof theme };

export const HomeWrapper = styled.div`
  background-image: ${(props: SHomeWrapperProps) =>
    props.theme.primaryGradient};

  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
