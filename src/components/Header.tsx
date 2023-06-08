import styled from "styled-components";

const HeaderWrapper = styled.header`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Pomo!</Title>
    </HeaderWrapper>
  );
};

export default Header;
