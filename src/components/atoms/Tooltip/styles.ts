import styled from "styled-components";
import { Props as TooltipProps } from "./index";
import { theme } from "../../../assets/styles/colors";
import {
  SearchTooltip,
  SearchingTooltip,
  ErrorTooltip,
} from "../../../assets/images";

type StyledTooltipProps = TooltipProps & { theme: typeof theme };

export const Tooltip = styled.img<TooltipProps>`
  color: ${(props: StyledTooltipProps) => props.theme.action};
  visibility: hidden;
  opacity: 0;
  content: ${(props: StyledTooltipProps) => {
    if (props.isError) return `url(${ErrorTooltip})`;
    if (props.isLoading) return `url(${SearchingTooltip})`;
    return `url(${SearchTooltip})`;
  }};
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
