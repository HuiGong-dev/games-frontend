import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import tw from 'twin.macro';

const ButtonContainer = styled.button`
  ${tw`
    hover:cursor-pointer 
    hover:border-electricblue
    hover:border
    hover:rounded-md
    hover:text-electricblue
    px-5 
    py-2 
    border
    rounded-md
    
  `}
`;

const Review = ({ review, handleEditClick, deleteReviewById }) => {
  return (
    <div>
      <Row className="hover:bg-neutral-800 py-3 px-5">
        <Col className="flex flex-row pt-3 justify-between break-words">
          <div className="max-w-full text-lg">{review.body}</div>
        </Col>
        <Col>
          <div className="flex felx-row justify-end text-white text-xl mt-5">
            <ButtonContainer
              className="mr-5"
              onClick={() => {
                handleEditClick(review);
              }}
            >
              <AiOutlineEdit />
            </ButtonContainer>
            <ButtonContainer
              onClick={() => {
                deleteReviewById(review.id);
              }}
            >
              <AiOutlineDelete />
            </ButtonContainer>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr className="border-gray-800" />
        </Col>
      </Row>
    </div>
  );
};

export default Review;
