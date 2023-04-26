import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Row, Col } from 'react-bootstrap';

const Review = ({ review, handleEditClick, deleteReviewById }) => {
  return (
    <div className="mx-5 max-w-full">
      <Row className="hover:bg-neutral-800 pb-3">
        <Col className="flex flex-row justify-between pt-3">
          {review.body}
          <div>
            <button
              className="mr-4 text-lg  hover:cursor-pointer"
              onClick={() => {
                handleEditClick(review);
              }}
            >
              <AiOutlineEdit />
            </button>
            <button
              className="text-lg hover:cursor-pointer"
              onClick={() => {
                deleteReviewById(review.id);
              }}
            >
              <AiOutlineDelete />
            </button>
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
