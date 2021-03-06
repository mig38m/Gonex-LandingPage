import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  img {
    width: auto;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1200px) {
    width: 20%;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export default Logo;
