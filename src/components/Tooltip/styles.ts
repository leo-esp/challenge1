import styled from "styled-components";
import { Props as TooltipProps } from "./index";
import { theme } from "../../assets/styles/colors";
import searchTooltip from "../../assets/images/searchTooltip.png";
import searchingTooltip from "../../assets/images/searchingTooltip.png";

type StyledTooltipProps = TooltipProps & { theme: typeof theme };

export const Tooltip = styled.img<TooltipProps>`
  color: ${(props: StyledTooltipProps) => props.theme.action};
  visibility: hidden;
  opacity: 0;
  content: ${(props: StyledTooltipProps) =>
    props.isLoading ? `url(${searchingTooltip})` : `url(${searchTooltip})`};
  position: relative;
  left: 3px;
  top: 20px;

  ${(props: StyledTooltipProps) =>
    props.visible &&
    `
        top: -5px;
        opacity: 1;
        visibility: visible;
        transition: 0.5s;
  `}
`;
