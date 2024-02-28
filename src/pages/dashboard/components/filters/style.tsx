import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .content-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400;
  }
`;
