import styled from "styled-components";
import ashFront from "../../assets/images/ashFront.png";
import ashRight from "../../assets/images/ashRightLeg.png";
import ashLeft from "../../assets/images/ashLeftLeg.png";
import ashStop from "../../assets/images/ashStop.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Trainer = styled.div`
  content: url(${ashFront});
  cursor: pointer;
`;

export const WalkingTrainer = styled.img`
  width: fit-content;
  height: fit-content;
  animation: anim 1s infinite forwards;
  background-repeat: no-repeat;

  @keyframes anim {
    0% {
      content: url(${ashStop});
    }
    25% {
      content: url(${ashRight});
    }
    50% {
      content: url(${ashStop});
    }
    75% {
      content: url(${ashLeft});
    }
    100% {
      content: url(${ashStop});
    }
  }
`;
