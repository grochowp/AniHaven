import { keyframes } from "styled-components";

export const slideDown = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 1000px;
    opacity: 1;
  }
`;

export const slideUp = keyframes`
  0% {
    max-height: 1000px;
    opacity: 1;
  }
  100% {
    max-height: 0;
    opacity: 0;
  }
`;

export const showText = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const hideText = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
