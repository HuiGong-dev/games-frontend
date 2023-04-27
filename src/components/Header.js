import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const HeaderContainer = styled.div`
  min-height: 58px;
  ${tw`
    w-full
    max-w-screen-xl
    flex
    auto-rows-max
    items-center
    lg:px-12
    justify-between
    sticky
    top-0
    z-10
    bg-black
    border-b
    border-solid
    border-y-gray-700
  `}
`;

const HeaderTextContainer = styled.span`
  ${tw`
    px-5
    
  `}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>My Game Review</HeaderTextContainer>
    </HeaderContainer>
  );
};

export default Header;
