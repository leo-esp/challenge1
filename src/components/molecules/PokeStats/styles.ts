import styled from "styled-components";
import { theme } from "../../../assets/styles/colors";

type StyledPokeStats = { inline: boolean; separator: boolean } & {
  theme: typeof theme;
};

export const PokeStats = styled.div<StyledPokeStats>`
  display: flex;
  flex-direction: ${(props: StyledPokeStats) =>
    props.inline ? "row" : "column"};
  width: 100%;
  gap: 0.5rem;
  align-items: center;

  span {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props: StyledPokeStats) => props.theme.neutrals.neutral1100};
  }

  div > span {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  ${(props: StyledPokeStats) =>
    props.separator &&
    `
      border-right: 1px solid #d3d3d3;
  `}

  ${(props: StyledPokeStats) =>
    props.inline &&
    `
      div {
        display: flex;
        flex-direction: row;
        align-itens: baseline;
        gap: 0.4rem;
      }
      span{
        font-size: 1rem;
      }
      justify-content: space-between;
  `}
`;

export const Icon = styled.img`
  width: 18px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
`;
