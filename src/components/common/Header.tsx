import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 80px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  margin: 10px 0px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Pomo!</Title>
    </HeaderWrapper>
  );
};

export default Header;
