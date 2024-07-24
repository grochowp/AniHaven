import { keyframes } from "styled-components";

export const slideOpen = keyframes`
   from {
    max-width: 0;
  }
  
  to {
    max-width: 1000px
  }
`;

export const slideClose = keyframes`
   from {
    max-width: 1000px;
  }
  
  to {
    max-width: 0;
  }
`;

export const slideLeft = keyframes`
  from {
   transform: translateX(-500px);
  }
  
  to {
     transform: translateX(0px);
  }
`;
