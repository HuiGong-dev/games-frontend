import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const HeaderContainer = styled.div`
  min-height: 58px;
  ${tw`
    w-full
    flex
    auto-rows-max
    items-center
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
