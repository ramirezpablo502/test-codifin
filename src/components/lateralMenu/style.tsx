import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    padding: 0;
  }

  .menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 350px;
    height: 100%;
    background-color: #f4f4f4;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    transition: right 0.3s ease;
    padding: 20px;
    overflow: scroll;
    z-index: 1;
  }

  .menu.open {
    right: 0;
  }
`;
