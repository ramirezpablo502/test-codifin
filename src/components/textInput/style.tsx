import styled from "styled-components";

export const Wrapper = styled.div<{ width: string }>`
  & input {
    height: 0px !important;
    width: ${({ width }) => width};
  }
`;
