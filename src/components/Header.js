import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IoGameControllerOutline } from 'react-icons/io5';

const HeaderContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    flex
    auto-rows-max
    items-center
    sticky
    top-0
    z-10
    bg-black
    border-b
    border-solid
    border-y-gray-700
    opacity-80
    text-electricblue
  `}
`;

const HeaderTextContainer = styled.span`
  ${tw`
    mx-2
  `}
`;

const HeaderIconContainer = styled.div`
  ${tw`
    pl-5
    text-2xl
  `}
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIconContainer>
        <IoGameControllerOutline />
      </HeaderIconContainer>
      <HeaderTextContainer>My Game Review</HeaderTextContainer>
    </HeaderContainer>
  );
};

export default Header;
