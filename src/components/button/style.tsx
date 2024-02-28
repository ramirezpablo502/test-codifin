import styled from "styled-components";

export const Wrapper = styled.section<{ width: string }>`
  .button-add {
    background-color: #000 !important;
    text-transform: capitalize !important;
    font-size: 16px;
    width: ${({ width }) => width};

    &:disabled {
      color: white !important;
      cursor: no-drop !important;
      pointer-events: all !important;
      opacity: 0.8 !important;
    }
  }
`;
